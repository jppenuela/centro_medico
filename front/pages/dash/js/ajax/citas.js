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
        $.ajax({
            type: "POST",
            url: `http://localhost:8000/citas/viewset/citas/`,
            dataType: 'json',
            data: data,
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
            success: function (form) {
               let html = "";
               form.forEach(e => {

                html = html + `<tr>
                                <td>${e.idmedico}</td>
                                <td>${e.idpaciente}</td>
                                <td>${e.fecha}</td>
                                <td>${e.linkreunion}</td>
                                <td><button class="btn btn-block btn-primary" type="button" onclick="detail_citas(${e.id})">Editar</button></td>
                                <td><button class="btn btn-block btn-danger" type="button" onclick="delete_citas(${e.id})">Eliminar</button></td>
                            </tr>`
               });

               $('#lista_citas').innerHTML = html;
                //$('#tableClient').DataTable();
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
                html = html + `<option value="${e.id}">${e.nombres} ${e.apellidos}</option>`;
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
                html = html + `<option value="${e.id}">${e.nombres} ${e.apellidos}</option>`;
               });
                $('#paciente').html(html);
                //    $('#tableClient').DataTable();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + XMLHttpRequest.responseJSON.detail);
            }
        });
    }

}

var obj = new citas();

function post__citas(){
    let data ={
        idmedico: $('#paciente').val(),
        idpaciente: $('#doctor').val(),
        fecha: $('#fecha').val(),
    }
    obj.post_cita(data);
}

function detail_citas(id){
    obj.detail_cita(id);
}

function put__clintes(id){
    let data ={
        idmedico: $('#paciente').val(),
        idpaciente: $('#doctor').val(),
        fecha: $('#fecha').val(),
    }
    obj.put_cita(id, data);
}

function delete_citas(id){
    obj.delete_cita(id);
}