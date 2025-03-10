AUTHOR = "Michael Bocek"
SITENAME = "Scientific Marginalia"
SITEURL = "https://mikebocek.github.io/scientific-marginalia"

TIMEZONE = "America/Los_Angeles"
PLUGINS = ["render_math"]
DEFAULT_LANG = "en"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

THEME = "themes/elegant"
OUTPUT_PATH = "output"
PATH = "content"
STATIC_PATHS = ["img", "interactive"]

# Custom Home page
DIRECT_TEMPLATES = ("index", "tags", "categories", "archives")
TEMPLATE_PAGES = {
    "index.html": "index.html",
}

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
