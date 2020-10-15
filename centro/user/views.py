from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_serializer_context(self):
        context = super(UserViewSet, self).get_serializer_context()
        return context