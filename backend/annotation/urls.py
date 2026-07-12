from django.urls import path
from .views import (
    ImageListCreateView,
    ImageDeleteView,
    AnnotationListCreateView,
    AnnotationDeleteView,
)

urlpatterns = [
    path(
        "images/",
        ImageListCreateView.as_view(),
        name="image-list-create",
    ),

    path(
        "images/<int:pk>/",
        ImageDeleteView.as_view(),
        name="image-delete",
    ),
   

    path(
        "annotations/",
        AnnotationListCreateView.as_view(),
        name="annotation-list-create",
    ),

    path(
        "annotations/<int:pk>/",
        AnnotationDeleteView.as_view(),
        name="annotation-delete",
    ),
]