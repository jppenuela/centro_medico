from django.db import models
from ordenesmedicas.models import Ordenesmedicas
from medicamentos.models import Medicamentos

# Create your models here.

class Ordenxmedicamento(models.Model):
    idorden = models.ForeignKey(Ordenesmedicas, models.DO_NOTHING, db_column='idorden')
    idmedicamento = models.ForeignKey(Medicamentos, models.DO_NOTHING, db_column='idmedicamento')
    estadoautorizacion = models.IntegerField(db_column='estadoAutorizacion')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ordenxmedicamento'
