from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth import views
from django.views.generic import TemplateView

from views import home

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^login/$', TemplateView.as_view(template_name='login.html'), name='login'),
    # url(r'^logout/$', views.logout, name='logout'),
    url(r'^auth/', include('social_django.urls', namespace='social')),  # <- Here
    url(r'^$', home, name='home'),
]