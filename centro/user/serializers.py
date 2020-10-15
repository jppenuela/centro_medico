from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    owner = serializers.StringRelatedField(default = serializers.CurrentUserDefault(), read_only=True) #Valor por parte de RestFramework para conocer al usuario actualmente logueado

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'groups','owner']
        depth = 1