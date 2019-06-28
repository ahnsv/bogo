from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListCreateAPIView, CreateAPIView

from bogoja.models import Bogoja, BogojaProfile
from bogoja.serializers import BogojaSerializer


class BogojaListView(ListCreateAPIView):
    queryset = Bogoja.objects.all()
    serializer_class = BogojaSerializer

