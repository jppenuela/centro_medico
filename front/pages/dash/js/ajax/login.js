
function login() {
    debugger;
    let data = {
        username:$("#correo").val(),
        password:$("#clave").val()
    }
    $.ajax({
        type: "POST",
        url: `http://localhost:8000/api-token-auth/`,
        dataType: 'json',
        data: data,
        success: function (formulario) {
            console.log(formulario)
           if(formulario.token.length > 30){
                detectar(formulario.token);
                // Go('Home',formulario.token);
           }           
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Credenciales Incorrectas")
        }
    });
}


function detectar(token){
    // debugger;
    sessionStorage.setItem("token", null);
    nom = sessionStorage.getItem("token");
    if (nom == "null" || nom == null){
    alert("Bienvenido­");
    sessionStorage.setItem("token", token);
    window.location.href = 'front/pages/dash/page/home.html';
    }else{
    alert(elnombre + " ya ha estado aquÃ­");
    }
}