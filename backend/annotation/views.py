from django.shortcuts import render
from .models import Annotation
from .serializers import AnnotationSerializer

from rest_framework import generics
from .models import Image
from .serializers import ImageSerializer


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
    
class AnnotationDeleteView(generics.DestroyAPIView):
    queryset = Annotation.objects.all()
    serializer_class = AnnotationSerializer