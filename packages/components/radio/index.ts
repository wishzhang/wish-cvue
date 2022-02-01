import Radio from '@cvue/components/radio/src/radio.vue';

Radio.install = (app)=>{
    app.component(Radio.name, Radio);
}

export default Radio;