
import sys
import django
import rest_framework
from django.views.generic import TemplateView

from django.shortcuts import render

class index(TemplateView):
    template_name = 'core/index.html'

    def get_context_data(self, **kwargs):
        context = super(index, self).get_context_data(**kwargs)
        context['django_version'] = '{}.{}.{}'.format(*django.VERSION)
        context['drf_version'] = rest_framework.VERSION
        context['python_version'] = sys.version
        return context