from django.db import models


class Image(models.Model):
    image = models.ImageField(upload_to="images/")
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-uploaded_at"]

    def __str__(self):
        return f"Image {self.id}"


class Annotation(models.Model):
    image = models.ForeignKey(
        Image,
        on_delete=models.CASCADE,
        related_name="annotations",
    )

    points = models.JSONField()

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]

    def __str__(self):
        return f"Annotation {self.id}"