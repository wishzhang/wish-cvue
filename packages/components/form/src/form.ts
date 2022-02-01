import { buildProps } from "@cvue/core/props";

export type columnType = Array<{
    prop: string,
    label: string,
    type: string
}>;

export type optionType = {
    columns: columnType,
}


export const formProps = buildProps({
    value: {
        type: Object,
        require: true
    },
    option: {
        type: Object, 
    }
})

export const formEmits = {
    change: (evt: Event) => evt instanceof Event,
    submit: (form: object) => {}
}