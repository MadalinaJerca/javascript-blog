---
title: Blog Posts
layout: base.liquid
---

<link rel="stylesheet" href="/css/blog.css">
<nav class="breadcrumb is-centered" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Article</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>

<h1 class="title is-size-2 blog-title">The Best JavaScript Blog</h1>
<div class="container">
<div class="columns is-flex-wrap-wrap px-5">

<div class="column is-half mb-4 p-4">
{% for post in collections.posts reversed %}
<article>
    <div class="card-image">
        <figure class="image is-4by3">
            <img src="/img/card-image.jpg" alt="Placeholder image">
        </figure>
    </div>
    <div class="blog-entry">
    <div class="blog_column1">
        <div itemprop="dateCreated" class="date entry_date updated">
            <span class="date_day">C O</span>
            <span class="date_month">D E</span>
            <meta itemprop="interactionCount" content="UserComments: 0">
        </div>
    </div>
    <div class="column">
        <header class="entry-header">
            <h2 class="entry-title mt-4"><a href="" rel="bookmark">{{ post.data.title }}</a></h2>
            <div class="entry-meta is-flex">
                <div class="byline"> 
                    <img src="/img/madi.png" class="profile_image pt-1" height="50" width="50" alt="Madalina Jerca">
                </div>
                <div class="date-links is-flex is-flex-direction-column ml-4">    
                    <span class="author">
                        <a href="pages/profile-madalina.html">Madalina Jerca</a>
                    </span>                    
                    <time class="entry-date published">Posted at {{ post.data.date | date: "%B %d, %Y"}}</time>
                </div>
            </div>
        </header>
        <div class="entry-content">
            <p>{{ post.data.myNote }}</p>
        </div>
        <footer class="entry-footer row">
            <div class="read-more col-md-6">
                <a href="">Read More</a>
            </div>
        </footer>  
    </div>
</article>

<article>
    <div class="blog-entry left-side">
    <div class="blog_column1">
        <div itemprop="dateCreated" class="date entry_date updated">
            <span class="date_day">C O</span>
            <span class="date_month">D E</span>
            <meta itemprop="interactionCount" content="UserComments: 0">
        </div>
    </div>
    <div class="blog-wrapper>
        <header class="entry-header">
            <h2 class="entry-title mt-4"><a href="" rel="bookmark">{{ post.data.title }}</a></h2>
            <div class="entry-meta is-flex">
                <div class="byline"> 
                    <img src="/img/madi.png" class="profile_image pt-1" height="50" width="50" alt="Madalina Jerca">
                </div>
                <div class="date-links is-flex is-flex-direction-column ml-4">    
                    <span class="author">
                        <a href="pages/profile-madalina.html">Madalina Jerca</a>
                    </span>                    
                    <time class="entry-date published">Posted at {{ post.data.date | date: "%B %d, %Y"}}</time>
                </div>
            </div>
        </header>
        <div class="entry-content">
            <p>{{ post.data.myNote }}</p>
        </div>
        <footer class="entry-footer row">
            <div class="read-more col-md-6">
                <a href="">Read More</a>
            </div>
        </footer>  
    </div>
    </div>
    <div class="card-image">
        <figure class="image is-4by3">
            <img src="/img/card-image.jpg" alt="Placeholder image">
        </figure>
    </div>
</article>
{% endfor %}
</div>
</div>
</div>

<nav class="pagination is-centered" role="navigation" aria-label="pagination">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
    <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
    <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
  </ul>
</nav>