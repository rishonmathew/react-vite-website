# Mortgage Broker Website

A full-stack React website built for a mortgage broker client. Built to practice modern web development with React, Tailwind, and Supabase.

**Note:** This is a sanitized version of the client project with business-specific branding removed for portfolio purposes.

## What It Does

A functional mortgage broker site with:
- Loan calculator with real-time calculations
- Booking system for consultations
- Contact forms
- Customer review submissions
- Secure admin dashboard to manage everything

## Tech Stack

**Frontend:**
- React + Vite
- React Router for navigation
- Tailwind CSS for styling
- Framer Motion for animations

**Backend:**
- Supabase (PostgreSQL database + auth)

**Deployed on:** Vercel

## Security Improvements

After the initial deployment, we discovered environment variables were accidentally exposed in the build output (CVE-related Vite issue). Had to:
- Move all sensitive keys to proper environment variables
- Implement Row Level Security (RLS) on all database tables
- Add proper authentication guards on admin routes
- Regenerate and rotate all API keys
- Set up proper .gitignore to prevent future leaks

Good learning experience on production security practices. Now the site properly separates public and protected data with database-level security policies.

## Setup

1. Clone the repo
   ```bash
   git clone https://github.com/rishonmathew/react-vite-website.git
   cd react-vite-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create `.env.local` with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_url
   VITE_SUPABASE_ANON_KEY=your_key
   ```

4. Run it
   ```bash
   npm run dev
   ```

## Database Setup

You need these tables in Supabase:

**bookings** - stores consultation requests  
**contacts** - stores contact form submissions  
**testimonials** - stores customer reviews

SQL schema is in the docs folder if needed.

## Features I'm Proud Of

- The loan calculator actually works with proper amortization formulas
- Admin dashboard with real-time stats
- Smooth page animations
- Fully responsive (works on mobile)
- Protected admin routes with authentication
- Proper security implementation after fixing the initial vulnerability

## What I Learned

This was my first full-stack project with a real database, and first time working with a client. Learned a lot about:
- React hooks and state management
- Working with APIs and databases
- Authentication and protected routes
- Deploying to production
- Responsive design
- Security best practices (the hard way)
- Client communication and requirements gathering

Started with basic functionality, then enhanced the UI and added features with some AI help to speed things up and meet client deadlines.

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`

## Deploy

Uses Vercel for deployment. Just connect the GitHub repo and it auto-deploys on push.

Don't forget to add the environment variables in Vercel settings.

## Admin Access

Go to `/login` to access the admin dashboard. You need to create a user in Supabase first.

---

Built by Rishon Mathew for a client project (2024-2025)