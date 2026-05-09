# space-quickstart-images

Static SVG illustrations used by the **Space quickstart** experience.

This repository is an asset host — there is no application code. Each SVG lives
at the repository root and is consumed by other projects via its raw URL.

## Assets

| File | Dimensions | Purpose |
| --- | --- | --- |
| [`basics-card.svg`](./basics-card.svg) | 153×127 | "Basics" quickstart card illustration |
| [`git-sync-card.svg`](./git-sync-card.svg) | 153×127 | "Git sync" quickstart card illustration |
| [`public-docs-card.svg`](./public-docs-card.svg) | 153×127 | "Public docs" quickstart card illustration |
| [`import-panel.svg`](./import-panel.svg) | 1060×801 | Import panel illustration |
| [`sync-repo.svg`](./sync-repo.svg) | 1060×801 | Sync-repo illustration |

## Using the assets

Reference any file by its raw URL:

```
https://raw.githubusercontent.com/marekdkropiewnicki-dotcom/space-quickstart-images/main/<file>.svg
```

For example, in HTML:

```html
<img
  src="https://raw.githubusercontent.com/marekdkropiewnicki-dotcom/space-quickstart-images/main/basics-card.svg"
  alt="Basics"
  width="153"
  height="127"
/>
```

Or in Markdown:

```md
![Basics](https://raw.githubusercontent.com/marekdkropiewnicki-dotcom/space-quickstart-images/main/basics-card.svg)
```

## Preview

A live preview of every asset is published via GitHub Pages — see
[`index.html`](./index.html) and the
[Pages workflow](./.github/workflows/pages.yml). Once Pages is enabled for the
repository (Settings → Pages → "GitHub Actions"), the preview is available at:

```
https://marekdkropiewnicki-dotcom.github.io/space-quickstart-images/
```

You can also preview locally by opening `index.html` directly in a browser, or
serving the repo root:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Optimization

All SVGs have been optimized losslessly with [SVGO](https://github.com/svg/svgo)
(default plugins, multipass) while preserving their original `width`, `height`,
and `viewBox`. To re-optimize after editing:

```bash
npx svgo --multipass *.svg
```

## Contributing

1. Replace or add an SVG at the repo root.
2. Run `npx svgo --multipass <file>.svg` to optimize it.
3. Update the table above and `index.html` if you add or rename files.
4. Open a pull request.
