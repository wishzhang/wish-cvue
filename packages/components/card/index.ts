import Card from './src/Card.vue';
import type {App} from 'vue'

export * from './src/Card.vue';

Card['install'] = (app: App) => {
  app.component('CvueCard', Card);
}

export default Card

