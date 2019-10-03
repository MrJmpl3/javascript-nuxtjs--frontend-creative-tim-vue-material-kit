# Nuxt - Vue Material Dashboard

> My lovely Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm dev

# build for production and launch server
$ npm build
$ npm start

# generate static project
$ npm generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Notes

1. The tag "a" in the container of Dropdown as replace to "div.item" because you can't put block element inside "a" or "p" tags.
3. Nuxt configure the Vue template compiler to delete the spaces between the html tags.
4. Some components as remaned to apply the styles guides of Vue.
5. In vue-carrousel, use the plugin "client-mode" and tag "client-only" because don't have support for SSR

## To future:

1. Renamed the components and delete the folders to apply the good practices:
   https://vuejs.org/v2/style-guide/#Order-of-words-in-component-names-strongly-recommended
   https://vuejs.org/v2/style-guide/#Tightly-coupled-component-names-strongly-recommended
