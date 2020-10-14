from .models import AuthGroup
from .serializers import AuthGroupSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class AuthGroupViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = AuthGroupSerializer
    queryset = AuthGroup.objects.all()