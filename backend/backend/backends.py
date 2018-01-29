from django.contrib.auth import backends
from django.contrib.auth.models import User
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination
#from rest_framework_json_api.pagination import LimitOffsetPagination
from rest_framework.response import Response
import json
import sys

class EmailAuthBackend(backends.ModelBackend):
    """
    Email Authentication Backend

    Allows a user to sign in using an email/password pair, then check
    a username/password pair if email failed
    """
    def authenticate(self, username=None, password=None):
        """ Authenticate a user based on email address as the user name. """
        try:
            user = User.objects.get(email=username)
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            try:
                user = User.objects.get(username=username)
                if user.check_password(password):
                    return user
            except User.DoesNotExist:
                return None

    def get_user(self, user_id):
        """ Get a User object from the user_id. """
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None


class CustomPagination(LimitOffsetPagination):
    def get_paginated_response(self, data):
        alllinks = self.get_html_context()
        links = []
        for x in alllinks["page_links"]:
            print x[0]
            links.append(x[0])
        return Response({
            'pages all links': links,
            'links': {
                'page next': self.get_next_link(),
                'page previous': self.get_previous_link(),
            },
            #'num pages':  self.page.paginator.num_pages,
            #'count': self.page.paginator.count,
            #'current':  self.page.number,
            #'pages':  self.page_size,
            'elements':  self.count,
            'data': data,
        })