from django.views.generic import ListView, DetailView

from news.models import Article

class DisplayArticle(DetailView):
    """Display a single article, identified by a unique slug."""

    model = Article
    template_name = 'news/article_detail.html'
    context_object_name = 'news_article'


class DisplayArticles(ListView):
    """Display all news articles."""

    model = Article
    template_name = 'news/articles_list.html'
    context_object_name = 'news_articles'
