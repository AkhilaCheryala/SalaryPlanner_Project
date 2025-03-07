from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)  # Ensures emails are unique
    phone = models.CharField(max_length=15, blank=True, null=True)  # Optional phone number field

    def __str__(self):
        return self.username  # Displays username in Django admin