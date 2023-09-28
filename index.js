window.onload = () =>{

    const dragArea = document.querySelector("#drag_area");
    const imageUpload = document.querySelector("#image_upload");

    // imageUpload.addEventListener('change',(e)=>{
    //     console.log('aaaa')
    // })
    //

    const fileSelector = document.getElementById('file-selector');
    fileSelector.addEventListener('change', (event) => {
        const fileList = event.target.files;
        //console.log(fileList);
    });

    dragArea.addEventListener('dragover', (e)=>{
        e.stopPropagation();
        e.preventDefault();
        console.log('over')
        // Style the drag-and-drop as a "copy file" operation.
        e.dataTransfer.dropEffect = 'copy';
    },false)

    dragArea.addEventListener('drop', (e)=>{
        e.stopPropagation();
        e.preventDefault();
        const fileList = e.dataTransfer.files;
        console.log('drop')
        console.log(fileList);

        for (const file of fileList) {
            // Not supported in Safari for iOS.
            const name = file.name ? file.name : 'NOT SUPPORTED';
            // Not supported in Firefox for Android or Opera for Android.
            const type = file.type ? file.type : 'NOT SUPPORTED';
            // Unknown cross-browser support.
            const size = file.size ? file.size : 'NOT SUPPORTED';
            console.log({file, name, type, size});

            const reader = new FileReader();
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

    // function uploadFile(file) {
    //
    //     const reader = new FileReader();
    //
    //     reader.onload = function(e)
    //     {
    //         document.getElementById('outputDiv').innerHTML = e.target.result;
    //     };
    //
    //     reader.readAsBinaryString(file.files[0]);
    // }

    // const submitBtn = document.querySelector("#submit");
    // const form = document.querySelector("#upload_form");
    // const image = document.querySelector("#image_upload");
    // submitBtn.addEventListener('click', ()=>{
    //     console.log(image.files[0])
    //     uploadFile(image.files[0])
    // })

}