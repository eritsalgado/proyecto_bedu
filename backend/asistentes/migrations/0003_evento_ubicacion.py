# Generated by Django 2.2.4 on 2019-08-24 14:16

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('asistentes', '0002_auto_20190824_0912'),
    ]

    operations = [
        migrations.AddField(
            model_name='evento',
            name='ubicacion',
            field=models.CharField(default=django.utils.timezone.now, max_length=255),
            preserve_default=False,
        ),
    ]
