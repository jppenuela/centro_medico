var citas = class{
    constructor(){
        this.get_cita();
        this.get_medico();
        this.get_pacinte();
    }
    clear(){
        $("#doctor").val('');
        $("#paciente").val('');
        $("#fecha").val('');
        $("tb_grupo").html(`<button class="btn btn-block btn-primary mb-2" type="button" onclick="post_medico()">Registrar</button>`);
    }

    post_cita(data) {
        debugger;
        console.log(data);
        let fecha_hora = data.fecha+"T10:30:00.000";
        let data_post = {
            fecha: fecha_hora,
            linkreunion: `Se creao la cita con el paciente ${data.mailPaci} en la url https://teams.webex.com/ para el dia ${data.fecha} la invitacion le ha llega a su correo. \n`,
            idmedico: data.idMedico,
            idpaciente: data.idPaci
        }

        // idMedico: idMed,
        // mailMedico: mailMed,
        // idPaci: idPac,
        // mailPaci: mailPac,
        // fecha: $('#fecha').val(),

        $.ajax({
            type: "POST",
            url: `http://localhost:8000/citas/viewset/citas/`,
            dataType: 'json',
            data: data_post,
            success: function (form) {
                obj.get_cita();
                alert("Registro Exitoso");
                obj.clear();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON);
            }
        });
    }

    detail_cita(id){
        $.ajax({
            type: "GET",
            url: `http://localhost:8000/citas/viewset/citas/${id}/`,
            dataType: 'json',
            success: function (form) {
               
                $(`#doctor${form.idmedico}`).prop('selected', true);
                $(`#paciente${form.idpaciente}`).prop('selected', true); 
                $('#fecha').val(form.fecha);
                $("#btn_grupo").innerHTML = `<button class="btn btn-block btn-warning" type="button" onclick="put_citas(${form.id})">Modificar</button>`;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
    }

    put_cita(id,data) {
        $.ajax({
            type: "PUT",
            url: `http://localhost:8000/citas/viewset/citas/${id}/`,
            dataType: 'json',
            data: data,
            success: function (form) {
                obj.get_cita();
                obj.get_medico();
                obj.get_pacinte();
                alert("Se Actualizo con exito");
                obj.clear();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
    }
    delete_cita(id) {
        $.ajax({
            type: "DELETE",
            url: `http://localhost:8000/citas/viewset/citas/${id}/`,
            dataType: 'json',
            success: function (form) {
                obj.get_cita();
                obj.get_medico();
                obj.get_pacinte();
                alert("Se Elimino con exito");
                obj.clear();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
    }

    get_cita(){
        $.ajax({
            type: "GET",
            url: `http://localhost:8000/citas/viewset/citas/`,
            dataType: 'json',
            success: function (formulario) {
               let html = ""
               formulario.forEach(element => {

                html = html+`<tr>
                                <td>${element.fecha}</td>
                                <td>${element.linkreunion}</td>
                                <td>${element.idmedico}</td>
                                <td>${element.idpaciente}</td>
                                <td><button class="btn btn-block btn-primary" type="button" onclick="detail_medico(${element.id})">Editar</button></td>
                                <td><button class="btn btn-block btn-danger" type="button" onclick="delete_medico(${element.id})">Eliminar</button></td>
                            </tr>`
               });

               document.getElementById('lista_citas_webex').innerHTML = html;
            //    $('#tableClient').DataTable();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
        
        
    }

    get_medico() {
        $.ajax({
            type: "GET",
            url: `http://localhost:8000/medico/viewset/medico/`,
            dataType: 'json',
            success: function (form) {
               let html = '<option value="">Seleccione un Doctor</option>';
               form.forEach(e => {
                html = html + `<option value="${e.email}|${e.id}">${e.nombres} ${e.apellidos}</option>`;
               });
                $('#doctor').html(html);
                //    $('#tableClient').DataTable();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
    }
  
    get_pacinte() {
        $.ajax({
            type: "GET",
            url: `http://localhost:8000/paciente/viewset/paciente/`,
            dataType: 'json',
            success: function (form) {
               let html = '<option value="">Seleccione un Paciente</option>';
               form.forEach(e => {
                html = html + `<option value="${e.email}|${e.id}">${e.nombres} ${e.apellidos}</option>`;
               });
                $('#paciente').html(html);
                //    $('#tableClient').DataTable();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
    }


    // crea_sala_webex_2(data) {
    //     debugger;
    //     let data_sala = {
    //         "title": data.fecha+"-"+data.mailPac
    //     }
    //     $.ajax({
    //         url: `https://webexapis.com/v1/rooms`,
    //         headers: {
    //             'Authorization': 'Bearer OTY5MzgyMTktODI3Yy00N2Y3LWE3OWEtN2ZmZjY0ODdkZGI5ZThlZjM5NDQtMDg1_PF84_consumer',
    //             'Content-Type' : 'application/json'
    //         },
    //         method: "POST",
            
    //         dataType: 'json',
    //         data: data_sala,
    //         success: function (form) {
    //            console.log(form);
    //         },
    //         error: function (XMLHttpRequest, textStatus, errorThrown) {
    //             alert("Status: " + XMLHttpRequest.responseJSON);
    //         }
    //     });
    // }

    crea_invitacion_webex(data) {
        debugger;
        let data_invitacion = {
            "roomId": data.roomId,
            "personEmail": data.mailPaci
        }
        let data_invitacionDoc = {
            "roomId": data.roomId,
            "personEmail": data.mailMedico
        }       
        
        $.ajax({
            url: 'https://webexapis.com/v1/memberships',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(data_invitacion), 
            crossDomain: true,
            /*data: { username: 'test', password: 'testpassword' },*/
            headers: {
                'Authorization': 'Bearer OTY5MzgyMTktODI3Yy00N2Y3LWE3OWEtN2ZmZjY0ODdkZGI5ZThlZjM5NDQtMDg1_PF84_consumer',
                'Content-Type' : 'application/json'
            },
            success: function(result) {
                data.paciente = result;
                $.ajax({
                    url: 'https://webexapis.com/v1/memberships',
                    type: 'POST',
                    dataType: 'json',
                    data: JSON.stringify(data_invitacionDoc), 
                    crossDomain: true,
                    /*data: { username: 'test', password: 'testpassword' },*/
                    headers: {
                        'Authorization': 'Bearer OTY5MzgyMTktODI3Yy00N2Y3LWE3OWEtN2ZmZjY0ODdkZGI5ZThlZjM5NDQtMDg1_PF84_consumer',
                        'Content-Type' : 'application/json'
                    },
                    success: function(result) {
                        data.doctor = result;
                        obj.post_cita(data);
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert("Status: " + XMLHttpRequest.responseJSON);
                    }
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON);
            }
        });
    }

    crea_sala_webex(data) {
        let data_sala = {
            "title": data.fecha+"-"+data.mailPaci
        }

        $.ajax({
            url: 'https://webexapis.com/v1/rooms/',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(data_sala), 
            crossDomain: true,
            /*data: { username: 'test', password: 'testpassword' },*/
            headers: {
                'Authorization': 'Bearer OTY5MzgyMTktODI3Yy00N2Y3LWE3OWEtN2ZmZjY0ODdkZGI5ZThlZjM5NDQtMDg1_PF84_consumer',
                'Content-Type' : 'application/json'
            },
            success: function(result) {
               data.roomId = result.id;
               data.title = result.title;
               obj.crea_invitacion_webex(data);

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON);
            }
        });
    }


    Trae_Sala_Creada() {
       
            $.ajax({
            url: 'https://webexapis.com/v1/rooms/',
            type: 'GET',
            dataType: 'json',
            crossDomain: true,
            headers: {
                'Authorization': 'Bearer OTY5MzgyMTktODI3Yy00N2Y3LWE3OWEtN2ZmZjY0ODdkZGI5ZThlZjM5NDQtMDg1_PF84_consumer',
                'Content-Type' : 'application/json'
            },
            success: function(result) {
                    console.log(result[0].id)
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON);
            }
        })
            
        
    }

}

var obj = new citas();

function post_citas(){
    pac = $('#paciente').val();
    Med = $('#doctor').val();
    let separoMedico = Med.split("|");
    let separoPaciente = pac.split("|");
    idMed = separoMedico[1];
    mailMed = separoMedico[0];
    idPac = separoPaciente[1];
    mailPac = separoPaciente[0];

    let data ={
        idMedico: idMed,
        mailMedico: mailMed,
        idPaci: idPac,
        mailPaci: mailPac,
        fecha: $('#fecha').val(),
    }
    obj.crea_sala_webex (data);
}

function get_sala_creada(){
    obj.Trae_Sala_Creada ();
}

function detail_citas(id){
    obj.detail_cita(id);
}

function put_citas(id){

    pac = $('#paciente').val();
    Med = $('#doctor').val();
    let separoMedico = Med.split("|");
    let separoPaciente = pac.split("|");
    idMed = separoMedico[1];
    mailMed = separoMedico[0];
    idPac = separoPaciente[1];
    mailPac = separoPaciente[0];

    let data ={
        idMedico: idMed,
        mailMedico: mailMed,
        idPaci: idPac,
        mailPaci: mailPac,
        fecha: $('#fecha').val(),
    }
    obj.put_cita(id, data);
}

function delete_citas(id){
    obj.delete_cita(id);
}