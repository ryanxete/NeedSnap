from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    is_provider = models.BooleanField(default=False)
    phone_number = models.IntegerField()
    address_id = models.ForeignKey(on_delete=models.CASCADE)
    service_id = models.ForeignKey(on_delete=models.CASCADE)


    
    # Example (note import of models above that is commented out)
    # this will add a column to the user table
    # is_student = models.BooleanField('student status', default=False)
