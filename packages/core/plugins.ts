export function getOptionType(type: string) {
    let name = type;
    if (!type.startsWith('cvue-')) {
        name = 'el-' + type;
    }
    return name;
}

const cvue = {
    install(app) {
        app.config.globalProperties.$cvue = {
            _getOptionType: getOptionType
        }
    }
}

export default cvue;