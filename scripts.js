var main = function () {

    var Vicious = document.getElementById("wolfDown");

        Vicious.onclick = function(){
        var wolfplay = document.getElementById("muziekWolfdown");
        wolfplay.play();
  };
}

window.onload = function () {
  main();
}
