from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *
from projects.models import *
from verification.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'is_staff', 'first_name', 'last_name')


class CategorysProjectsSerializers(serializers.ModelSerializer):
    class Meta:
      model = CategorysProjects
      fields = '__all__'


class ProjectsByCategorysSerializers(serializers.ModelSerializer):
    class Meta:
      model = Projects
      fields = '__all__'


class ProjectSerializers(serializers.ModelSerializer):
    '''Category = CategorysProjectsSerializers()'''
    class Meta:
      model = Projects
      fields = '__all__'


class VerificationSerializers(serializers.ModelSerializer):
    class Meta:
      model = Verification
      fields = '__all__'