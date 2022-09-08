import imp
from operator import truediv
from django.db import models
from django.contrib.auth.models import AbstractUser
from addresses.models import Address
from services.models import Service


class User(AbstractUser):
    is_provider = models.BooleanField(default=False, null=True)
    phone_number = models.IntegerField(null=True, blank=True)
    address = models.OneToOneField(Address ,on_delete=models.CASCADE, null=True)
    service = models.ForeignKey(Service ,on_delete=models.CASCADE, null=True)


    
    # Example (note import of models above that is commented out)
    # this will add a column to the user table
    # is_student = models.BooleanField('student status', default=False)

