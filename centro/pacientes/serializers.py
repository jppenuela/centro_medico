from rest_framework import serializers
from .models import Pacientes


class PacientesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pacientes
        fields = '__all__'
