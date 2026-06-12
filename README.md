# EasyClips

**AI-powered short-form video automation platform**

[easyclips.io](https://easyclips.io)

Turn any YouTube channel into a stream of viral-ready clips — automatically edited, captioned, and published across TikTok, Instagram Reels, YouTube Shorts, and LinkedIn.

---

## What It Does

EasyClips scans YouTube channels, uses AI to identify the most shareable moments, crops them to vertical format, adds captions, and distributes finished clips on a schedule — 100% passively.

### The 3-Step Flow

1. **Paste a YouTube channel URL** — connect any channel
2. **AI extracts & edits** — identifies viral moments, crops vertically, adds captions, renders
3. **Auto-publish** — clips go live across all platforms on schedule

---

## Key Features

| Feature | Description |
|---------|-------------|
| Smart Moment Detection | AI identifies the most engaging, shareable segments from long-form content |
| Vertical Crop & Reframe | Automatically reformats landscape video for short-form platforms |
| Auto Captions | Generates and overlays accurate captions — no manual editing |
| Multi-Platform Publishing | Simultaneous distribution to TikTok, Reels, Shorts, and LinkedIn |
| Scheduled Posting | Set it and forget it — clips publish on your timeline |
| New Upload Monitoring | Automatically processes new videos as they're uploaded |

---

## Who It's For

- **Podcasters** — turn long episodes into shareable highlights
- **Educators** — repurpose lectures into bite-sized lessons
- **Businesses** — convert webinars and demos into lead-generating content
- **Creators who are too busy to clip**

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js, React, TailwindCSS |
| Backend | Node.js, Python |
| AI/ML | Custom moment-detection models, NLP for caption generation |
| Video Processing | FFmpeg, custom rendering pipeline |
| Infrastructure | Cloud-native, serverless architecture |
| Distribution | Platform APIs (TikTok, Instagram, YouTube, LinkedIn) |

---

## Screenshots

### Landing Page
![Landing Page](screenshots/landing-page.png)

### Dashboard Overview
![Dashboard](screenshots/dashboard.png)

### Clip Video — AI-Powered Generation
![Clip Video Modal](screenshots/clip-video.png)

### Content Library
![Clips Library](screenshots/clips.png)

### Posting Schedule Calendar
![Calendar](screenshots/calendar.png)

### Multi-Platform Distribution
![Connected Platforms](screenshots/platforms.png)

### Pricing Plans
![Billing](screenshots/billing.png)

---

## Architecture Overview

```
YouTube Channel URL
        │
        ▼
┌─────────────────┐
│  Channel Scanner │ ── monitors for new uploads
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Moment Detection │ ── AI identifies viral-worthy segments
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Video Pipeline  │ ── crop, caption, render
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Auto Publisher  │ ── scheduled multi-platform distribution
└─────────────────┘
```

---

## Business

- **Live product** generating revenue at [easyclips.io](https://easyclips.io)
- Solo-founded and built end-to-end (product, engineering, marketing)
- Serving creators, podcasters, and businesses

---

## Contact

Built by [Keshav Mehndiratta](https://github.com/KeshavM05)

- Website: [easyclips.io](https://easyclips.io)
- Email: mehndirattakeshav@gmail.com
