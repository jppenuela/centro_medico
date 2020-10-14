from django.db import models
from pacientes.models import Pacientes

# Create your models here.

class Historialesmedicos(models.Model):
    id = models.OneToOneField(Pacientes, models.DO_NOTHING, db_column='id', primary_key=True)
    idpaciente = models.IntegerField()
    enfermedadescronicas = models.CharField(max_length=100)
    numcirugias = models.IntegerField()
    genero = models.CharField(max_length=20)
    fechanacimiento = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'historialesmedicos'