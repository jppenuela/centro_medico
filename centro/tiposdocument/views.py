from .models import Tiposdocument
from .serializers import TiposdocumentSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class TiposdocumentViewSet(viewsets.ModelViewSet):
    # permission_classes = (IsAuthenticated,) 

    
    serializer_class = TiposdocumentSerializer
    queryset = Tiposdocument.objects.all()