from django.conf.urls import url, include
from django.forms.utils import flatatt
from rest_framework import routers
from .views import *
from .api import *
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token


router = routers.DefaultRouter()

router.register(r'Projects',ProjectsViewSet)
router.register(r'Users', UserViewSet)
router.register(r'Categorys', CategorysProjectsViewSet)
router.register(r'Verification', VerificationViewSet)
router.register(r'Comments', CommentsViewSet)
router.register(r'Profiles', ProfilesViewSet)

urlpatterns = [
    url(r'^token-auth/', obtain_jwt_token),
    url(r'^token-refresh/', refresh_jwt_token),
    url(r'^token-verify/', verify_jwt_token),
    #url(r'^rest-auth/', include('rest_auth.urls')),
    #url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),

] + router.urls