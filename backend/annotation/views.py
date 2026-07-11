from rest_framework import generics, status
from rest_framework.response import Response

from .models import Image, Annotation
from .serializers import ImageSerializer, AnnotationSerializer


class ImageListCreateView(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class AnnotationListCreateView(generics.ListCreateAPIView):
    serializer_class = AnnotationSerializer

    def get_queryset(self):
        image_id = self.request.query_params.get("image")

        if image_id:
            return Annotation.objects.filter(image_id=image_id)

        return Annotation.objects.all()

    def post(self, request, *args, **kwargs):
        image_id = request.data.get("image")
        points = request.data.get("points")

        # Validation
        if image_id is None or points is None:
            return Response(
                {"error": "Image and points are required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Remove old annotations
        Annotation.objects.filter(image_id=image_id).delete()

        # Save current polygons
        for polygon in points:
            Annotation.objects.create(
                image_id=image_id,
                points=polygon,
            )

        return Response(
            {"message": "Annotations saved successfully."},
            status=status.HTTP_201_CREATED,
        )


class AnnotationDeleteView(generics.DestroyAPIView):
    queryset = Annotation.objects.all()
    serializer_class = AnnotationSerializer