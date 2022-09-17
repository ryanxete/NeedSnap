from django.contrib.auth import get_user_model
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import HttpRequest
User = get_user_model()


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer


class ChangeUserServiceView(TokenRefreshView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = [JWTAuthentication]

    def post(self, request):
        user = User.objects.get(id=request.user.id)
        user.service_id = request.data['service_id']
        user.save()

        serializer = MyTokenObtainPairSerializer(user)
        token = serializer.get_token(user)
        req = HttpRequest()
        req.__setattr__('data', {"refresh": str(token)})

        return super().post(req)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_users(request):
    users = User.objects.all()
    serializer = RegistrationSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([AllowAny])
def get_all_users(request):
    users = User.objects.all()
    serializer = RegistrationSerializer(users, many=True)
    return Response(serializer.data)
