# PS weather

PS weather is a simple web widget developed with [Vue 2](https://vuejs.org/), [Vuex](https://vuex.vuejs.org/), [OpenWeather API](https://openweathermap.org/api) and wrapped into a native [web component](https://www.webcomponents.org/) with [Vue web component wrapper](https://github.com/vuejs/vue-web-component-wrapper),  that allows you to check weather in a few cities at once.
You could add, delete and sort cities as you like.

Also you could embed it to your own webpage by adding this lines to your html.

    <weather-widget></weather-widget>
    <script src="./weather-widget.js"></script>


## *Issues*
As you can see by amount of branches, something went wrong.

At first I decide to try some new Vue compatible UI framework. I choose [Buefy](https://buefy.org). When the build part of development has come, I realized, that something went wrong and lib styles not defined to final build.

I think, that something wrong with Buefy compatibility with web components and decide to take another UI framework, so I choose [Vuetify](https://vuetifyjs.com).

After refactoring I realize that styles not defined again, so I google a little bit and [figure out](https://github.com/vuejs/vue-web-component-wrapper/issues/12#issuecomment-385141573), that to import styles into web component it most be included in `shadow root`, not `head` as usual. To do that `shadowMode` option of vue-loader must be turned on in webpack.

After doing that styles finally was defined in app, but size of script file was too big and also UI was kinda broken.  So I build a project as SPA`, took `chunk.css` and build app as web component with it included. Final build size become smaller, but the UI still looks wrong.

So I google that [Vuetify not compatible with web components](https://github.com/vuetifyjs/vuetify/issues/7622#issuecomment-504330672).
Then I decide to write my own UI inspired with amazing Vuetify components, without any library.

The result you could see here, or by building master branch with `npm run webcomp` command.
