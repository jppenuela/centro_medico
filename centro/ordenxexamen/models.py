from django.db import models
from ordenesmedicas.models import Ordenesmedicas
from examenesmedicos.models import Examenesmedicos

# Create your models here.

class Ordenxexamen(models.Model):
    idorden = models.ForeignKey(Ordenesmedicas, models.DO_NOTHING, db_column='idorden')
    idexamen = models.ForeignKey(Examenesmedicos, models.DO_NOTHING, db_column='idexamen')
    estadoautorizacion = models.IntegerField(db_column='estadoAutorizacion')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ordenxexamen'