from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,)
    status = models.BooleanField(default=False)
    cedula = models.CharField(max_length=500)
    telefono = models.CharField(max_length=500)
    sexo = models.CharField(max_length=500)

    class Meta:
        db_table = 'profile'
        verbose_name_plural = "Perfiles"
    
    def __unicode__(self):
        return '%s (%s)' % (self.user, self.slug)
