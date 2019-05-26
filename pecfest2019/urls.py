from django.conf.urls import include
from django.contrib import admin
from django.urls import path


urlpatterns = [

    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('accounts.urls')),
    path('', include('events.urls')),

]

