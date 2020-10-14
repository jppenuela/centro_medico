from django.urls import path, include
from .views import ExamenesmedicosViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('examen', ExamenesmedicosViewSet, basename='examen')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)), 
]
