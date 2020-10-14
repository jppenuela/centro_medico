# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class Tiposdocument(models.Model):
    nombre = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tiposdocument'



class Examenesmedicos(models.Model):
    nomexamen = models.CharField(db_column='nomExamen', max_length=100)  # Field name made lowercase.
    descripcion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'examenesmedicos'


class Medicamentos(models.Model):
    nombremedicamento = models.CharField(max_length=100)
    posologia = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'medicamentos'

class Gruposfamiliares(models.Model):
    nombregrupo = models.CharField(db_column='nombreGrupo', max_length=100)  # Field name made lowercase.
    idmedico = models.ForeignKey('Medicos', models.DO_NOTHING, db_column='idmedico')

    class Meta:
        managed = False
        db_table = 'gruposfamiliares'


class Historialesmedicos(models.Model):
    id = models.OneToOneField('Pacientes', models.DO_NOTHING, db_column='id', primary_key=True)
    idpaciente = models.IntegerField()
    enfermedadescronicas = models.CharField(max_length=100)
    numcirugias = models.IntegerField()
    genero = models.CharField(max_length=20)
    fechanacimiento = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'historialesmedicos'





class Medicos(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    tipodocumento = models.ForeignKey('Tiposdocument', models.DO_NOTHING, db_column='tipodocumento')
    numdocumento = models.IntegerField()
    celular = models.IntegerField()
    email = models.CharField(max_length=100)
    tarjetaprofecional = models.CharField(max_length=100)
    idusuario = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'medicos'


class Ordenesmedicas(models.Model):
    idpaciente = models.ForeignKey('Pacientes', models.DO_NOTHING, db_column='idpaciente')
    idmedico = models.ForeignKey(Medicos, models.DO_NOTHING, db_column='idmedico')
    idmedicamento = models.IntegerField()
    idexamenmedico = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'ordenesmedicas'


class Ordenxexamen(models.Model):
    idorden = models.ForeignKey(Ordenesmedicas, models.DO_NOTHING, db_column='idorden')
    idexamen = models.ForeignKey(Examenesmedicos, models.DO_NOTHING, db_column='idexamen')
    estadoautorizacion = models.IntegerField(db_column='estadoAutorizacion')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ordenxexamen'


class Ordenxmedicamento(models.Model):
    idorden = models.ForeignKey(Ordenesmedicas, models.DO_NOTHING, db_column='idorden')
    idmedicamento = models.ForeignKey(Medicamentos, models.DO_NOTHING, db_column='idmedicamento')
    estadoautorizacion = models.IntegerField(db_column='estadoAutorizacion')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ordenxmedicamento'








class Pacientes(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    idgrupofamiliar = models.ForeignKey(Gruposfamiliares, models.DO_NOTHING, db_column='idgrupofamiliar')
    email = models.CharField(max_length=100)
    celular = models.IntegerField()
    tipodocumento = models.ForeignKey('Tiposdocument', models.DO_NOTHING, db_column='tipodocumento')
    numdocumento = models.IntegerField()
    idusuario = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'pacientes'

