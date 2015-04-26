from news.models import Article

from rest_framework.serializers import ModelSerializer

class ArticleSerializer(ModelSerializer):
	"""Serializer options for Article Model"""

    class Meta:
        model = Article
        fields = ('title', 'slug', 'image', 'message', 'created')
