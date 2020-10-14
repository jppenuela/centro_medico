from rest_framework import serializers
from .models import Gruposfamiliares


class GruposfamiliaresSerializer(serializers.ModelSerializer):

    class Meta:
        model = Gruposfamiliares
        fields = '__all__'
 