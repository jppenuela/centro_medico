let cook = sessionStorage.getItem("token");


let Go = (page,cook) =>{
    debugger;
    switch (page) {
        case 'Paciente':
            if(cook != 'undefined' || cook != null || cook != 'null'){
                $("#contenedor").load("../page/pacientes.html");
                $.getScript('../js/ajax/paciente.js');
               
            }else{
                alert("No ha iniciado session")
            }
            break;
        case 'Medico':
            if(cook != 'undefined' || cook != null || cook != 'null'){
                $("#contenedor").load("../page/medico.html");
                $.getScript('../js/ajax/medico.js');
               
            }else{
                alert("No ha iniciado session")
            }
            break;
           
        case 'Familia':
            if(cook != 'undefined' || cook != null || cook != 'null'){
                $("#contenedor").load("../page/gruposfamiliares.html");
                $.getScript('../js/ajax/grupofamiliar.js');
               
            }else{
                alert("No ha iniciado session")
            }
            break;
        case 'Home':
            if(cook != 'undefined' || cook != null || cook != 'null'){
                $("#contenedor").load("../page/gruposfamiliares.html");
                $.getScript('../js/ajax/grupofamiliar.js');
               
            }else{
                alert("No ha iniciado session")
            }
            break;
        case 'Salir':
            sessionStorage.setItem("token", null);
            sessionStorage.removeItem("token");
            break;
        case 'Citas':
            $('#contenedor').load('../page/citas.html');
            $.getScript('../js/ajax/citas.js');
            break;
        default:
            break;
    }
}