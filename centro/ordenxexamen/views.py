from .models import Ordenxexamen
from .serializers import OrdenxexamenSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class OrdenxexamenViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = OrdenxexamenSerializer
    queryset = Ordenxexamen.objects.all() 