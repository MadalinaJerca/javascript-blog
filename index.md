---
title: Homepage
layout: base.liquid
---

# Welcome to my blog!

{% for post in collections.posts reversed %}
  <a href="{{ post.url }}">
    <hr>
    <h2>{{ post.data.title }}</h2>
    <time>{{ post.data.date | date: "%B %d, %Y" }}</time>
  </a>
{% endfor %}