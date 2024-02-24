import store from './store.js'
import axios from 'axios'

const marketURL = '/market_api/api/v2/prices/RUB.json';
const steamURL = '/steam_api/api/GetItemPrice/?currency=RUB&time=4&icon=1&id='

const inputDelta = 0.1
const inputSelection = 20

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
    console.log(response.data)
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
                const profit = Math.round((parseFloat(steam_item.lowest_price) * 0.87 - parseFloat(market_item.price) ) * 100) / 100;
                if (profit != 0){
                    const instance = {
                        name: market_item.market_hash_name,
                        market_price: market_item.price,
                        steam_price: steam_item.lowest_price,
                        profit: profit,
                        icon: steam_item.icon
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



export default handler;