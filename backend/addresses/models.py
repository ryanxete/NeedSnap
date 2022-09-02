from django.db import models

# Create your models here.
class Address(models.Model):
    street = models.CharField(max_length=500)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.IntegerField()

    