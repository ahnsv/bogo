from rest_framework.serializers import ModelSerializer

from bogoja.models import Bogoja, BogojaProfile


class BogojaSerializer(ModelSerializer):
    class Meta:
        model = Bogoja
        fields = ('username', 'email')


class BogojaProfileSerializer(ModelSerializer):
    class Meta:
        model = BogojaProfile
        fields = ('profile_pic', 'profile_status')

    def create(self, validated_data):
        return BogojaProfile.objects.create(**validated_data)

    def update(self, instance, validated_data):
        return instance
