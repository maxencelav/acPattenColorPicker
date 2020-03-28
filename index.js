var colorPicker = new iro.ColorPicker('#picker', {
  layout: [{
      component: iro.ui.Wheel,
      options: {
        borderWidth: 3

      }
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'hue', // can also be 'saturation', 'value', 'alpha' or 'kelvin'
        borderWidth: 3
      }
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'saturation', // can also be 'saturation', 'value', 'alpha' or 'kelvin'
        borderWidth: 3
      }
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'value', // can also be 'saturation', 'value', 'alpha' or 'kelvin'
        borderWidth: 3
      }
    }
  ]
});


updateColorsLive();
updateColorsIngame();

function update() {
  var fieldColor = document.getElementById("rgb-color").value;

  if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(fieldColor)) {
    colorPicker.color.hexString = fieldColor;
  }
}

colorPicker.on('color:change', function () {



  updateColorsLive();
  updateColorsIngame();

});


function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

function updateColorsLive() {

  let hue = colorPicker.color.hsl["h"];
  let sat = colorPicker.color.hsl["s"];
  let lig = colorPicker.color.hsl["l"];

  document.getElementById("hue-live").innerHTML = pad(hue, 3);
  document.getElementById("sat-live").innerHTML = pad(sat, 3);
  document.getElementById("lig-live").innerHTML = pad(lig, 3);
  document.getElementById("rgb-color").value = colorPicker.color.hexString;



}

function updateColorsIngame() {
  document.getElementById("hue-ing").innerHTML = Math.floor((colorPicker.color.hsl["h"] * 30) / 360);
  document.getElementById("viv-ing").innerHTML = Math.floor((colorPicker.color.hsl["s"] * 15) / 100);
  document.getElementById("bri-ing").innerHTML = Math.floor((colorPicker.color.hsl["l"] * 15) / 100);

}