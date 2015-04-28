from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView

import session_csrf
session_csrf.monkeypatch()

from django.contrib import admin
admin.autodiscover()

from news.urls import news_router

urlpatterns = patterns('',
    url(r'^$', TemplateView.as_view(template_name='home.html'), name='home'),
    url(r'news/', TemplateView.as_view(template_name='home.html'), name='home'),

    url(r'^_ah/', include('djangae.urls')),

    # Note that by default this is also locked down with login:admin in app.yaml
    url(r'^admin/', include(admin.site.urls)),

    url(r'^csp/', include('cspreports.urls')),
)

# additional REST endpoints
urlpatterns += news_router.urls
