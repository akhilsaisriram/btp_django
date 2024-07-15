from django.urls import path
from .views import *

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('delete_user', Delete_user.as_view()),
    path('Update_password', Update_password.as_view()),
    path('uid', User_id.as_view()),
]