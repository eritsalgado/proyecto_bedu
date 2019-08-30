from .models import Evento, Asistente, Fecha, Intinerario
from rest_framework import serializers


class AsistenteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Asistente
        fields = ('id', 
        'nombre', 
        'email', 
        'evento', 
        'timestamp')

class IntinerarioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Intinerario
        fields = ('id', 
        'fecha', 
        'nombre', 
        'hora', 
        'zona')

class FechaSerializer(serializers.HyperlinkedModelSerializer):
    actividades = IntinerarioSerializer(many=True, read_only=True)
    class Meta:
        model = Fecha
        fields = ('id',
        'nombre', 
        'fecha', 
        'descripcion',
        'actividades')

class EventoSerializer(serializers.HyperlinkedModelSerializer):
    # asistentes = serializers.StringRelatedField(many=True)
    asistentes = AsistenteSerializer(many=True, read_only=True)
    fechas = FechaSerializer(many=True, read_only=True)
    class Meta:
        model = Evento
        fields = ('id', 
        'nombre', 
        'ubicacion', 
        'descripcion', 
        'hashtag', 
        'plantilla', 
        'editor', 
        'timestamp', 
        'fechas', 
        'asistentes')