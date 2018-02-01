from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from django.template import defaultfilters


class CategorysProjects(models.Model):
    name = models.CharField(
      max_length=500,
      verbose_name="nombre de la categoria"
    )
    state = models.BooleanField(
        default=True,
        verbose_name="Estado de la categoria"
    )
    description = models.TextField(
        blank=True,
        null=True,
        verbose_name="Descripcion de la categoria"
    )
    icon = models.CharField(
        blank=True,
        max_length=50,
        verbose_name="icon name",
    )
    slug = models.SlugField(
        blank=True,
        max_length=100,
        verbose_name="Slug",
    )
    created_date = models.DateTimeField(
      verbose_name="Fecha de creacion", auto_now_add=True
      )
    modified_date = models.DateTimeField(
      verbose_name="fecha de modificacion", auto_now=True
      )

    def save(self, *args, **kwargs):
      self.slug = defaultfilters.slugify(self.name)
      super(CategorysProjects, self).save(*args, **kwargs)

    class Meta:
            db_table = 'CategorysProjects'
            ordering = ["name"]
            verbose_name = "Categoria"
            verbose_name_plural = "Categorias"

    def __unicode__(self):
        return 'Nombre: %s | Estado: %s | Fecha de creacion: %s | Slug: %s' % (
            self.name,
            self.state,
            self.created_date,
            self.slug,
        )


class Projects(models.Model):
    user = models.ForeignKey(
        User,
        verbose_name="Propietario",
        on_delete=models.CASCADE
    )
    Category = models.ForeignKey(
        CategorysProjects,
        verbose_name="Categoria",
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
    image = models.FileField(
        blank=True,
        null=True,
        upload_to="Images",
        verbose_name="Image"
    )
    slug = models.SlugField(
        max_length=100,
        verbose_name="Slug",
        null=True,
    )
    state = models.BooleanField(
        default=True,
        verbose_name="Estado del proyecto"
    )
    created_date = models.DateTimeField(
      verbose_name="Fecha de creacion", 
      blank=True,
      auto_now_add=True
      )
    modified_date = models.DateTimeField(
      verbose_name="fecha de modificacion", 
      blank=True,
      auto_now=True
      )

    def save(self, *args, **kwargs):
      self.slug = defaultfilters.slugify(self.name)
      super(Projects, self).save(*args, **kwargs)

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