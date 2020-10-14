from rest_framework import serializers
from .models import Ordenxmedicamento


class OrdenxmedicamentoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ordenxmedicamento
        fields = '__all__'
 