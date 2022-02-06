# JavaScript Blog

## Tools and Technologies used
- 11ty aka eleventy - https://www.11ty.dev/
- Bulma CSS - https://bulma.io/

## Steps I used to create the blog
1. Create your setup
   a. Run ``npm install -y`` in your project directory. This creates package.json file.
   b. Run ``npm install --save-dev @11ty/eleventy``. 
      This install Eleventy to your computer and creates package-lock.json file and node_modules folder.
   c. Create a file called .gitignore in your site’s root directory and add ignored files inside it.
   d. Add README.md file
   e. Run ``npm install -g @11ty/eleventy``. This will compile any files matching valid input template file extensions 
      (.md is one of them) in the current directory into the output folder (defaults to _site). 
      Eg: Writing _site/README/index.html from ./README.md.

2. Create a basic layout
    a. Create a folder called _includes in your site’s root directory using ``mkdir _includes`` command.
    b. Inside it, create a file named base.liquid by using ``cd _includes`` and ``touch base.liquid``
    c. In base.liquid file, paste the basic HTML, which will be inserted into every page of our site.

3. Now, your folder structure should look something like this
    your-blog/
        _includes/
            base.liquid   # contains the HTML from above
        node_modules/     # ignore this in .gitignore file
        .gitignore
        package-lock.json 
        package.json      
        README.md

4. Create your homepage
    Going back in your site’s root directory (next to node_modules, package.json, etc.), create a file called index.md.
    TO KNOW: The content from index.md will be populated in base.liquid {{ content }}.

5. Start your server
    Run this command ``npx @11ty/eleventy --serve``. 
    A _site folder is automatically generated in which the index.html file will be automatically created.