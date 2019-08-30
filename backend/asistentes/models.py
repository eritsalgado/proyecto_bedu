from django.db import models

# Create your models here.
class Evento(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.CharField(max_length=1000)
    ubicacion = models.CharField(max_length=255)
    hashtag = models.CharField(max_length=50, null=True)
    plantilla = models.CharField(max_length=50)
    editor = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nombre


class Asistente(models.Model):
    nombre = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE, related_name='asistentes')
    timestamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'id: %d - nombre: %s' % (self.id, self.nombre)

class Fecha(models.Model):
    nombre = models.CharField(max_length=255)
    fecha = models.DateField()
    descripcion = models.CharField(max_length=1000)
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE, related_name='fechas')

    def __str__(self):
        return self.nombre

class Intinerario(models.Model):
    nombre = models.CharField(max_length=255)
    hora = models.TimeField()
    zona = models.CharField(max_length=100)
    fecha = models.ForeignKey(Fecha, on_delete=models.CASCADE, related_name='actividades')

    def __str__(self):
        return self.nombre