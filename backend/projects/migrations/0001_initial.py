# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2018-01-28 01:15
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='CategorysProjects',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500, verbose_name='nombre de la categoria')),
                ('state', models.BooleanField(default=True, verbose_name='Estado de la categoria')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Descripcion de la categoria')),
                ('slug', models.SlugField(max_length=100, verbose_name='Slug')),
                ('created_date', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creacion')),
                ('modified_date', models.DateTimeField(auto_now=True, verbose_name='fecha de modificacion')),
            ],
            options={
                'ordering': ['name'],
                'db_table': 'CategorysProjects',
                'verbose_name': 'Categoria',
                'verbose_name_plural': 'Categorias',
            },
        ),
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500, verbose_name='nombre del proyecto')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Descripcion del proyecto')),
                ('file', models.FileField(blank=True, null=True, upload_to='Proyectos', verbose_name='proyecto')),
                ('slug', models.SlugField(blank=True, max_length=100, verbose_name='Slug')),
                ('state', models.BooleanField(default=True, verbose_name='Estado del proyecto')),
                ('created_date', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creacion')),
                ('modified_date', models.DateTimeField(auto_now=True, verbose_name='fecha de modificacion')),
                ('Category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projects.CategorysProjects', verbose_name='Categoria')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Propietario')),
            ],
            options={
                'ordering': ['name'],
                'db_table': 'Projects',
                'verbose_name': 'Proyecto',
                'verbose_name_plural': 'Proyectos',
            },
        ),
    ]
