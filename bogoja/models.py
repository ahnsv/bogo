from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class Bogoja(AbstractUser):
    is_banned = models.BooleanField(default=False)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "Bogoja, the user"


class BogojaProfile(models.Model):
    bogoja = models.ForeignKey(Bogoja, on_delete=models.CASCADE, null=True)
    # photo
    profile_pic = models.ImageField(upload_to="images/profiles")
    # profile status
    profile_status = models.CharField(max_length=100)
    # social?
