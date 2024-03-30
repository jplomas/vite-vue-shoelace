import { createApp } from 'vue';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';

import './style.css';
import App from './App.vue';

setBasePath('node_modules/@shoelace-style/shoelace/dist/assets');
createApp(App).mount('#app');
