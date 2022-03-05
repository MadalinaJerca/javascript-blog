---
title: Blog Posts
layout: base.liquid
---

<link rel="stylesheet" href="/css/blog.css">
<h1 class="title blog-title">The Best JavaScript Blog</h1>
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
        <header class="entry-header">
            <div class="entry-meta is-flex">
                <div class="byline"> 
                    <img src="/img/madi.png" class="profile_image pt-1" height="50" width="50" alt="Madalina Jerca">
                </div>
                <div class="date-links is-flex is-flex-direction-column ml-4">    
                    <span class="author">
                        <a href="pages/profile-madalina.html">Madalina Jerca</a>
                    </span>                    
                    <time class="entry-date published">{{ post.data.date | date: "%B %d, %Y"}}</time>
                </div>
            </div>
            <h2 class="entry-title mt-4"><a href="" rel="bookmark">{{ post.data.title }}</a></h2>
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
    <div class="blog-entry">
        <header class="entry-header">
            <div class="entry-meta is-flex">
                <div class="byline"> 
                    <img src="/img/madi.png" class="profile_image pt-1" height="50" width="50" alt="Madalina Jerca">
                </div>
                <div class="date-links is-flex is-flex-direction-column ml-4">    
                    <span class="author">
                        <a href="pages/profile-madalina.html">Madalina Jerca</a>
                    </span>                    
                    <time class="entry-date published">{{ post.data.date | date: "%B %d, %Y"}}</time>
                </div>
            </div>
            <h2 class="entry-title mt-4"><a href="" rel="bookmark">{{ post.data.title }}</a></h2>
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

<!-- V1 -->
<!-- <section class="section">
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
</section> -->

<!-- V2 -->
<!-- <link rel="stylesheet" href="/css/blog.css"> 
<div class="container" tabindex="-1">
{% for post in collections.posts reversed %}
<div class="row">
<main class="site-main col-lg-10 offset-lg-1 col-md-12">
    <div class="row">
        <article class="col-xl-6 col-lg-12">
            <div class="blog-entry">
                <header class="entry-header">
                    <div class="categories">
                        <span class="cat-links"><a href="" rel="category tag" class="marketing">Skin</a> <a
                                href="" rel="category tag">Makeup</a></span> <span class="posted-on"><time
                                class="entry-date published">{{ post.data.date | date: "%B %d, %Y" }}</time></span>
                    </div>
                    <h2 class="entry-title"><a href="" rel="bookmark">{{ post.data.title }}</a></h2>
                    <div class="entry-meta">
                        <span class="byline"> <img src="/img/madi.png" class="profile_image" height="40"
                                width="40" alt="Madalina Jerca">By <span class="author"><a
                                    href="pages/profile-madalina.html">Madalina Jerca</a></span>
                        </span>
                    </div>
                </header>
                <div class="entry-content">
                    <p>{{ post.data.myNote }}</p>
                </div>
                <footer class="entry-footer row">
                    <div class="read-more col-md-6">
                        <a href="">Read More <img
                                src="https://sparktoro.com/blog/wp-content/themes/sparktoro-v2/img/read-more-arrow.svg"
                                height="8" width="10"></a>
                    </div>
                </footer>
            </div>
        </article>
    </div>    
</main>
</div>
{% endfor %}

<div class="row ">
<div class="col-sm-8 offset-sm-2 ">
    <nav aria-label="Page navigation ">
        <ul class="pagination ">
            <li class="active page-item "><a href=" " class="page-link ">1</a>
            </li>
            <li class="page-item "><a href=" " class="page-link ">2</a>
            </li>
            <li class="page-item "><a href=" " class="page-link ">3</a>
            </li>
        </ul>
    </nav>
</div>
</div>
</div>
</div> -->