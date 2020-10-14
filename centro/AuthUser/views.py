from django.contrib.auth.models import User
from .serializers import AuthUserSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class AuthUserViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = AuthUserSerializer
    queryset = User.objects.all()