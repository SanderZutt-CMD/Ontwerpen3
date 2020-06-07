//===========================================//
//              Button color switch          //
//===========================================//

var button = document.querySelector('.knoppie');
var text = document.querySelector('.test');

//===========test============//
button.addEventListener("click", function() {
  text.classList.toggle("tijdelijk");
});
