from django.urls import path, include
from .views import AuthUserGroupsViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('rel_grupo', AuthUserGroupsViewSet, basename='rel_grupo')

urlpatterns = [

    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)),
]
