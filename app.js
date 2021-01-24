// Neil Marcellini
// 1/15/21

var file_uploader = document.getElementById('file_uploader')

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
