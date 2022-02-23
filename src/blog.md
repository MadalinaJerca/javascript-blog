---
title: Blog Posts
layout: base.liquid
---

<section class="section">
<div class="container">  
{% for post in collections.posts reversed %}
<a href="{{ post.url }}">
<hr>
<h2>{{ post.data.title }}</h2>
<time>{{ post.data.date | date: "%B %d, %Y" }}</time>
<p>{{ post.data.myNote }}</p>
</a>
{% endfor %}
</div>
</section>
