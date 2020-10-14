from django.db import models

# Create your models here.

class Examenesmedicos(models.Model):
    nomexamen = models.CharField(db_column='nomExamen', max_length=100)  # Field name made lowercase.
    descripcion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'examenesmedicos'