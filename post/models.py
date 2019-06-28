from django.db import models


# Create your models here.
from bogoja.models import Bogoja


class Post(models.Model):
    # user info
    bogoja = models.ForeignKey(Bogoja, on_delete=models.CASCADE, null=True)
    content = models.CharField("post content", max_length=2000)
    # photos
    thumbnail = models.ImageField("thumbnail", upload_to="images/thumbnails")
    # links
    url = models.URLField()
    created_at = models.DateTimeField("post created time")
    modified_at = models.DateTimeField("post modified time")
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return self.content[:10] + " " + str(self.created_at)

    class Meta:
        verbose_name = "Bogo Post"
        verbose_name_plural = "Bogo Posts"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)


class PostReaction(models.Model):
    REACTIONS = (('D', '띠용'), ('G', '굿'), ('H', '한숨'))
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    reaction = models.CharField(max_length=1, choices=REACTIONS)


class PostComment(models.Model):
    # user info
    bogoja = models.ForeignKey(Bogoja, on_delete=models.CASCADE, null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.CharField("post comment content", max_length=1000)
    created_at = models.DateTimeField("post comment created time")
    modified_at = models.DateTimeField("post comment modified time")
