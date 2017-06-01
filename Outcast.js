var main = function () {

    var Vicious = document.getElementById("wolfDown");

        Vicious.onclick = function(){
        var wolfplay = document.getElementById("muziekWolfdown");
        wolfplay.play();
  };


    var Crossus = document.getElementById("Crossus1");

      Crossus.onclick = function(){
      var wolfplay = document.getElementById("muziekweareallwehave");
      Crossus.play();
};

}

window.onload = function () {
  main();
}
