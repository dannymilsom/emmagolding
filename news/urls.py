from django.conf.urls import patterns, url

from news.views import DisplayArticle, DisplayArticles

urlpatterns = patterns('',
    url(r'^$', DisplayArticles.as_view(), name='display_articles'),
    url(r'^(?P<slug>[-a-zA-Z0-9]+)$', DisplayArticle.as_view(), name='display_article'),
)