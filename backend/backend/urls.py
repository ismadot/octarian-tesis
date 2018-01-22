from django.conf.urls import url, include
from django.conf.urls.static import static
from django.conf import settings
from api.views import *
from django.contrib import admin
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
'''
router = routers.DefaultRouter()

router.register(r'Projects',ProjectsViewSet)
router.register(r'users', UserViewSet)
'''
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', index.as_view(), name='index'),
    url(r'^api/', include('api.urls', namespace='api', app_name='api')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
