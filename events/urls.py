from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from events import views

urlpatterns = [
    path('api/events/', views.EventList.as_view()),
    path('api/events/category/<slug:categoryID>/', views.CategoryEvents.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)