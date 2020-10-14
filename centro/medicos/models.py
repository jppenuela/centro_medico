from django.db import models
from tiposdocument.models import Tiposdocument

from django.contrib.auth.models import User

# Create your models here.


class Medicos(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    tipodocumento = models.ForeignKey(Tiposdocument, models.DO_NOTHING, db_column='tipodocumento')
    numdocumento = models.IntegerField()
    celular = models.IntegerField()
    email = models.CharField(max_length=100)
    tarjetaprofecional = models.CharField(max_length=100)
    idusuario =  models.ForeignKey(User,models.DO_NOTHING,db_column='idusuario')

    class Meta:
        managed = False
        db_table = 'medicos'
