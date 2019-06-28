from django.contrib import admin

# Register your models here.
from django.contrib.auth.admin import UserAdmin

from bogoja.forms import BogojaCreateForm, BogojaChangeForm
from bogoja.models import Bogoja


class SuperBogoja(UserAdmin):
    model = Bogoja
    add_form = BogojaCreateForm
    form = BogojaChangeForm


admin.register(Bogoja, SuperBogoja)
