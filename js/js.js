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
  texttwee.classList.toggle("invliegen");
});

//========= text 3 ========//
var puntdrie = document.querySelector('.dot-3');
var textdrie = document.querySelector('.text-3');

puntdrie.addEventListener("click", function() {
  textdrie.classList.toggle("invliegen");
});

//========= text 4 ========//
var puntvier = document.querySelector('.dot-4');
var textvier = document.querySelector('.text-4');

puntvier.addEventListener("click", function() {
  textvier.classList.toggle("invliegen");
});

//========= text 5 ========//
var puntvijf = document.querySelector('.dot-5');
var textvijf = document.querySelector('.text-5');

puntvijf.addEventListener("click", function() {
  textvijf.classList.toggle("invliegen");
});
