from django.db import models


# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=255)
    phone=models.CharField( max_length=15,unique=True)
    spass=models.CharField(max_length=255)
    isused=models.IntegerField()
    email = models.CharField(max_length=255, unique=True)
    gid = models.CharField(max_length=255, unique=True)
    

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []