from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model


class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('manager', 'Manager'),
        ('developer', 'Developer'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)


pass

User = get_user_model()


class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)


class Task(models.Model):
    project = models.ForeignKey(
        Project, related_name='tasks', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    assignee = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    status = models.CharField(max_length=20, choices=(
        ('todo', 'To Do'), ('in_progress', 'In Progress'), ('Completed', 'Completed')))
    due_date = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)


class Comment(models.Model):
    task = models.ForeignKey(
        Task, related_name='comments', on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.author} on {self.task}"
