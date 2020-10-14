from django.urls import path, include
from .views import AuthGroupViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('grupo', AuthGroupViewSet, basename='grupo')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)),
]
