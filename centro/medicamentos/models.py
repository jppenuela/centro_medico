from django.db import models

# Create your models here.

class Medicamentos(models.Model):
    nombremedicamento = models.CharField(max_length=100)
    posologia = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'medicamentos'