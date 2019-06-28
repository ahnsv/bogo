from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from bogoja.models import Bogoja


class BogojaCreateForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = Bogoja
        fields = ('username', 'password')


class BogojaChangeForm(UserChangeForm):
    class Meta(UserChangeForm):
        model = Bogoja
        fields = UserChangeForm.Meta.fields
