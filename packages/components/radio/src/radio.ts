import { buildProps } from "@cvue/core/props";


export const radioProps = buildProps({
    value: {
        type: Object,
        require: true
    },
    dicData: {
        type: Array,
        require: true
    },
    disabled: {
        type: Boolean
    },
    size: {
        type: String
    },
    button: {
        type: Boolean
    },
    border: {
        type: Boolean
    }
})

export const radioEmits = {
    change: (value: any)=>{}
}