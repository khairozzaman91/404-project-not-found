from django.urls import path
from .views import (
    ImageListCreateView,
    AnnotationListCreateView,
    AnnotationDeleteView,
)
urlpatterns = [
    path("images/", ImageListCreateView.as_view(), name="image-list-create"),
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