from django.urls import path

from bogoja.views import BogojaListView

urlpatterns = [
    path('', BogojaListView.as_view())
]