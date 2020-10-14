"""centro URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token  # <-- Here

urlpatterns = [
    path('admin/', admin.site.urls),
    path('crear/', include('AuthUser.urls')),
    path('grupo/', include('AuthGroup.urls')),
    path('medico/', include('medicos.urls')),
    path('tipos_doc/', include('tiposdocument.urls')),
    path('paciente/', include('AuthUserGroups.urls')),
    path('citas/', include('citas.urls')),
    path('examen/', include('examenesmedicos.urls')),
    path('familia/', include('gruposfamiliares.urls')),
    path('historia/', include('historialesmedicos.urls')),
    path('ordenes/', include('ordenesmedicas.urls')),
    path('orden_examen/', include('ordenxexamen.urls')),
    path('orden_medicamento/', include('ordenxmedicamento.urls')),
    path('rel_grupo/', include('pacientes.urls')),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),  # <-- And here
]
