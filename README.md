# WalletMarket

Web application that makes your life easier when you need to search for skins in MarketCSGO to deposit money into your Steam account. **Qiwi has blocked in Russia recently, so this is one of the only remaining methods.**

[![Screenshot](/images/image-1.png)](http://wm.fadegor05.ru/)

[Website](http://wm.fadegor05.ru/)

## Stack & technologies

- Vue.js with Vuex (storage)
- Tailwind CSS
- Vite
- Axios
- Nginx
- Docker, docker-compose

## Development

Install dependencies
```
npm install
```

Start the dev server
```
npm run dev
```

## Production

Start container with project
```
docker-compose up --build --detach
```
Stop the project
```
docker-compose stop
```