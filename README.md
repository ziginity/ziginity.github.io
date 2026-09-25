# ziginity.github.io

Source for **https://ziginity.github.io** — the Ziginity studio website and legal
pages for the game *Chess Bang*.

## Pages

| URL | File |
|---|---|
| https://ziginity.github.io/ | `index.html` |
| https://ziginity.github.io/privacy-policy/ | `privacy-policy/index.html` |
| https://ziginity.github.io/term-of-use/ | `term-of-use/index.html` |

## Deploying

Static site served by GitHub Pages from the `main` branch (root). Just commit and
push — Pages rebuilds automatically. `.nojekyll` disables Jekyll processing.

```sh
git add . && git commit -m "..." && git push
```

## Editing the policies

Plain HTML with shared styles in `assets/style.css`, no build step and no
JavaScript. The pages make no third-party requests (no web fonts, no analytics),
which keeps them consistent with the Privacy Policy. Update the effective date when
the content changes, and keep the data practices in sync with the AdMob and
RevenueCat integrations described in the game repository.
