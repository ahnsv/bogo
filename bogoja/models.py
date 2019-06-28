from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class Bogoja(AbstractUser):
    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "Bogoja, the user"
