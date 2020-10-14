from .models import Ordenesmedicas
from .serializers import OrdenesmedicasSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class OrdenesmedicasViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = OrdenesmedicasSerializer
    queryset = Ordenesmedicas.objects.all() 