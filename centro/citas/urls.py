from django.urls import path, include
from .views import CitasViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('citas', CitasViewSet, basename='citas')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)),
]
