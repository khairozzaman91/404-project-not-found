from django.urls import path

from .views import login_view, create_task, get_tasks


urlpatterns = [
    path("login/", login_view, name="login"),
    path("tasks/", create_task, name="create_task"),
    path("tasks/list/", get_tasks, name="get_tasks"),
]