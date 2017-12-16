# @lassehaslev/vue-geocoder
> Coordinates input using Vue

## Install

```bash
# Install dependencies
npm install @lassehaslev/vue-geocoder
```

## Usage

Register component in javascript

```js
const Geocoder = require( '@lassehaslev/vue-geocoder' );
Vue.component( 'geocoder', Geocoder );
```

Now your component is ready for usage
```html
<geocoder @selected="" api-key="" limit-to-country=""></geocoder>
```


## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
