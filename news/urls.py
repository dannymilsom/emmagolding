from rest_framework.routers import SimpleRouter

from news.api import ArticleViewSet

# API router
news_router = SimpleRouter()
news_router.register(r'api/articles', ArticleViewSet)