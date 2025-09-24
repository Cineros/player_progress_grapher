from django.contrib import admin
from django.urls import re_path, include
#from django.conf.urls import url
from cors.views import *
urlpatterns = [
    re_path('auth/', include('rest_auth.urls')),
    re_path('accounts/', include("django.contrib.auth.urls"))
]