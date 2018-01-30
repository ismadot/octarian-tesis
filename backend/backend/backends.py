from django.contrib.auth import backends
from django.contrib.auth.models import User
#from rest_framework_json_api.pagination import LimitOffsetPagination

from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination, _get_count
from rest_framework.response import Response
from rest_framework.settings import api_settings

from django.utils.translation import ugettext_lazy as _
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


def _positive_int(integer_string, strict=False, cutoff=None):
    """
    Cast a string to a strictly positive integer.
    """
    ret = int(integer_string)
    if ret < 0 or (ret == 0 and strict):
        ret = 0
    if cutoff:
        return min(ret, cutoff)
    return ret


class CustomPagination(LimitOffsetPagination):
    default_limit = api_settings.PAGE_SIZE
    limit_query_param = 'limit'
    limit_query_description = _('Number of results to return per page.')
    offset_query_param = 'offset'
    offset_query_description = _('The initial index from which to return the results.')
    max_limit = None
    template = 'rest_framework/pagination/numbers.html'

    def paginate_queryset(self, queryset, request, view=None):
        self.count = _get_count(queryset)
        self.limit = self.get_limit(request)
        if self.limit is None:
            return None
        self.offset = self.get_offset(request)
        self.request = request
        if self.template is not None:
            self.display_page_controls = True
        if self.count == 0 or self.offset > self.count:
            return []
        if self.limit == 0 and self.offset == 0:
            self.limit=self.count
            return list(queryset[self.offset:self.offset + self.limit])
        return list(queryset[self.offset:self.offset + self.limit])

    def get_limit(self, request):
        if self.limit_query_param:
            try:
                return _positive_int(
                    request.query_params[self.limit_query_param],
                    strict=True,
                    cutoff=0
                )
            except (KeyError, ValueError):
                pass
        return self.default_limit

    def get_paginated_response(self, data):
        alllinks = self.get_html_context()
        links = []
        for x in alllinks["page_links"]:
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
            'count':  self.count,
            'data': data,
        })