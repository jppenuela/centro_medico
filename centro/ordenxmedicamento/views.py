from .models import Ordenxmedicamento
from .serializers import OrdenxmedicamentoSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class OrdenxmedicamentoViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = OrdenxmedicamentoSerializer
    queryset = Ordenxmedicamento.objects.all() 