from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serialiser import UserSerializer
from .models import User
import jwt, datetime
from rest_framework import status


# Create your views here.
class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({'error': 'Email and password are required!'}, status=400)

        user = User.objects.filter(email=email).first()

        if user is None:
            return Response({'error': 'User not found!'}, status=404)

        if (password==user.spass):
            payload = {
                'gid': user.gid,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
                'iat': datetime.datetime.utcnow()
            }

            token = jwt.encode(payload, 'secret', algorithm='HS256')

            response = Response({'token': token})
            return response
        else:
            return Response({'error': 'Incorrect password!'}, status=401)

class UserView(APIView):
    def post(self, request):
        token = request.data.get('token')  # Use get method to avoid KeyError
        if not token:
            return Response({'error': 'Token is missing'}, status=400)

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response({'error': 'Token is expired'}, status=401)
        except jwt.InvalidTokenError:
            return Response({'error': 'Invalid token'}, status=401)

        user = User.objects.filter(gid=payload.get('gid')).first()
        if not user:
            return Response({'error': 'User not found'}, status=404)

        serializer = UserSerializer(user)
        return Response(serializer.data)

class User_id(APIView):
    def post(self, request):
        token = request.data.get('token')  # Use get method to avoid KeyError
        if not token:
            return Response({'error': 'Token is missing'}, status=400)

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response({'error': 'Token is expired'}, status=401)
        except jwt.InvalidTokenError:
            return Response({'error': 'Invalid token'}, status=401)


        return Response(payload.get('gid'))

class Delete_user(APIView):
    def post(self, request):
        token = request.data.get('token')  # Use get method to avoid KeyError
        if not token:
            return Response({'error': 'Token is missing'}, status=400)

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response({'error': 'Token is expired'}, status=401)
        except jwt.InvalidTokenError:
            return Response({'error': 'Invalid token'}, status=401)

        user = User.objects.filter(gid=payload.get('gid')).first()
        if not user:
            return Response({'error': 'User not found'}, status=404)
        
        user.delete()
        return Response({'message': 'Object deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

class Update_password(APIView):
    def post(self, request):

        token = request.data.get('token')
        spass = request.data.get('spass')
        isused = request.data.get('isused')
        phone = request.data.get('phone')

        if not token:
            return Response({'error': 'Token is missing'}, status=400)

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            return Response({'error': 'Token is expired'}, status=401)
        except jwt.InvalidTokenError:
            return Response({'error': 'Invalid token'}, status=401)

        user = User.objects.filter(gid=payload.get('gid')).first()
        if not user:
            return Response({'error': 'User not found'}, status=404)

        if spass:
            user.spass = spass
        if isused:
            user.isused = isused
        
        if phone:
            user.phone=phone

        user.save()
        serializer = UserSerializer(user)
        return Response(serializer.data)
       
        

