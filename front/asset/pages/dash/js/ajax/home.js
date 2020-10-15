

let Go = (page) =>{
    switch (page) {
        case 'Paciente':
            $("#contenedor").load("../page/pacientes.html");
            $.getScript('../js/ajax/paciente.js');
            break;
        case 'Medico':
            $("#contenedor").load("../page/medico.html");
            $.getScript('../js/ajax/medico.js');
            break;
        case 'Familia':
            $("#contenedor").load("../page/gruposfamiliares.html");
            $.getScript('..js/ajax/grupofamiliar.js');
            break;
        default:
            break;
    }
}