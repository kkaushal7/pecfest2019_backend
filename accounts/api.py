from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, ParticipantSerializer


#Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        _, token = AuthToken.objects.create(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })


#Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })


#Get User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


#More User Info
class UserRegisterAPI(generics.GenericAPIView):

    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    serializer_class = ParticipantSerializer

    def post(self, request, *args, **kwargs):

        data = request.data
        currentUser = request.user
        data += {"User", currentUser}
        serializer = self.get_serializer(data)
        serializer.is_valid(raise_exception=True)
        participant = serializer.save()

        return Response({
            "user" : ParticipantSerializer(data=participant, context=self.get_serializer_context()).data,
        })

