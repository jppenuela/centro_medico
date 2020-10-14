from django.urls import path, include
from .views import GruposfamiliaresViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('familia', GruposfamiliaresViewSet, basename='familia')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)), 
]
