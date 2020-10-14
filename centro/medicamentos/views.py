from .models import Medicamentos
from .serializers import MedicamentosSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class MedicamentosViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = MedicamentosSerializer
    queryset = Medicamentos.objects.all() 