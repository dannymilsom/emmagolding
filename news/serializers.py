from news.models import Article

from rest_framework.serializers import ModelSerializer, DateTimeField

class ArticleSerializer(ModelSerializer):
    """Serializer options for Article Model"""

    created = DateTimeField(format='%b %m')

    class Meta:
        model = Article
        fields = ('title', 'slug', 'image', 'message', 'created')
