var GrupoFamiliar = class {
    constructor() {
        this.get_grupos();
        this.get_medicos();
    }

    clear(){
        $("#nombre").val('');
        $("#apellido").val('');
        $("#tipo_documento").val('');
        $("#documento").val('');
        $("#telefono").val('');
        $("#email").val('');
        $("#usuario").val('');
        document.getElementById("put_paciente").innerHTML = `<button class="btn btn-block btn-primary mb-2" type="button" onclick="post_medico()">Registrar</button>`;
    }

  
    post_grupo(data) {
        $.ajax({
            type: "POST",
            url: `http://localhost:8000/familia/viewset/familia/`,
            dataType: 'json',
            data: data,
            success: function (formulario) {
                
                pacientes.get_paciente();
                alert("Se registro con exito");
                pacientes.clear();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON);
            }
        });
    }

    get_grupos(){
        $.ajax({
            type: "GET",
            url: `http://localhost:8000/familia/viewset/familia/`,
            dataType: 'json',
            success: function (formulario) {
               let html = ""
               formulario.forEach(element => {

                html = html+`<tr>
                                <td>${element.nombregrupo}</td>
                                <td>${element.idmedico}</td>
                                <td><button class="btn btn-block btn-primary" type="button" onclick="detail_paciente(${element.id})">Editar</button></td>
                                <td><button class="btn btn-block btn-danger" type="button" onclick="delete_paiente(${element.id})">Eliminar</button></td>
                            </tr>`
               });

               document.getElementById('tb_pacientes').innerHTML = html;
            //    $('#tableClient').DataTable();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
        
        
    }

    get_medicos(){
        $.ajax({
            type: "GET",
            url: `http://localhost:8000/medico/viewset/medico/`,
            dataType: 'json',
            success: function (formulario) {
               let html = "<option value=''>Seleccione una opcion</option>"
               formulario.forEach(element => {

                html = html+`<option value='${element.id}'>${element.nombres}</option>`
               });

               document.getElementById('medico').innerHTML = html;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
        
        
    }


    // detail_medico(id){
    //     $.ajax({
    //         type: "GET",
    //         url: `http://localhost:8000/medico/viewset/medico/${id}/`,
    //         dataType: 'json',
    //         success: function (formulario) {
               
    //             $("#nombre").val(formulario.nombres);
    //             $("#apellido").val(formulario.apellidos);
    //             $("#tipo_documento").val(formulario.tipodocumento);
    //             $("#documento").val(formulario.numdocumento);
    //             $("#telefono").val(formulario.celular);
    //             $("#email").val(formulario.email);   
    //             $("#email").val(formulario.tarjetaprofecional);  
                
    //             document.getElementById("btn_medico").innerHTML = `<button class="btn btn-block btn-warning" type="button" onclick="put_medico(${formulario.id})">Modificar</button>`;
    //         },
    //         error: function (XMLHttpRequest, textStatus, errorThrown) {
    //             alert("Status: " + XMLHttpRequest.responseJSON.detail);
    //         }
    //     });
    
    // }


    // put_medico(id,data) {
    //     $.ajax({
    //         type: "PUT",
    //         url: `http://localhost:8000/medico/viewset/medico/${id}/`,
    //         dataType: 'json',
    //         data: data,
    //         success: function (formulario) {
    //             //
    //             medicos.get_medico();
    //             alert("Se Actualizo con exito");
    //             medicos.clear();
    //         },
    //         error: function (XMLHttpRequest, textStatus, errorThrown) {
    //             alert("Status: " + XMLHttpRequest.responseJSON.detail);
    //         }
    //     });
    // }

    // delete_medico(id) {
    //     $.ajax({
    //         type: "DELETE",
    //         url: `http://localhost:8000/medico/viewset/medico/${id}/`,
    //         dataType: 'json',
    //         success: function (formulario) {
    //             //
    //             medicos.get_medico();
    //             alert("Se Elimino con exito");

    //         },
    //         error: function (XMLHttpRequest, textStatus, errorThrown) {
    //             alert("Status: " + XMLHttpRequest.responseJSON.detail);
    //         }
    //     });
    // }

}

var grupos = new GrupoFamiliar();


function post_grupo(){
    debugger;
    let data = {
        nombres: $("#nombre").val()
    }
    grupos.post_grupo(data);
}

// function detail_medico(id){
//         medicos.detail_medico(id);
// }
// function put_medico(id){
//     let data = {
//         nombres: $("#nombre").val(),
//         apellidos: $("#apellido").val(),
//         tipodocumento: $("#tipo_doc").val(),
//         numdocumento: $("#doc").val(),
//         direccion: $("#direccion").val(),
//         email: $("#mail").val(),
//     }
//     medicos.put_medico(id,data);
// }

// function delete_medico(id){
    
//     medicos.delete_medico(id);
// }




