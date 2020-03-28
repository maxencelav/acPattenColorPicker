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

colorPicker.on('color:change', function (color) {

  updateColorsLive();
  updateColorsIngame();

});

function updateColorsLive() {
  document.getElementById("hue-live").innerHTML = colorPicker.color.hsl["h"];
  document.getElementById("viv-live").innerHTML = colorPicker.color.hsl["s"];
  document.getElementById("bri-live").innerHTML = colorPicker.color.hsl["l"];
  document.getElementById("rgb-color").value = colorPicker.color.hexString;

  

}

function updateColorsIngame() {
  document.getElementById("hue-ing").innerHTML = Math.floor((colorPicker.color.hsl["h"]*30)/360);
  document.getElementById("viv-ing").innerHTML = Math.floor((colorPicker.color.hsl["s"]*15)/100);
  document.getElementById("bri-ing").innerHTML = Math.floor((colorPicker.color.hsl["l"]*15)/100);

}