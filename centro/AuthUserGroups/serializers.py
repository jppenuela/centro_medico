from rest_framework import serializers
from .models import AuthUserGroups


class AuthUserGroupsSerializer(serializers.ModelSerializer):

    class Meta:
        model = AuthUserGroups
        fields = ('user', 'group')
