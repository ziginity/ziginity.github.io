# Ziginity brand assets

The mark is **Zig-finity**: an infinity loop drawn in one stroke, sharp on the
left (zig) and round on the right (infinity), in the order of the name, with one strand passing under the
other at the crossing (the twist). It is rendered as tinted liquid glass
(teal `#7ee8f5` → indigo `#5b6cff` → violet `#a45cff`), never on a tile.

**Two versions:**

- **With ring**: the mark at 80% inside a thin gradient ring (r=46, stroke
  3.2–4 in the 100 box). For places we render ourselves: site header/footer,
  banners, video watermarks.
  The favicon (`app/icon.svg`, `favicon.ico`) also uses the ring, drawn flat
  (opaque gradient, no glass, ring stroke 7, mark at 86%) so it stays legible
  at 16–32px.
- **Without ring**: the bare mark. For avatars and app icons (`apple-icon.png`,
  `ziginity-avatar`), because YouTube/TikTok
  crop to a circle and iOS to a rounded square; that crop frames the mark, and
  a ring would double up with the crop edge or get cut off.

Master artwork: `app/icon.svg` (site favicon) and `components/ui/logo.tsx`
(header/footer). Path, in a 100×100 box, stroke width 10, round joins:

```
M55.15 44.55L60.37 39.02A16 16 0 1 1 60.37 60.98L50 50L33 32L15 50L33 68L44.85 55.45
```

| File | Use | Source |
|---|---|---|
| `ziginity-avatar.png` | 1024×1024 social avatar (YouTube, TikTok); safe for circle crops | `ziginity-avatar.svg` |
| `ziginity-yt-banner.png` | 2560×1440 YouTube banner; logo and tagline sit in the 1546×423 all-devices area | `ziginity-yt-banner.html` |

## Re-rendering

```sh
# avatar
rsvg-convert -w 1024 -h 1024 ziginity-avatar.svg -o ziginity-avatar.png

# banner (loads Inter from Google Fonts)
google-chrome-stable --headless=new --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=2560,1440 --virtual-time-budget=5000 \
  --screenshot=ziginity-yt-banner.png "file://$PWD/ziginity-yt-banner.html"
```
