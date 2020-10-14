from django.urls import path, include
from .views import OrdenxmedicamentoViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('orden_medicamento', OrdenxmedicamentoViewSet, basename='orden_medicamento')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)), 
]
