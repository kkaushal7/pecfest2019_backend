from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth import views
from django.urls import path
from django.views.generic import TemplateView
from views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('accounts.urls')),
    # path('', include('backend.urls')),
]

