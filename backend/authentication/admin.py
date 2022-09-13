from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
from .models import Service


class CustomUserAdmin(UserAdmin):

    admin.site.register(User)
    admin.site.register(Service)
