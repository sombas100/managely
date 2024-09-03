from rest_framework import serializers
from .models import Project, Task
from django.contrib.auth.models import User


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password',
                  'email', 'first_name', 'last_name')

        def validate(self, data):
            if data['password'] != data['password2']:
                raise serializers.ValidationError('Passwords do not match.')
            return data

        def create(self, validated_data):
            print("Validated Data Before User Creation: ", validated_data)

            password = validated_data.pop('password')

            user = User.objects.create_user(
                password=password, **validated_data)
            return user
