import Vue from 'vue'

// Vue Material Library
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial);

// Firebase
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
Vue.use(VueFire);
firebase.initializeApp({
    apiKey: "AIzaSyDQOhAqHtOOjWetSbzfvdlpXB_RMtfb_NU",
    authDomain: "firstinspiresiowa2018.firebaseapp.com",
    databaseURL: "https://firstinspiresiowa2018.firebaseio.com",
    projectId: "firstinspiresiowa2018",
    storageBucket: "firstinspiresiowa2018.appspot.com",
    messagingSenderId: "42095702430"
})
const firestore = firebase.firestore();
firestore.settings({timestampsInSnapshots: true});
export const db = firestore;

import router from './routes.js'




import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
