from django.core.urlresolvers import reverse
from django.test import TestCase
from django.utils.text import slugify

from google.appengine.ext import testbed

from news.models import Article

class BaseTestCase(TestCase):

    def setUp(self):
        self.testbed = testbed.Testbed()
        self.testbed.activate()

    def tearDown(self):
        self.testbed.deactivate()


class ArticleTestCase(BaseTestCase):

    def create_article(self):
        return Article.objects.create(title='Hello World', message='Have a fine day!')

    def test_slug_generation(self):
        test_article = self.create_article()
        self.assertEqual(test_article.slug, slugify(unicode(test_article.title)))

    def test_absolute_url(self):
        test_article = self.create_article()
        self.assertEqual(test_article.get_absolute_url(), reverse('display_article', kwargs={'slug': test_article.slug}))

    def test_unicode(self):
        test_article = self.create_article()
        self.assertEqual(test_article.__unicode__(), test_article.title)

