from django.contrib import admin
from .models import Evento, Asistente, Fecha, Intinerario

# Register your models here.
admin.site.register([Evento, Asistente, Fecha, Intinerario])