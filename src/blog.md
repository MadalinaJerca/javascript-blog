---
title: Blog Posts
layout: base.liquid
---

<link rel="stylesheet" href="/css/blog.css">

<section class="hero is-large is-link blog_hero-section">
  <div class="hero-body">
    <h1 class="title is-size-2 blog-title"><span><</span><br>the best javascript blog<br>/></h1>
  </div>
</section>

<img src="/img/b.png" class="splash">

<div class="container">
<div class="columns is-flex-wrap-wrap px-5 blog-container">
<div class="column is-half mb-4 p-4">
{% for post in collections.posts reversed %}
<article>
    <div class="card-image">
        <figure class="image">
            <img src="/img/card-image.jpg" alt="Coding" width="400" height="600">
        </figure>
    </div>
    <div class="blog-entry">
    <div class="blog_first-column">
        <div class="code">
            <span class="code_letters">C O</span>
            <span class="code_letters">D E</span>
        </div>
    </div>
    <div class="column blog_second-column">
        <header class="blog-entry-header">
            <h2 class="blog-entry-title mt-4"><a href="#">{{ post.data.title }}</a></h2>
            <div class="blog-entry-meta is-flex">
                <div class="profile_image_container"> 
                    <img src="/img/madi.png" class="profile_image pt-1" height="50" width="50" alt="Madalina Jerca">
                </div>
                <div class="is-flex is-flex-direction-column ml-4">    
                    <span class="author">
                        <a href="pages/profile-madalina.html">Madalina Jerca</a>
                    </span>                    
                    <time class="blog-entry-date published">Posted at {{ post.data.date | date: "%B %d, %Y"}}</time>
                </div>
            </div>
        </header>
        <div class="blog-entry-content">
            <p>{{ post.data.myNote }}</p>
        </div>
        <footer class="blog-entry-footer row">
            <div class="read-more col-md-6">
                <a href="">Read More</a>
            </div>
        </footer>  
    </div>
</article>

<article>
    <div class="blog-entry left-side">
    <div class="blog_first-column">
        <div class="code">
            <span class="code-letters">C O</span>
            <span class="code-letters">D E</span>
        </div>
    </div>
    <div class="column blog_second-column">
        <header class="blog-entry-header">
            <h2 class="blog-entry-title mt-4"><a href="#">{{ post.data.title }}</a></h2>
            <div class="blog-entry-meta is-flex">
                <div class="profile_image_container"> 
                    <img src="/img/madi.png" class="profile_image pt-1" height="50" width="50" alt="Madalina Jerca">
                </div>
                <div class="is-flex is-flex-direction-column ml-4">    
                    <span class="author">
                        <a href="pages/profile-madalina.html">Madalina Jerca</a>
                    </span>                    
                    <time class="blog-entry-date published">Posted at {{ post.data.date | date: "%B %d, %Y"}}</time>
                </div>
            </div>
        </header>
        <div class="blog-entry-content">
            <p>{{ post.data.myNote }}</p>
        </div>
        <footer class="blog-entry-footer row">
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