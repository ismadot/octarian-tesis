from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

class Projects(models.Model):
    user = models.ForeignKey(
        User,
        verbose_name="Propietario",
        on_delete=models.CASCADE
    )
    name = models.CharField(
      max_length=500,
      verbose_name="nombre del proyecto"
    )
    description = models.TextField(
        blank=True,
        null=True,
        verbose_name="Descripcion del proyecto"
    )
    file = models.FileField(
        blank=True,
        null=True,
        upload_to="Proyectos",
        verbose_name="proyecto"
    )
    slug = models.CharField(
      max_length=500,
      verbose_name="slug"
    )
    state = models.BooleanField(
        default=True,
        verbose_name="Estado del proyecto"
    )
    created_date = models.DateTimeField(
      verbose_name="Fecha de creacion", auto_now_add=True
      )
    modified_date = models.DateTimeField(
      verbose_name="fecha de modificacion", auto_now=True
      )

    class Meta:
            db_table = 'Projects'
            ordering = ["name"]
            verbose_name = "Proyecto"
            verbose_name_plural = "Proyectos"

    def __unicode__(self):
        return 'Nombre: %s | Estado: %s | Fecha de creacion: %s | Slug: %s' % (
            self.name,
            self.state,
            self.created_date,
            self.slug,
        )
