from django.conf.urls import patterns, url

from rest_framework.routers import SimpleRouter

from news.views import DisplayArticle, DisplayArticles
from news.api import ArticleViewSet

urlpatterns = patterns('',
    url(r'^$', DisplayArticles.as_view(), name='display_articles'),
    url(r'^(?P<slug>[-a-zA-Z0-9]+)$', DisplayArticle.as_view(), name='display_article'),
)

# API router
news_router = SimpleRouter()
news_router.register(r'api/articles', ArticleViewSet)