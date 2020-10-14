from .models import Gruposfamiliares
from .serializers import GruposfamiliaresSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class GruposfamiliaresViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = GruposfamiliaresSerializer
    queryset = Gruposfamiliares.objects.all() 