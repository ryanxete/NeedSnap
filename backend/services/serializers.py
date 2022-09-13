from rest_framework import serializers
from dataclasses import fields
from .models import Service


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
        extra_fileds = ["id", 'service_type', 'price']
