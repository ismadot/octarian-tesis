from rest_framework import viewsets, filters, mixins, generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from serializers import *
from rest_framework import filters
import django_filters
from django.db.models import Q
from .models import *
from projects.models import *


class GenericApi(object):

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        queryset = self.filter_queryset(queryset)
        filter = {}
        fields = tuple([str(x.name) for x in self.queryset.model._meta.fields])
        query_params = self.request.query_params.dict()
        for key, value in query_params.items():
            key_split = key.split('__')[0]
            if key_split in fields:
                if value.lower() == 'true':
                    value = True
                elif value.lower() == 'false':
                    value = False
                filter.update({key: value})
        try:
            filtered_object = queryset.filter(**filter)
        except:
            filtered_object = []
        serializer = self.get_serializer(filtered_object, many=True)
        return Response(serializer.data)

    def filter_queryset(self, queryset):
        queryset = super(GenericApi, self).filter_queryset(queryset)
        if 'order_by' in self.request.GET:
            queryset = queryset.order_by(self.request.GET['order_by'])
        return queryset


class UserViewSet(GenericApi, viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ProjectsViewSet(GenericApi, viewsets.ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectSerializers

