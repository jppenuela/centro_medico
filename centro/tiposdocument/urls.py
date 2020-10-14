from django.urls import path, include
from .views import TiposdocumentViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('tipos_doc', TiposdocumentViewSet, basename='tipos_doc')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)),
]
