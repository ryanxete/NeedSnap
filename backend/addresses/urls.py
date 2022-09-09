from django.urls import path, include
from addresses import views

urlpatterns = [
    path('', views.user_address),
    path('all/', views.get_all_addresses),
]