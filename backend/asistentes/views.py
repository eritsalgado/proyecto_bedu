from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import * 
from .models import Evento, Asistente, Fecha, Intinerario
from .serializers import EventoSerializer, AsistenteSerializer, FechaSerializer, IntinerarioSerializer
from django.forms.models import model_to_dict


# Create your views here.
class EventoView(ModelViewSet):
    permission_classes = (IsAuthenticatedOrReadOnly,)    

    queryset = Evento.objects.all().order_by('id')
    serializer_class = EventoSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly)

class AsistenteView(ModelViewSet):
    permission_classes = (AllowAny,)    
    
    queryset = Asistente.objects.all().order_by('id')
    serializer_class = AsistenteSerializer

class FechaView(ModelViewSet):
    # permission_classes = (IsAuthenticated,)    
    
    queryset = Fecha.objects.all().order_by('id')
    serializer_class = FechaSerializer

class IntinerarioView(ModelViewSet):
    # permission_classes = (IsAuthenticated,)    
    
    queryset = Intinerario.objects.all().order_by('id')
    serializer_class = IntinerarioSerializer