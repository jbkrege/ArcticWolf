for(i = 0; i < 2; i++){
  document.getElementById("txtenter" + i.toString()).onclick = function() {
    document.getElementById("txtenter" + i.toString()).value = "";
  };
}

