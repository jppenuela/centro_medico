from django.urls import path, include
from .views import AuthUserViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('crear', AuthUserViewSet, basename='crear')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)),
]
