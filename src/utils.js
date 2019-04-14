export function mapToObject (map) {
    let obj = {};
    for (let [key, value] of map) {
        obj[key] = value
    }

    return obj
}

export function upload (callback) {
    const
        input = document.createElement("input");

    input.type = 'file';
    input.addEventListener('change', function (e) {
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.addEventListener('load', function (e) {
            callback(this.result);
        });

        if (file.type.match('application/json')) reader.readAsText(file);
    });
    input.click();
}

export function download (file, name) {
    log(file);
    const
        blob = new Blob([JSON.stringify(new Map(Object.entries(file)))], {type: "application/json"}),
        url = URL.createObjectURL(blob),
        a = document.createElement("a");

    a.href = url;
    a.download = name;
    a.click();

    URL.revokeObjectURL(url);
}