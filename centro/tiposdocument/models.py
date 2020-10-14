from django.db import models

# Create your models here.


class Tiposdocument(models.Model):
    nombre = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tiposdocument'