# ✈️ SkyWings

**SkyWings** is a modern flight booking web app built with React and Vite — search flights, browse travel packages, book tickets with an animated 3D background, and get instant email confirmations.

### 🔗 Live Demo

**[https://skywingscom.netlify.app/](https://skywingscom.netlify.app/)**

> Hosted on [Netlify](https://www.netlify.com/).

---

## Features

- **Flight Search** — search flights by origin, destination, and date
- **Popular Routes & Packages** — browse curated travel packages
- **Authentication** — sign up / log in (flights & packages are gated behind login)
- **Booking Flow** — select class & passenger count, get a live price breakdown
- **Email Confirmations** — booking and package confirmations sent via [EmailJS](https://www.emailjs.com/)
- **3D Animated Background** — built with [Three.js](https://threejs.org/) and [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Client-side Routing** — custom lightweight routing using browser history (no router library)

## Tech Stack

| Layer     | Tech                                    |
| --------- | ---------------------------------------- |
| Frontend  | React 19, Vite                           |
| 3D/Visual | Three.js, @react-three/fiber             |
| Emails    | EmailJS                                  |
| Mock API  | json-server                              |
| Hosting   | Netlify                                  |

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/<your-username>/sky-wings.git
cd sky-wings
npm install
```

### Running Locally

The app uses [json-server](https://github.com/typicode/json-server) as a mock backend for user auth, so run both the API and the dev server:

```bash
# Terminal 1 — mock API (serves db.json on port 3001)
npm run server

# Terminal 2 — Vite dev server
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

### Other Scripts

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project Structure

```
src/
├── components/     # Reusable UI (Navbar, Footer, FlightCard, BookingModal, PackageModal, SearchFlights)
├── pages/          # Route-level pages (Home, FlightsPage, PackagesPage, AboutPage, Login, Signup)
├── data/           # Static data (airports, flights, popular routes)
├── services/       # Auth service (talks to json-server)
├── styles/         # Global/page styles
└── Floating3DBackground.jsx   # Three.js animated background
```

## Deployment

This project is deployed on **Netlify**: [https://skywingscom.netlify.app/](https://skywingscom.netlify.app/)

To deploy your own copy, connect the repo to Netlify with:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

> Note: the live demo uses static data/EmailJS for bookings — the `json-server` mock backend (`db.json`) is only for local development and isn't deployed.

## License

This project is for educational/portfolio purposes.
