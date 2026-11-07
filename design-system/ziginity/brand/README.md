# Ziginity brand assets

The mark is **Zig-finity**: an infinity loop drawn in one stroke, sharp on the
left (zig) and round on the right (infinity), in the order of the name, with one strand passing under the
other at the crossing (the twist). It is rendered as tinted liquid glass
(teal `#7ee8f5` → indigo `#5b6cff` → violet `#a45cff`), never on a tile.

Master artwork: `app/icon.svg` (site favicon) and `components/ui/logo.tsx`
(header/footer). Path, in a 100×100 box, stroke width 10, round joins:

```
M55.05 44.48C66.21 35.55 85 35.55 85 50C85 67 59 64 50 50L33 32L15 50L33 68L44.85 55.45
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
