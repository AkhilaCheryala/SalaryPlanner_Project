from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Salary

# User Serializer for Registration
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

# Salary Serializer
class SalarySerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')  # Ensure user is read-only

    class Meta:
        model = Salary
        fields = '__all__'  # Includes user field automatically

