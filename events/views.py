from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from events.models import event
from events.serializers import EventSerializer


class EventList(APIView):
    """
    List all events, or create a new event.
    """
    def get(self, request, format=None):
        snippets = event.objects.all()
        serializer = EventSerializer(snippets, many=True)
        return Response({
            "data" : serializer.data,
        })

    def post(self, request, format=None):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
