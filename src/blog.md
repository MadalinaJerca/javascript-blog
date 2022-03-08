---
title: Blog page
layout: base.liquid
---

<link rel="stylesheet" href="/css/blog.css">

<!-- BLOG TITLE -->
<section class="hero is-large blog_hero-section">
  <div class="hero-body is-flex is-justify-content-center is-align-items-center">
    <h1 class="title is-size-4 blog-title has-text-centered"><span><</span><br>the best javascript blog<br>/></h1>
  </div>
    <!-- SPLASH IMAGE -->
  <img src="/img/splash.png" class="splash">    
</section>

<!-- ARTICLES CONTAINER -->
<div class="container">
<div class="columns is-flex-wrap-wrap px-5 blog-container">
{% for post in collections.posts reversed %}
<div class="column is-half mb-4 p-4">
<article>
    <div class="card-image hover01">
        <figure class="image">
            <img src="/img/test.jpg" alt="Coding" width="380">
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
        <!-- BLOG HEADER -->
        <header class="blog-entry-header">
            <h2 class="blog-entry-title mt-4"><a href="#" class="is-size-4">{{ post.data.title }}</a></h2>
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
        <!-- BLOG CONTENT -->
        <div class="blog-entry-content">
            <p>{{ post.data.myNote }}</p>
        </div>
        <!-- BLOG FOOTER -->
        <footer class="blog-entry-footer row">
            <div class="read-more col-md-6">
                <a href="">Read More</a>
            </div>
        </footer>  
    </div>
</article>

<!-- BLOG DIVIDERS -->
<article>
    <div class="blog-entry left-side">  
    <div class="column blog_second-column">
        <header class="blog-entry-header">
            <h2 class="blog-entry-title mt-4 has-text-centered"><a href="#">lorem ipsum dolor sit amet</a></h2>
        </header>
        <div class="blog-entry-content">
            <p> </p>
        </div>
        <footer class="blog-entry-footer row">
            <div class="read-more col-md-6">
                <a href=""></a>
            </div>
        </footer>  
    </div>
    </div>
</article>
</div>
{% endfor %}
</div>
</div>