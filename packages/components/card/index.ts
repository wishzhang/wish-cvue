import Card from '@cvue/components/card/src/Card.vue';

export * from '@cvue/components/card/src/Card.vue';

Card['install'] = (app) => {
  app.component('CvueCard', Card);
}

export default Card

