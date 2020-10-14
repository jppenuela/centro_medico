from rest_framework import serializers
from .models import Ordenxexamen


class OrdenxexamenSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ordenxexamen
        fields = '__all__'
 