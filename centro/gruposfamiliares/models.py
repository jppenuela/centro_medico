from django.db import models
from medicos.models import Medicos

# Create your models here.


class Gruposfamiliares(models.Model):
    nombregrupo = models.CharField(db_column='nombreGrupo', max_length=100)  # Field name made lowercase.
    idmedico = models.ForeignKey(Medicos, models.DO_NOTHING, db_column='idmedico')

    class Meta:
        managed = False
        db_table = 'gruposfamiliares'