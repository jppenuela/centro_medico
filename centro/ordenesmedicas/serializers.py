from rest_framework import serializers
from .models import Ordenesmedicas


class OrdenesmedicasSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ordenesmedicas
        fields = '__all__'
 