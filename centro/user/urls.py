from django.urls import path, include
from .views import UserViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('user', UserViewSet, basename='user')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)),
]
