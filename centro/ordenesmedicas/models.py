from django.db import models
from medicos.models import Medicos
from pacientes.models import Pacientes

# Create your models here.

class Ordenesmedicas(models.Model):
    idpaciente = models.ForeignKey(Pacientes, models.DO_NOTHING, db_column='idpaciente')
    idmedico = models.ForeignKey(Medicos, models.DO_NOTHING, db_column='idmedico')
    idmedicamento = models.IntegerField()
    idexamenmedico = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'ordenesmedicas'
