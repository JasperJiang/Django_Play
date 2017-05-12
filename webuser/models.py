from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
	phone = models.CharField(max_length=20)

class Article(models.Model):
	title = models.CharField(max_length=50)
	content = models.TextField(null=True)
