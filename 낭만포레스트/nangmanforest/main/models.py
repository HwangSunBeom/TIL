from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE

# Create your models here.
class Nangman(models.Model):
    # 제목
    title = models.CharField(max_length=200)
    # 등록 낭만가
    writer = models.ForeignKey(User, related_name="nangman", on_delete=CASCADE)
    # 부가 낭만 이미지
    image = models.ImageField(upload_to="images/", blank=True, null=True)
    # 낭만 설명
    content = models.TextField()
    # 낭만 달성 조건
    quest = models.CharField(max_length=100)

    # 제목
    def __str__(self):
        return self.title
    # 요약
    def summary(self):
        return self.body[:100]
    # 썸네일 이미지
    def thumb(self):
        return self.image


    # # 참여 낭만가
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="posts")
    # # 좋아요 / 찜
    # like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="like_posts", blank=True)


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # User모델과 Profile을 1:1로 연결
    description = models.TextField(blank=True)
    nickname = models.CharField(max_length=40, blank=True)
    image = models.ImageField(blank=True)