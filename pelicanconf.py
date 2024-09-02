AUTHOR = 'Michael Bocek'
SITENAME = 'Scientific Marginalia'
SITEURL = ""

PATH = "content"

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

THEME = 'themes/bootstrap2'
OUTPUT_PATH = 'output'
PATH = 'content'

ARTICLE_URL = 'posts/{date:%Y}/{date:%m}/{slug}/'
ARTICLE_SAVE_AS = 'posts/{date:%Y}/{date:%m}/{slug}/index.html'

# Custom Home page
DIRECT_TEMPLATES = (('index', 'blog', 'tags', 'categories', 'archives'))
TEMPLATE_PAGES = {'home.html': 'index.html',}

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
