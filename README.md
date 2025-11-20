# markdown-ssg

Minimal static site generator. Converts markdown files to clean HTML with simple templating.

## Installation
```bash
pnpm install -g markdown-ssg
```

## Usage
```bash
# Build site
markdown-ssg build ./content ./dist

# Watch mode (rebuilds on file changes)
markdown-ssg watch ./content ./dist
```

## Supported Formats

- `.md` - Standard markdown files
- ~~`.mdx` - Markdown with JSX components~~

~~MDX files support React components and JSX expressions for interactive content.~~

## Project Structure
```
content/
├── index.md[x]
├── about.md[x]
└── posts/
    └── hello.md[x]
```

Outputs to:
```
dist/
├── index.html
├── about.html
└── posts/
    └── hello.html
```

## Templates

Place a `template.html` in your content directory with `{{content}}` and `{{title}}` placeholders.

Default template is used if none provided.

## Licence

This project adheres the MIT license and is copyrighted to Keira Hopkins. [Read more about the license](LICENSE)