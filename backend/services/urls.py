from django.urls import path, include
from services import views

urlpatterns = [
    path('', views.user_service),
    path('all/', views.get_all_services),
]
