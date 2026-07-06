import json

from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt

from .models import Admin, Task


@csrf_exempt
def login_view(request):
    if request.method != "POST":
        return JsonResponse(
            {
                "success": False,
                "message": "Method not allowed"
            },
            status=405
        )

    try:
        data = json.loads(request.body)

        email = data.get("email")
        password = data.get("password")

        admin = Admin.objects.filter(
            email=email,
            password=password
        ).first()

        if admin:
            return JsonResponse(
                {
                    "success": True,
                    "message": "Login successful"
                },
                status=200
            )

        return JsonResponse(
            {
                "success": False,
                "message": "Invalid email or password"
            },
            status=401
        )

    except Exception as e:
        return JsonResponse(
            {
                "success": False,
                "message": str(e)
            },
            status=500
        )


@csrf_exempt
def create_task(request):
    if request.method != "POST":
        return JsonResponse(
            {
                "success": False,
                "message": "Method not allowed"
            },
            status=405
        )

    try:
        data = json.loads(request.body)

        task = Task.objects.create(
            title=data.get("title"),
            priority=data.get("priority"),
            due_date=data.get("due_date"),
            tags=data.get("tags"),
            status=data.get("status", "todo"),
        )

        return JsonResponse(
            {
                "success": True,
                "message": "Task created successfully",
                "task_id": task.id,
            },
            status=201
        )

    except Exception as e:
        return JsonResponse(
            {
                "success": False,
                "message": str(e)
            },
            status=500
        )
    

@csrf_exempt
def get_tasks(request):
    if request.method != "GET":
        return JsonResponse(
            {
                "success": False,
                "message": "Method not allowed"
            },
            status=405
        )

    try:
        tasks = Task.objects.all()

        data = []

        for task in tasks:
            data.append(
                {
                    "id": task.id,
                    "title": task.title,
                    "priority": task.priority,
                    "due_date": str(task.due_date),
                    "tags": task.tags,
                    "status": task.status,
                }
            )

        return JsonResponse(
            {
                "success": True,
                "tasks": data,
            },
            status=200
        )

    except Exception as e:
        return JsonResponse(
            {
                "success": False,
                "message": str(e)
            },
            status=500
        )
    














@csrf_exempt
def delete_task(request, task_id):
 if request.method != "DELETE":
        return JsonResponse(
            {
                "success": False,
                "message": "Method not allowed",
            },
            status=405,
        )

 try:
        task = get_object_or_404(Task, id=task_id)
        task.delete()

        return JsonResponse(
            {
                "success": True,
                "message": "Task deleted successfully",
            },
            status=200,
        )

 except Exception as e:
        return JsonResponse(
            {
                "success": False,
                "message": str(e),
            },
            status=500,
        )