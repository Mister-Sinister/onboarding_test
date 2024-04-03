from rest_framework import serializers
from .models import *


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = "__all__"
    
class UserActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserActivity
        fields = "__all__"
    
# class UserActivityLogSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserActivityLog
#         fields = "__all__"

class UserActivityLogSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user_activity.user.username')
    activity_id = serializers.IntegerField(source='user_activity.activity.id')
    activity_name = serializers.CharField(source='user_activity.activity.name')
    start_date = serializers.DateTimeField(source='user_activity.activity.start_date')
    end_date = serializers.DateTimeField(source='user_activity.activity.end_date')

    class Meta:
        model = UserActivityLog
        fields = ['username', 'activity_id', 'activity_name', 'score', 'start_date', 'end_date']