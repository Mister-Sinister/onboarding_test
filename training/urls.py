from django.urls import path
from . import views

urlpatterns = [
    path("api", views.apiOverview, name="api-overview"),
    path("login", views.login, name="login"),
    path("dashboard/<int:user_id>", views.dashboard, name="dashboard"),
    path("activity_list", views.activity_list, name="activity_list"),
    path("activity_description/<int:activity_id>", views.activity_description, name="activity_description"),
    path("perform_activity", views.perform_activity, name="perform_activity"),
    path("leaderboard", views.leaderboard, name="leaderboard"),
]