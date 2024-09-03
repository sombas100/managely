from django.db import models
from django.contrib.auth.models import User


class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return str(self.name)


class Task(models.Model):
    STATUS_CHOICES = [
        ('TODO', 'To Do'),
        ('IN_PROGRESS', 'In Progress'),
        ('COMPLETED', 'Completed'),
    ]
    title = models.CharField(max_length=100)
    description = models.TextField()
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default='TODO')
    project = models.ForeignKey(
        Project, related_name='tasks', on_delete=models.CASCADE)
    assigned_to = models.ForeignKey(
        User, related_name='tasks', on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return str(self.title)
