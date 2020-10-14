from django.urls import path, include
from .views import MedicosViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('medico', MedicosViewSet, basename='medico')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)),
]
