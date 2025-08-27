# Grunt Mart

_An E commer Special Operations veteran._

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Configuration](#configuration)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Overview

**Purpose:**
Unchained is a decentralized ticketing platform leveraging blockchain to disrupt traditional event ticketing monopolies. It ensures fairness, transparency, and loyalty rewards for fans while protecting venues and artists from fraud and exploitative resale markets.

**Features:**

- NFT-based ticketing (ERC-721 with ERC-2981 royalties)
- Smart contract-enforced anti-scalping
- Collectible NFT ticket stubs for fans
- Venue and artist dashboards with analytics
- Fan loyalty rewards and exclusive access
- Search and discovery for events, venues, and artists
- Waitlist and user acquisition funnel (JoinTheResistance landing page)

**Target Audience:**

- Music fans seeking authentic ticket access and collectibles
- Artists wanting fair royalties and direct fan engagement
- Venues needing fraud prevention and actionable analytics

---

## Architecture

**System Diagram:**

File structure:

src/
│
├
├── assets/ # images, icons
├── components/ # reusable UI components
├── pages/ # app "screens" (e.g., Home, EventDetail)
├── styles/ # CSS files (global.css, mobile.css, etc.)
│ ├── base/
│ │ ├── \_reset.css # CSS Reset (e.g., Eric Meyer or modern-normalize)
│ │ ├── \_typography.css # Global font styles, headings, paragraphs
│ │ └── \_globals.css # General layout rules, box-sizing, links, lists
│ │
│ ├── tokens/
│ │ ├── \_colors.css # Central color palette (brand, neutrals, etc.)
│ │ ├── \_spacing.css # Margin, padding, spacing utilities
│ │ └── \_typescale.css # Font sizes, line heights, font weights
│ │
│ ├── components/
│ │ ├── button.css # Styles for <Button />
│ │ ├── input.css # Styles for <Input />
│ │ └── card.css # Styles for EventCard, NFTCard, etc.
│ │
│ ├── layout/
│ │ ├── grid.css # Grid/Flexbox utilities
│ │ └── containers.css # Page/container width and padding helpers
│ │
│ └── index.css # Import all the above in order
|
├── App.jsx # main app logic
└── main.jsx # entry point

**Key Components:**

- **Frontend:** React (Vite), Tailwind CSS, RainbowKit
- **Backend:** Node.js / Express (via Vercel Serverless Functions for production)
- **Storage:** NFT.Storage (IPFS)
- **Integrations:**
- **Search:** Fuse.js for fuzzy searching inventory

---

## Tech Stack

| Layer     | Technology       | Purpose                                  |
| --------- | ---------------- | ---------------------------------------- |
| Frontend  | React (Vite)     | UI rendering                             |
| Styling   | custom CSS       | Theming & responsive design              |
| Search    | Fuse.js          | Client-side fuzzy search                 |
| API Layer | Node.js, Express | Backend endpoints                        |
| Hosting   | Vercel           | Frontend + serverless backend deployment |

---

## Setup

**Requirements:**

- Node.js v18+
- npm or yarn
- Git
- API Keys:

**Installation:**

```bash
git clone <repo-url>
cd
npm install


Dependencies:
npm install react-router-dom@latest
npm install react-icons --save
npm install fuse.js <!-- Handles searchBar matching and fuzzy search results -->
DEV:
npm i -D vitest @testing-library/react
```

<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->
