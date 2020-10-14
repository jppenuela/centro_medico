from django.db import models
from gruposfamiliares.models import Gruposfamiliares
from tiposdocument.models import Tiposdocument

from django.contrib.auth.models import User

# Create your models here.

class Pacientes(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    idgrupofamiliar = models.ForeignKey(Gruposfamiliares, models.DO_NOTHING, db_column='idgrupofamiliar')
    email = models.CharField(max_length=100)
    celular = models.IntegerField()
    tipodocumento = models.ForeignKey(Tiposdocument, models.DO_NOTHING, db_column='tipodocumento')
    numdocumento = models.IntegerField()
    idusuario = models.ForeignKey(User,models.DO_NOTHING,db_column="idusuario")

    class Meta:
        managed = False
        db_table = 'pacientes'