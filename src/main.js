/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { createApp } from 'vue';
import { registerPlugins } from '@/plugins';

import './index.css'

import router from './router';

import App from './App.vue';

// Create Vue application
const app = createApp(App);

registerPlugins(app);

app.use(router);

app.mount('#app');
