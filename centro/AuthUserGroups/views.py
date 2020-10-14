from .models import AuthUserGroups
from .serializers import AuthUserGroupsSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class AuthUserGroupsViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = AuthUserGroupsSerializer
    queryset = AuthUserGroups.objects.all()