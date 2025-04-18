// Create a variable that grabs the export button
var exportBg1 = document.getElementById("export-bg-raids");

// Add an event listener to the button
exportBg1.addEventListener("click", exportClickbg1);

// Functions to handle the export when clicked
function exportClickbg1(e) {
    // prevent default event actions
    e.preventDefault();
    // execute the image conversion
    convertbg1image();
}

function convertbg1image() {
    domtoimage
        // reference the exact area to export
        .toJpeg(document.getElementById("bg-raids"), {
        quality: 0.95
    })
    .then(function (dataUrl) {
        // code to make the download happen
        var link = document.createElement("a");
        // this is the file users can rename and download
        link.download = "bg-raids.jpeg";
        link.href = dataUrl;
        link.click();
    });
}