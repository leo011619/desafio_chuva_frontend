//----------Função do Ver mais----------------------------------//

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "ver mais";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "ver menos";
    moreText.style.display = "inline";
  }
}
//----------Função do Criar tópico----------------------------------//
function changeDisplaySec() {
  document.getElementById("sectionCriar").style.display = "flex";
  document.getElementById("section_box").style.display = "none";
}
