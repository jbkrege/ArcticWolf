var email = true;
var password = true;

  document.getElementById("txtenter0").onclick = function() {
    if(email){
       document.getElementById("txtenter0").value = "";
       document.getElementById("txtenter0").color = black;
       email = false;
    }
  };

  document.getElementById("txtenter1").onclick = function() {
    if(password){
        document.getElementById("txtenter1").value = "";
        document.getElementById("txtenter1").color = black;
        password = false;
    }
  };

