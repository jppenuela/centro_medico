from django.urls import path, include
from .views import OrdenesmedicasViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('ordenes', OrdenesmedicasViewSet, basename='ordenes')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)), 
]
