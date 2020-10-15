

let Go = (page) =>{
    switch (page) {
        case 'Paciente':
            $("#contenedor").load("pacientes.html");
            $.getScript('asset/js/paciente.js');
            break;
        case 'Medico':
            $("#contenedor").load("medico.html");
            $.getScript('asset/js/medico.js');
            break;
        case 'Familia':
            $("#contenedor").load("gruposfamiliares.html");
            $.getScript('asset/js/grupofamiliar.js');
            break;
        default:
            break;
    }
}