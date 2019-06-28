from unittest import TestCase

from django import forms
from django.core.files.uploadedfile import SimpleUploadedFile
from django.utils import timezone

from bogoja.models import Bogoja
from post.models import Post


class TestPost(TestCase):
    def setUp(self) -> None:
        test_bogoja = Bogoja(
            username="hello",
            password="hello",
            email= forms.EmailField().clean("hello@af.mil")
        )
        Bogoja.objects.create(test_bogoja)
        Post.objects.create(
            bogoja=test_bogoja,
            content="hello",
            is_published=True,
            thumbnail=SimpleUploadedFile(name="test_image.jpg",
                                         content=open('assets/sample/north-end.jpg', 'rb').read(),
                                         content_type="image/jpeg"),
            url=forms.URLField().clean("https://spoqa.github.io/2012/06/27/using-jinja2-api.html"),
            created_at=timezone.now(),
            modified_at=timezone.now(),
        )

    def post_model_test(self):
        test = Post.objects.get(content="hello")
        self.assertTrue(test.is_published)
