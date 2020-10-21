from rest_framework import generics

from .models import Smth
from . import permissions
from .serializers import SmthSerializer


class SmthCreateView(generics.CreateAPIView):
    serializer_class = SmthSerializer
    permission_classes = [permissions.IsSuperUser]
    
