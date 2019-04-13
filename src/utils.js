export function mapToObject (map) {
    let obj = {};
    for (let [key, value] of map) {
        obj[key] = value
    }

    return obj
}

/**
 * @return {string}
 */
export function WriteToFile (file) {
    return URL.createObjectURL(new Blob([file], {type: 'application/json'}))
}