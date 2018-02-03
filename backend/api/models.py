from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models


class Profiles(models.Model):
    USER_SEX = (
        ("1", "hombre"),
        ("2", "mujer"),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE,)
    status = models.BooleanField(default=False)
    cedula = models.CharField(max_length=20)
    telefono = models.CharField(max_length=20)
    avatar = models.CharField(max_length=250)
    description = models.CharField(max_length=250)
    sexo = models.CharField(
        max_length=2,
        verbose_name="Sexo",
        choices=USER_SEX,
        blank=True,
        null=True
    )

    class Meta:
        db_table = 'Profiles'
        verbose_name_plural = "Perfiles"
    
    def __unicode__(self):
        return '%s | %s' % (self.user,self.cedula)


class Comments(models.Model):
    TYPE_COMMENT = (
        ("1", "Projecto"),
        ("2", "Post"),
    )
    status = models.BooleanField(default=True)
    Partner = models.CharField(
        verbose_name="id Padre",
        max_length=20
        )
    user = models.ForeignKey(
        User,
        verbose_name="Propietario",
        on_delete=models.CASCADE
    )
    entyti = models.CharField(
        max_length=2,
        verbose_name="Entidad",
        choices=TYPE_COMMENT,
        blank=True,
        null=True
    )
    created_date = models.DateTimeField(
      verbose_name="Fecha de creacion", auto_now_add=True
      )
    comment = models.CharField(max_length=250)

    class Meta:
        db_table = 'Comments'
        verbose_name = "Comentario"
        verbose_name_plural = "Comentarios"
    
    def __unicode__(self):
        return 'Entidad: %s | User: %s | Padre: %s' % (self.entyti,self.user, self.Partner)
