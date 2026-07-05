import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Admin


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