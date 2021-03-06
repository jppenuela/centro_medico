# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class AuthtokenToken(models.Model):
    key = models.CharField(primary_key=True, max_length=40)
    created = models.DateTimeField()
    user = models.OneToOneField(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'authtoken_token'


class Citas(models.Model):
    idmedico = models.ForeignKey('Medicos', models.DO_NOTHING, db_column='idmedico')
    idpaciente = models.ForeignKey('Pacientes', models.DO_NOTHING, db_column='idpaciente')
    fecha = models.DateTimeField()
    linkreunion = models.TextField()

    class Meta:
        managed = False
        db_table = 'citas'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Examenesmedicos(models.Model):
    nomexamen = models.CharField(db_column='nomExamen', max_length=100)  # Field name made lowercase.
    descripcion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'examenesmedicos'


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


class Medicamentos(models.Model):
    nombremedicamento = models.CharField(max_length=100)
    posologia = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'medicamentos'


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


class Tiposdocument(models.Model):
    nombre = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tiposdocument'
