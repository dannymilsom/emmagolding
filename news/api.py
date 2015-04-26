from rest_framework.viewsets import ModelViewSet

from news.models import Article
from news.serializers import ArticleSerializer


class ArticleViewSet(ModelViewSet):
	"""Basic Article viewset for use with SimpleRouter"""

    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'slug'
