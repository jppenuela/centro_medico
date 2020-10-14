from django.urls import path, include
from .views import OrdenxexamenViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('orden_examen', OrdenxexamenViewSet, basename='orden_examen')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)), 
]
