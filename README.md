
# RJ Bakery Frontend

React frontend for a bakery product catalogue. Browse products by category, search, sort, paginate, and rate items – all with a responsive mobile‑first design.

## Live Site
[https://rj-bakery.netlify.app](https://rj-bakery.netlify.app)

## Tech Stack
- React (Vite)
- React Router DOM
- Tailwind CSS
- Axios
- Framer Motion
- Deployed on Netlify

## Features
- Mobile‑first responsive design
- Category filtering
- Global search (debounced)
- Sorting (price, name, rating)
- Pagination (Next/Previous)
- Star rating system:
  - Click stars to rate
  - Average calculated on backend
  - Stars grey out after rating
  - Hover preview on desktop
  - SessionStorage prevents re‑rating
- Loading skeletons
- Custom mobile hamburger menu
- Image hover dimming + text overlay

## Local Setup

### Prerequisites
- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone git@github.com:sharu-19008/rj-bakery-frontend.git
   cd rj-bakery-frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file (see Environment Variables section)

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173)

## Environment Variables

Create a `.env` file in the project root:

```env
# Backend API URL (development)
VITE_API_URL=http://localhost:8000/api

# For production (uncomment and update with your live backend URL)
# VITE_API_URL=https://rj-bakery-backend.onrender.com/api
```

> **Note:** Never commit your `.env` file. The development URL works with the backend running locally on port 8000.

## Building for Production

```bash
npm run build
```
The output will be in the `dist/` folder. Deploy to Netlify, Render, or any static hosting service.

## Deployment

- Frontend hosted on Netlify (free tier)
- Environment variable `VITE_API_URL` set in Netlify dashboard

## Backend Repository

[https://github.com/sharu-19008/rj-bakery-backend](https://github.com/sharu-19008/rj-bakery-backend)

## License

MIT
