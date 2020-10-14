from .models import Historialesmedicos
from .serializers import HistorialesmedicosSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class HistorialesmedicosViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = HistorialesmedicosSerializer
    queryset = Historialesmedicos.objects.all() 