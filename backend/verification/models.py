from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.template import defaultfilters
# Create your models here.

class Verification(models.Model):
    user = models.ForeignKey(
        User,
        verbose_name="Propietario",
        on_delete=models.CASCADE
    )
    file = models.FileField(
        blank=True,
        null=True,
        upload_to="Documentos",
        verbose_name="documento"
    )
    state = models.BooleanField(
        default=True,
        verbose_name="Estado de la verificacion"
    )
    created_date = models.DateTimeField(
      verbose_name="Fecha de creacion", auto_now_add=True
      )
    modified_date = models.DateTimeField(
      verbose_name="fecha de modificacion", auto_now=True
      )

    def save(self, *args, **kwargs):
      self.slug = defaultfilters.slugify(self.name)
      super(Projects, self).save(*args, **kwargs)

    class Meta:
            db_table = 'Verification'
            ordering = ["user"]
            verbose_name = "Verification"
            verbose_name_plural = "Verifications"

    def __unicode__(self):
        return 'Estado: %s | Fecha de creacion: %s' % (
            self.state,
            self.created_date,
        )