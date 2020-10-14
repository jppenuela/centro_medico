from django.urls import path, include
from .views import MedicamentosViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('medicmentos', MedicamentosViewSet, basename='medicmentos')

urlpatterns = [
    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)), 
]
