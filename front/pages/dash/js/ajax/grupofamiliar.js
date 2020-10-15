var GrupoFamiliar = class {
    constructor() {
        this.get_grupos();
        this.get_medicos();
    }

    clear(){
        $("#nombre").val('');
        $("#medico").val('');
        document.getElementById("tb_grupo").innerHTML = `<button class="btn btn-block btn-primary mb-2" type="button" onclick="post_medico()">Registrar</button>`;
    }

  
    post_grupo(data) {
        $.ajax({
            type: "POST",
            url: `http://localhost:8000/familia/viewset/familia/`,
            dataType: 'json',
            data: data,
            success: function (formulario) {
                
                grupos.get_grupos();
                grupos.get_medicos();
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
               let html = "";
               formulario.forEach(element => {

                html = html+`<tr>
                                <td>${element.nombregrupo}</td>
                                <td>${element.idmedico}</td>
                                <td><button class="btn btn-block btn-primary" type="button" onclick="detail_grupo(${element.id})">Editar</button></td>
                                <td><button class="btn btn-block btn-danger" type="button" onclick="detail_grupo(${element.id})">Eliminar</button></td>
                            </tr>`
               });

               document.getElementById('tb_grupo_fami').innerHTML = html;
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

                html = html+`<option id='medico_${element.id}' value='${element.id}'>${element.nombres}</option>`
               });

               document.getElementById('medico').innerHTML = html;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
        
        
    }


    detail_grupo(id){
        $.ajax({
            type: "GET",
            url: `http://localhost:8000/familia/viewset/familia/${id}/`,
            dataType: 'json',
            success: function (formulario) {
               
                $("#nombre").val(formulario.nombregrupo);
                $(`#medico_${formulario.idmedico}`).prop('selected', true); 
                
                document.getElementById("btn_grupo").innerHTML = `<button class="btn btn-block btn-warning" type="button" onclick="put_grupo(${formulario.id})">Modificar</button>`;
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
    
    }


    put_grupo(id,data) {
        $.ajax({
            type: "PUT",
            url: `http://localhost:8000/familia/viewset/familia/${id}/`,
            dataType: 'json',
            data: data,
            success: function (formulario) {
                //
                grupos.get_medicos();
                grupos.get_grupos();
                alert("Se Actualizo con exito");
                medicos.clear();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
    }

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
        nombregrupo: $("#nombre").val(),
        idmedico: $("#medico").val(),
    }
    grupos.post_grupo(data);
}

function detail_grupo(id){
    grupos.detail_grupo(id);
}
function put_grupo(id){
    let data = {
        nombregrupo: $("#nombre").val(),
        idmedico: $("#medico").val(),        
    }
    grupos.put_grupo(id,data);
}

function delete_medico(id){
    
    medicos.delete_medico(id);
}




