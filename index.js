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
  document.getElementById("sat-live").innerHTML = sat + "%";
  document.getElementById("lig-live").innerHTML = lig + "%";
  document.getElementById("rgb-color").value = colorPicker.color.hexString;
  document.getElementById("color-viewer").style.backgroundColor = document.getElementById("rgb-color").value;

  document.getElementById("img-viv").style.filter = "hue-rotate(" + colorPicker.color.hue + "deg)";
  document.getElementById("img-bri").style.filter = "hue-rotate(" + colorPicker.color.hue + "deg)";








}

function updateColorsIngame() {

  let hue = Math.floor((colorPicker.color.hsl["h"] * 29) / 360);
  let sat = Math.floor((colorPicker.color.hsl["s"] * 14) / 100);
  let lig = Math.floor((colorPicker.color.hsl["l"] * 14) / 100);

  let leftHue;
  let leftSat;
  let leftLig;

  document.getElementById("hue-ing").innerHTML = hue + 1;
  document.getElementById("viv-ing").innerHTML = sat + 1;
  document.getElementById("bri-ing").innerHTML = lig + 1;

  leftHue = hue * 0.665 - 0.6;

  switch (sat) {
    case 0:
      leftSat = -0.3;
      break;

    case 1:
      leftSat = 1.1;
      break;
    case 2:
      leftSat = 2.4;
      break;

    case 3:
      leftSat = 3.75;
      break;

    case 4:
      leftSat = 5.1;
      break;

    case 5:
      leftSat = 6.5;
      break;

    case 6:
      leftSat = 7.8;
      break;

    case 7:
      leftSat = 9.2;
      break;

    case 8:
      leftSat = 10.45;
      break;

    case 9:
      leftSat = 11.8;
      break;

    case 10:
      leftSat = 13.2;
      break;

    case 11:
      leftSat = 14.65;
      break;

    case 12:
      leftSat = 16;
      break;

    case 13:
      leftSat = 17.17;
      break;


    case 14:
      leftSat = 18.5;
      break;

    default:
      leftSat = sat * 1.22 + 0.09;
      break;
  }

  switch (lig) {
    case 0:
      leftLig = -0.3;
      break;

    case 1:
      leftLig = 0.9;
      break;
    case 2:
      leftLig = 2.1;
      break;

    case 3:
      leftLig = 3.5;
      break;

    case 4:
      leftLig = 4.8;
      break;

    case 5:
      leftLig = 6.2;
      break;

    case 6:
      leftLig = 7.6;
      break;

    case 7:
      leftLig = 8.9;
      break;

    case 8:
      leftLig = 10.25;
      break;

    case 9:
      leftLig = 11.6;
      break;

    case 10:
      leftLig = 12.9;
      break;

    case 11:
      leftLig = 14.3;
      break;

    case 12:
      leftLig = 15.6;
      break;

    case 13:
      leftLig = 17;
      break;

    case 14:
      leftLig = 18.3;
      break;

    default:
      leftLig = lig * 1.22 + 0.09;
      break;
  }

  //leftLig = lig * 1.22 + 0.09;


  document.getElementById("hue-preview").firstElementChild.style.left = leftHue + "em";
  document.getElementById("viv-preview").firstElementChild.style.left = leftSat + "em";
  document.getElementById("bri-preview").firstElementChild.style.left = leftLig + "em";


}