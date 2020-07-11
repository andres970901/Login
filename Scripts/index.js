var userV = document.getElementById("user");
var passV = document.getElementById("pass");

function change(){
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('user') == "admin" && urlParams.get('pass')== "admin") {
        document.getElementById("welcome").innerHTML = "Felicitaciones";
        document.getElementById("Titulo").innerHTML = "Iniciaste Sesión";
      } else {
        document.getElementById("Titulo").innerHTML = "contraseña incorrecta";
      }
    
}

function validation() {

  window.location.href = "autenticacion.html?user="+userV.value+"&pass="+passV.value;
}
