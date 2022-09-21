from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import ChangeUserServiceView, RegisterView, MyTokenObtainPairView, get_all_users, update_service
from authentication import views

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('service/', ChangeUserServiceView.as_view(), name='change_service'),
    path('users/all/', views.get_all_users),
    path('users/all/addService/', views.update_service)
]
