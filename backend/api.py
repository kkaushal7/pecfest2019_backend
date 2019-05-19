from backend.models import Backend
from rest_framework import viewsets, permissions
from .serializers import BackendSerializer

# Backend Viewset
class BackendViewSet(viewsets.ModelViewSet):
    # queryset = Backend.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = BackendSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    