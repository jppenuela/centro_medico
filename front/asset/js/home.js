

let Go = (page) =>{
    switch (page) {
        // case 'Paciente':
        //     $("#contenedor").load("pacientes.html");
        //     $.getScript('assets/js/cliente.js');
        //     break;
        case 'Medico':
            $("#contenedor").load("medico.html");
            $.getScript('assets/js/medico.js');
            break;
        default:
            break;
    }
}