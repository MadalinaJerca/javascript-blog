# JavaScript Blog

## Tools and Technologies used
- 11ty aka eleventy - https://www.11ty.dev/
- Bulma CSS - https://bulma.io/

## Prerequisites
- Install npm.
- Sign up for a GitHub account. GitHub will be part of the build process for publishing your site.
- Create a folder for your project and open it in your text editor.

## Basic steps to create a blog from zero

### 1. Create your setup with Eleventy
- Open your blog’s folder in VS Code.
- Run ``npm install -y`` in your project directory. 
    - This creates package.json file.
- Run ``npm install --save-dev @11ty/eleventy``. 
    - This install Eleventy to your computer and creates package-lock.json file and node_modules folder.
- Create a file called ``.gitignore`` in your site’s root directory and add ignored files inside it.
- Add ``README.md`` file.
- Run ``npm install -g @11ty/eleventy``. 
    * This will compile any files matching valid input template file extensions (.md is one of them) in the current directory into the output folder (defaults to _site).

### 2. Create a basic layout
- Create a folder called ``_includes`` in your site’s root directory using ``mkdir _includes`` command.
- Inside it, create a file named ``base.liquid`` by using ``cd _includes`` and ``touch base.liquid`` commands.
- In ``base.liquid`` file, paste the basic HTML, which will be inserted into every page of our site.

### 3. Now, your folder structure should look like this:
- your-blog/
    - _includes/
        - base.liquid   # contains the basic HTML 
    - node_modules/     # ignore this in .gitignore file
    - .gitignore
    - package-lock.json 
    - package.json      
    - README.md

### 4. Create your homepage
- Going back in your site’s root directory (next to node_modules, package.json, etc.), create a file called ``index.md``.
- TO KNOW: The content from ``index.md`` will be populated in ``base.liquid`` by using ``{{ content }}``.

### 5. Start your server
- Run this command ``npx @11ty/eleventy --serve``. 
- A ``_site`` folder is automatically generated in which the ``index.html`` file will be automatically created.

### 6. Add your first post
- Create a ``posts`` folder. Inside it, create a file called ``first-post.md`` where you can add your content.
- Inside the posts folder, create a file called ``posts.json`` to assign a default layout like base.liquid.
- Going back to the ``_includes`` folder, create a new file called ``nav.liquid`` from where the user can access the home page and the first post's content.
- In ``base.liquid`` file, above ``{{ content }}``, add this: ``{% include nav.liquid %}``.

###
- your-blog/
    - dist
    - node_modules/     
    - src
        - _includes/
            - nav.liquid
        - posts
            - first-post.md
            - posts.json
        - styles
            - reset.scss
            - styles.scss
        - base.liquid     # contains the basic HTML 
        - styles.liquid
    - eleventy.js
    - .gitignore
    - index.md
    - package-lock.json 
    - package.json      
    - README.md
###

### 7. Add styling
- Create a new folder inside _includes called ``styles``. Inside this folder, you can create your CSS files.
- To add these styles to your Eleventy site, create a ``styles.liquid`` file in your root directory and include your CSS by using 
``{% include styles/file_name.css %}``.