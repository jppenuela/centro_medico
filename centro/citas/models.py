from django.db import models
from medicos.models import Medicos
from pacientes.models import Pacientes

# Create your models here.

class Citas(models.Model):
    idmedico = models.ForeignKey(Medicos, models.DO_NOTHING, db_column='idmedico')
    idpaciente = models.ForeignKey(Pacientes, models.DO_NOTHING, db_column='idpaciente')
    fecha = models.DateTimeField()
    linkreunion = models.TextField()

    class Meta:
        managed = False
        db_table = 'citas'
