from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth import views
from django.urls import path
from django.views.generic import TemplateView
from views import home

urlpatterns = [

    url(r'^admin/', admin.site.urls),
    url(r'^auth/', include('social_django.urls', namespace='social')),
    path('', include('frontend.urls')),
    path('', include('backend.urls'))

]

