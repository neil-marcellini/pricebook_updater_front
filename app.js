// Neil Marcellini
// 1/15/21

var file_uploader = document.getElementById('file_uploader')
let backend_url = "http://localhost:8000/"

const onFileChange = () => {
    var file_list = document.getElementById('file-list')
    let files = file_uploader.files
    for(file of files) {
        var file_container = document.createElement("li")
        file_container.className = "list-group-item"
        var excel_file = document.createElement("i")
        excel_file.className = "far fa-file-excel fa-2x" 
        file_container.appendChild(excel_file)
        var label = document.createElement("span")
        label.textContent = file.name
        file_container.appendChild(label)
        file_list.appendChild(file_container)
    }
    var update_options = document.getElementById("update-options")
    update_options.style.display = "flex"
    update_options.style.flexDirection = "row"
    update_options.style.justifyContent = "space-around"
    update_options.style.alignItems = "center"
    var update_button = document.getElementById("update")
    update_button.style.display = "block"
    console.log(files)
}

const onUpdate = () => {
    // send files to backend for updating
    const formData = new FormData();
    let files = file_uploader.files
    formData.append("files", files)
    const percent_change = document.getElementById('percentage-change')
    formData.append("percent_change", percent_change.value)
    let round_fifty = document.getElementById('round-fifty')
    formData.append("round_fifty", round_fifty.checked)
    let round_direction = document.getElementById('round-direction')
    formData.append("round_direction", round_direction.value)
    var postFormOptions = {
        method: "POST",
        body: null
    }
    postFormOptions.body = formData
    fetch(backend_url + 'files/', postFormOptions)
        .then((response) => {
            return response.arrayBuffer()
        })
        .then(data => {
            console.log("update success")
            const blob = new Blob([data], {
              type: 'application/zip'
            })
            var url = URL.createObjectURL(blob)
            const link = document.createElement('a');
            link.href = url;
            link.innerText = 'Download Updated Files';
            document.body.appendChild(link);
        })


}

