from .models import Pacientes
from .serializers import PacientesSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class PacientesViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = PacientesSerializer
    queryset = Pacientes.objects.all()