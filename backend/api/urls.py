from django.conf.urls import url, include
from rest_framework.authtoken import views as drf_views
from rest_framework import routers
from .views import *
from .api import *
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token


router = routers.DefaultRouter()

router.register(r'Projects',ProjectsViewSet)
router.register(r'Users', UserViewSet)
router.register(r'Categorys', CategorysProjectsViewSet)
router.register(r'Verification', VerificationViewSet)

urlpatterns = [
    url(r'^token-auth/', obtain_jwt_token),
    url(r'^token-refresh/', refresh_jwt_token),
    url(r'^token-verify/', verify_jwt_token),
] + router.urls