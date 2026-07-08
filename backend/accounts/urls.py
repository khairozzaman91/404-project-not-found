from django.urls import path

from .views import (
    login_view,
    create_task,
    get_tasks,
    delete_task,
    update_task,
)

urlpatterns = [
    path("login/", login_view, name="login"),

    path("tasks/", create_task, name="create_task"),

    path("tasks/list/", get_tasks, name="get_tasks"),

    path(
        "tasks/<int:task_id>/",
        delete_task,
        name="delete_task",
    ),
    path(
    "tasks/<int:task_id>/update/",
    update_task,
    name="update_task",
    ),

]