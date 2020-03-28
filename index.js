var colorPicker = new iro.ColorPicker('#picker');

colorPicker.on('color:change', function(color) {
    updateColors();
});

function updateColors(){
    document.getElementById("hue").innerHTML = colorPicker.color.hsl["h"];
    document.getElementById("viv").innerHTML = colorPicker.color.hsl["s"];
    document.getElementById("bri").innerHTML = colorPicker.color.hsl["l"];

}
