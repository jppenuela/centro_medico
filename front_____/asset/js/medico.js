var Medico = class {
    constructor() {
        this.get_medico();
        this.get_tipoDoc();
    }

    clear(){
        $("#nombre").val('');
        $("#apellido").val('');
        $("#tipo_documento").val('');
        $("#documento").val('');
        $("#telefono").val('');
        $("#email").val('');
        $("#usuario").val('');
        document.getElementById("put_medico").innerHTML = `<button class="btn btn-block btn-primary mb-2" type="button" onclick="post_medico()">Registrar</button>`;
    }

    post_cuenta(data){
        debugger;
        let data_cta = {
            username: data.email,
            password: data.tarjetaprofecional,
            email: data.email
        }
        $.ajax({
            type: "POST",
            url: `http://localhost:8000/crear/viewset/crear/`,
            dataType: 'json',
            data: data_cta,
            success: function (formulario) {
                console.log(formulario);
                data.idusuario = formulario.id
                
                medicos.post_medico(data);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
    }
    
    post_medico(data) {
        $.ajax({
            type: "POST",
            url: `http://localhost:8000/medico/viewset/medico/`,
            dataType: 'json',
            data: data,
            success: function (formulario) {
                
                medicos.get_medico();
                alert("Se registro con exito");
                medicos.clear();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON);
            }
        });
    }

    get_medico(){
        $.ajax({
            type: "GET",
            url: `http://localhost:8000/medico/viewset/medico/`,
            dataType: 'json',
            success: function (formulario) {
               let html = ""
               formulario.forEach(element => {

                html = html+`<tr>
                                <td>${element.nombres}</td>
                                <td>${element.apellidos}</td>
                                <td>${element.tipodocumento}</td>
                                <td>${element.numdocumento}</td>
                                <td>${element.celular}</td>
                                <td>${element.email}</td>
                                <td>${element.tarjetaprofecional}</td>
                                <td>${element.idusuario}</td>
                                <td><button class="btn btn-block btn-primary" type="button" onclick="detail_medico(${element.id})">Editar</button></td>
                                <td><button class="btn btn-block btn-danger" type="button" onclick="delete_medico(${element.id})">Eliminar</button></td>
                            </tr>`
               });

               document.getElementById('tb_medicos').innerHTML = html;
            //    $('#tableClient').DataTable();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
        
        
    }

    get_tipoDoc(){
        $.ajax({
            type: "GET",
            url: `http://localhost:8000/tipos_doc/viewset/tipos_doc/`,
            dataType: 'json',
            success: function (formulario) {
               let html = "<option value=''>Seleccione una opcion</option>"
               formulario.forEach(element => {

                html = html+`<option value='${element.id}'>${element.nombre}</option>`
               });

               document.getElementById('tipo_documento').innerHTML = html;
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

var medicos = new Medico();


function post_cuenta(){
    debugger;
    let data = {
        nombres: $("#nombre").val(),
        apellidos: $("#apellido").val(),
        tipodocumento: $("#tipo_documento").val(),
        numdocumento: $("#documento").val(),
        celular: $("#telefono").val(),
        email: $("#email").val(),
        tarjetaprofecional: $("#tcprofecional").val(),
    }
    medicos.post_cuenta(data);
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




