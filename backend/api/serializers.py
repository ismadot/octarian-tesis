from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *
from projects.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'is_staff', 'first_name', 'last_name')


class ProjectSerializers(serializers.ModelSerializer):
    class Meta:
      model = Projects
      fields = '__all__'