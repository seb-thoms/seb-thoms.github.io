# Sebastian Thomas - Personal Portfolio

Welcome to the repository for my personal portfolio, live at [seb-thoms.github.io](https://seb-thoms.github.io).

This site showcases my projects, skills, professional journey, and technical/creative writings. It is built using [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

## About Me

I am a graduate student in Artificial Intelligence at Northeastern University, specializing in reinforcement learning, generative AI, and algorithmic analysis. With a background as a Senior Engineer at Commvault, I have experience in Python development, SQL-based data solutions, and enhancing customer experiences.

This portfolio highlights my work at the intersection of AI research and practical industry solutions.


## Technologies Used

* **Static Site Generator:** [Jekyll](https://jekyllrb.com/)
* **Hosting:** [GitHub Pages](https://pages.github.com/)
* **Languages/Styling:** HTML5, CSS3 (with CSS Variables, Flexbox, Grid), JavaScript (for interactivity)
* **Content:** Markdown for blog posts
* **Version Control:** Git & GitHub

## Local Development

To run this site locally:

1.  **Prerequisites:**
    * Ruby (see [Ruby installation guide](https://www.ruby-lang.org/en/documentation/installation/))
    * Bundler (`gem install bundler`)
    * Jekyll (`gem install jekyll`)
2.  **Clone the repository (if you haven't already):**
    ```bash
    git clone [https://github.com/sebthomas/sebthomas.github.io.git](https://github.com/sebthomas/sebthomas.github.io.git)
    cd sebthomas.github.io
    ```
3.  **Install dependencies:**
    ```bash
    bundle install
    ```
4.  **Serve the site:**
    ```bash
    bundle exec jekyll serve --livereload
    ```
5.  Open your browser and navigate to `http://localhost:4000`.

## Content Structure

* **`_layouts/`**: Contains the main HTML layout templates (e.g., `default.html`, `post.html`).
* **`_includes/`**: Reusable HTML snippets (e.g., `header.html`, `footer.html`).
* **`_posts/`**: Blog posts in `YYYY-MM-DD-title.md` format.
* **`assets/`**: Contains CSS, JavaScript, images, and other static files.
    * `assets/css/style.css`: Main stylesheet.
    * `assets/js/main.js`: Main JavaScript for site-wide interactions.
    * `assets/js/blog_filter_search.js`: JavaScript for blog filtering and search (if implemented).
* **`index.html`**: The main homepage.
* **`blog.html`**: The blog listing page.
* **`_config.yml`**: Jekyll site-wide configuration.

## Contributing

This is a personal portfolio site, but if you spot any issues or have suggestions, feel free to open an issue on GitHub.

## License

The content of this portfolio site is proprietary and copyright © Sebastian Thomas.
The underlying code used to format and display that content is licensed under the MIT license unless otherwise specified.