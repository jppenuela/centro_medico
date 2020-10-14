from .models import Medicos
from .serializers import MedicosSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class MedicosViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = MedicosSerializer
    queryset = Medicos.objects.all()