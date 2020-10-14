from django.urls import path, include
from .views import HistorialesmedicosViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('historia', HistorialesmedicosViewSet, basename='historia')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)), 
]
