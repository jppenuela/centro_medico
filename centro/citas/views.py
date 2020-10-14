from .models import Citas
from .serializers import CitasSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class CitasViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = CitasSerializer
    queryset = Citas.objects.all()
    