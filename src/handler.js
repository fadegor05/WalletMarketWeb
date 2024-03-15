import store from './store.js'
import axios from 'axios'

const marketURL = '/market_api/api/v2/prices/RUB.json';
const steamURL = '/steam_api/api/GetItemPrice/?currency=RUB&time=4&icon=1&id='

const inputDelta = 0.1
const inputSelection = 6

async function handler() {
    if (store.state.loading == false){
        store.state.loading = true;
        getItemsFromMarket().then((itemList => {
            getItemsWithFittablePrices(itemList, parseInt(store.state.amount), inputDelta).then(fittableItems => {
                getItemsWithMostVolume(fittableItems, inputSelection).then(mostVolumeItems => {
                    mergeAndPutSteamItems(mostVolumeItems);
                })
            })
        }));
    }
    
}

async function getItemsFromMarket() {
    let response = await axios.get(marketURL);
    return response.data.items;
}

async function getItemsWithFittablePrices(itemList, amount, delta) {
    let fittableItems = [];
    const minPrice = parseFloat(amount * (1-delta));
    const maxPrice = parseFloat(amount * (1+delta))
    itemList.forEach(item => {
        const price = parseFloat(item.price);
        if (price > minPrice && price < maxPrice) {
            fittableItems.push(item);
        }
    });
    return fittableItems;
}

async function getItemsWithMostVolume(itemList, selection) {
    itemList.sort((b,a) => a.volume - b.volume);
    let includedInSelectionItems = [];
    for (let i = 0; i < selection; i++) {
        includedInSelectionItems.push(itemList[i]);
    }
    return includedInSelectionItems;
}

async function mergeAndPutSteamItems(itemList) {
    store.state.items = [];
    itemList.forEach((market_item, index) => {
        const url = steamURL + market_item.market_hash_name;
        axios.get(url).then(response => {
            const steam_item = response.data;
            if (steam_item.success == true) {
                const steam_price = average([parseFloat(steam_item.lowest_price), parseFloat(steam_item.median_price), parseFloat(steam_item.average_price)]) * 0.87;
                const profit = steam_price - parseFloat(market_item.price);
                let icon_url = steam_item.icon;
                icon_url = icon_url.replace('http://cdn.steamcommunity.com/economy/image/', 'https://steamcommunity-a.akamaihd.net/economy/image/');
                if (profit != 0){
                    const instance = {
                        name: market_item.market_hash_name,
                        market_price: market_item.price,
                        steam_price: steam_item.lowest_price,
                        profit: profit,
                        icon: icon_url
                    }
                    store.state.items.push(instance)
                }
            }
            if (index == itemList.length - 1) {
                store.state.loading = false;
            }
        })
    })
}

function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

export default handler;