from rest_framework import serializers
from .models import Tiposdocument


class TiposdocumentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tiposdocument
        fields = '__all__'
