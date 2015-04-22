from django.conf import settings
from django.core.urlresolvers import reverse
from django.db import models
from django.utils.text import slugify


class Article(models.Model):
    """TODO: image should reference a user uploaded file."""

    class Meta:
        ordering = ['-created']

    title = models.CharField(max_length=200)
    slug = models.SlugField()
    image = models.URLField()
    message = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('display_article', kwargs={'slug': self.slug})

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(unicode(self.title))
        super(Article, self).save(*args, **kwargs)

