//===========================================//
//                 tekst appear              //
//===========================================//

//========= text 1 ========//
var punt = document.querySelector('.dot-1');
var text = document.querySelector('.text-1');

punt.addEventListener("click", function() {
  text.classList.toggle("invliegen");
});

//========= text 2 ========//
var punttwee = document.querySelector('.dot-2');
var texttwee = document.querySelector('.text-2');

punttwee.addEventListener("click", function() {
  texttwee.classList.toggle("invliegen-2");
});
