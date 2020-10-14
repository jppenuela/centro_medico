from .models import Examenesmedicos
from .serializers import ExamenesmedicosSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class ExamenesmedicosViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = ExamenesmedicosSerializer
    queryset = Examenesmedicos.objects.all() 