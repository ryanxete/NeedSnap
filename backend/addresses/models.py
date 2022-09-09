from django.db import models
from authentication.models import User

# Create your models here.
class Address(models.Model):
    street = models.CharField(max_length=500)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.IntegerField()
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)

    