from rest_framework import serializers
from .models import Historialesmedicos


class HistorialesmedicosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Historialesmedicos
        fields = '__all__'
 