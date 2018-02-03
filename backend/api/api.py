from rest_framework import viewsets, filters, mixins, generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from serializers import *
from rest_framework import filters
import django_filters
from django.db.models import Q
from .models import *
from projects.models import *
from verification.models import *


class GenericApi(object):
    '''
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
        '''
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
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
        page = self.paginate_queryset(filtered_object)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
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


class CategorysProjectsViewSet(GenericApi, viewsets.ModelViewSet):
    queryset = CategorysProjects.objects.all()
    serializer_class = CategorysProjectsSerializers


class VerificationViewSet(GenericApi, viewsets.ModelViewSet):
    queryset = Verification.objects.all()
    serializer_class = VerificationSerializers


class CommentsViewSet(GenericApi, viewsets.ModelViewSet):
    queryset = Comments.objects.all()
    serializer_class = CommentSerializers


class ProfilesViewSet(GenericApi, viewsets.ModelViewSet):
    queryset = Profiles.objects.all()
    serializer_class = ProfileSerializers

 