import QueryFilter from '@cvue/components/query-filter/src/QueryFilter.vue';

export * from '@cvue/components/query-filter/src/QueryFilter.vue';

QueryFilter['install'] = (app) => {
  app.component('CvueQueryFilter', QueryFilter);
}

export default QueryFilter