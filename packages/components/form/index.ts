import Form from '@cvue/components/form/src/form.vue';

Form.install = (app)=>{
    app.component(Form.name, Form);
}

export default Form;

export * from './src/form';