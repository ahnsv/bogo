from rest_framework import serializers

from post.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('bogoja', 'content', 'thumbnail', 'url', 'created_at', 'modified_at')