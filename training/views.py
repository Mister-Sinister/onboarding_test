from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from .serializers import *
from django.utils import timezone

from .models import *
from rest_framework.decorators import api_view
# Create your views here.




@api_view(['GET'])
def apiOverview(request):
    # user = User.objects.get(pk=1)
    if request.method == "GET":
        
        api_urls = {
            'List':'/task-list/',
            'Detail View':'/task-detail/<str:pk>/',
            'Create':'/task-create/',
            'Update':'/task-update/<str:pk>/',
            'Delete':'/task-delete/<str:pk>/',
            }
    return Response(api_urls)

@api_view(['GET'])
def login(request):
    user_id = 1  # Example user ID
    username = User.objects.get(pk=user_id).username

    # Return user data as JSON response
    return Response({'user_id': user_id, 'username': username})


@api_view(['GET'])
def dashboard(request, user_id):
    user_logs = UserActivityLog.objects.filter(user_activity__user_id=user_id)
    serializer = UserActivityLogSerializer(user_logs, many=True)
    return Response(serializer.data)
    


@api_view(['GET'])
def activity_list(request):
    activities = Activity.objects.all()
    # print(training_module)
    serializer = ActivitySerializer(activities, many=True)
    return Response(serializer.data)
    
    
@api_view(['GET'])
def activity_description(request, activity_id):
    activity = Activity.objects.get(pk=activity_id)
    serializer = ActivitySerializer(activity)
    return Response(serializer.data)


@api_view(['POST'])
def perform_activity(request):
    if request.method == "POST":
        # actually do the training
        score = do_training()
        user_id = 2

        # Get the activity ID from the request data
        activity_id = request.data.get('activityId')

        message = "Training completed successfully"
        print(activity_id)
        # Create a new UserActivityLog object
        
        user_activity = UserActivity.objects.create(
            user_id=user_id,
            activity_id=activity_id
        )
        
        UserActivityLog.objects.create(
            user_activity=user_activity,
            score=score,  
        )
        return Response({"message": message, "score": score}, status=200)

# perhaps the leaderboard should be activity based
@api_view(['GET'])
def leaderboard(request):
    # list of the logs 
    logs = UserActivityLog.objects.all().order_by("-score")
    serializer = UserActivityLogSerializer(logs, many=True)
    return Response(serializer.data)