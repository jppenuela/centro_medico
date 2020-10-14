from django.urls import path, include
from .views import PacientesViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('paciente', PacientesViewSet, basename='paciente')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)),
]
