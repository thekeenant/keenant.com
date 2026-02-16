---
title: "Markdown Kitchen Sink - Testing All Features"
slug: "markdown-kitchen-sink"
description: "A comprehensive test of all markdown features including headings, lists, code blocks, tables, and more"
date: 2026-02-16
tags: ["markdown", "testing", "documentation"]
draft: true
---

This post tests all markdown features to ensure they render correctly.

## Headings

# H1 Heading

## H2 Heading

### H3 Heading

#### H4 Heading

##### H5 Heading

###### H6 Heading

## Emphasis

_This text is italicized_

_This is also italicized_

**This text is bold**

**This is also bold**

**_This text is bold and italic_**

~~This text is strikethrough~~

## Lists

### Unordered Lists

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
    - Deep nested item
- Item 3

* Alternative bullet
* Another item

### Ordered Lists

1. First item
2. Second item
   1. Nested numbered item
   2. Another nested item
3. Third item

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task

## Links

[This is a link](https://astro.build)

[Link with title](https://astro.build "Astro Website")

<https://auto-link.com>

## Images

![Alt text for image](https://via.placeholder.com/600x200?text=Placeholder+Image)

## Blockquotes

> This is a blockquote.
> It can span multiple lines.
>
> And multiple paragraphs.

> Nested blockquotes:
>
> > This is nested
> >
> > > And this is double nested

## Code

### Inline Code

This is `inline code` in a sentence.

Use the `console.log()` function to debug.

### Code Blocks

#### JavaScript

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet("World");
console.log(message);

// Arrow function
const multiply = (a, b) => a * b;
```

#### TypeScript

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {
  return {
    id,
    name: "John Doe",
    email: "john@example.com",
  };
}

const user: User = getUser(1);
```

#### Python

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# List comprehension
squares = [x**2 for x in range(10)]
print(squares)
```

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

#### CSS

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.dark-mode {
  background-color: #000;
  color: #fff;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
```

#### JSON

```json
{
  "name": "astro-articles",
  "version": "1.0.0",
  "dependencies": {
    "astro": "^5.0.0",
    "tailwindcss": "^3.0.0"
  }
}
```

#### Bash

```bash
#!/bin/bash

npm install
npm run dev

# Loop example
for i in {1..5}; do
  echo "Number: $i"
done
```

#### SQL

```sql
SELECT users.name, posts.title
FROM users
JOIN posts ON users.id = posts.user_id
WHERE posts.published = true
ORDER BY posts.created_at DESC
LIMIT 10;
```

## Tables

| Feature     | Supported | Notes               |
| ----------- | --------- | ------------------- |
| Headings    | ✅        | H1-H6               |
| Lists       | ✅        | Ordered & Unordered |
| Code Blocks | ✅        | Syntax highlighting |
| Tables      | ✅        | Markdown tables     |
| Images      | ✅        | Full support        |

### Alignment

| Left Aligned | Center Aligned | Right Aligned |
| :----------- | :------------: | ------------: |
| Left         |     Center     |         Right |
| Text         |      Text      |          Text |
| 1            |       2        |             3 |

## Horizontal Rules

---

---

---

## Escaping Characters

\*This is not italic\*

\`This is not code\`

\[Not a link\]

## HTML in Markdown

<div style="background: #333; padding: 20px; border-radius: 8px;">
  <p style="color: #fff; margin: 0;">HTML content within markdown</p>
</div>

<details>
<summary>Click to expand</summary>

This content is hidden until you click the summary.

```javascript
console.log("Hidden code block!");
```

</details>

## Footnotes

Here's a sentence with a footnote[^1].

Another reference[^2].

[^1]: This is the first footnote.

[^2]: This is the second footnote with more details.

## Definition Lists

Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

## Abbreviations

The HTML specification is maintained by the W3C.

_[HTML]: Hyper Text Markup Language
_[W3C]: World Wide Web Consortium

## Math (if supported)

Inline math: $E = mc^2$

Block math:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## Line Breaks

This is the first line.  
This is the second line with two spaces before.

This is a line with a backslash\
before the line break.

---

## Conclusion

This markdown kitchen sink tests all common markdown features to ensure proper rendering and styling. If you can see all these elements properly formatted, your markdown parser is working correctly!
