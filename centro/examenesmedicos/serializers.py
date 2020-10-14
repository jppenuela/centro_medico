from rest_framework import serializers
from .models import Examenesmedicos


class ExamenesmedicosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Examenesmedicos
        fields = '__all__'
 