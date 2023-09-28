window.onload = () =>{

    const dragArea = document.querySelector("#drag_area");

    // const fileSelector = document.getElementById('file-selector');
    // fileSelector.addEventListener('change', (event) => {
    //     const fileList = event.target.files;
    //     //console.log(fileList);
    // });

    dragArea.addEventListener('dragover', (e)=>{
        e.stopPropagation();
        e.preventDefault();
        // Style the drag-and-drop as a "copy file" operation.
        e.dataTransfer.dropEffect = 'copy';
    },false)

    dragArea.addEventListener('drop', (e)=>{
        e.stopPropagation();
        e.preventDefault();
        const fileList = e.dataTransfer.files;
        const reader = new FileReader();

        for (const file of fileList) {

            reader.addEventListener('load', (event) => {
                let image = new Image();
                image.src = event.target.result;
                image.classList.add("image");

                let imageContainer = document.createElement("div")
                imageContainer.classList.add("image_container")
                document.querySelector("#image_container").appendChild(imageContainer).appendChild(image)

            });
            reader.readAsDataURL(file);
        }

    },false)

}