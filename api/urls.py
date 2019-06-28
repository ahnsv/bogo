from django.urls import include, path

urlpatterns = [
    path('bogojas/', include('bogoja.urls')),
    path('auth/', include('rest_auth.urls')),
    path('auth/signup/', include('rest_auth.registration.urls'))
]