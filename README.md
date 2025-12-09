!IMPORTANT


This project was reviewed and updated in response to recent discussions around CVE-2025-55182 (“React2Shell”), a critical vulnerability affecting React Server Components (RSC) and frameworks that use the React Flight protocol (e.g., Next.js App Router, Turbopack, and react-server-dom-* packages).

This website is not affected by the vulnerability, as it is built using a client-side React + Vite SPA architecture with no React Server Components, no server-side rendering (SSR), and no Flight protocol usage.
However, as a cybersecurity student following best practices, I still applied the following safety measures:

1. React Updated to Patched Version

React and React DOM were upgraded to their latest patched releases to ensure no vulnerable versions remain in the dependency tree.

2. Dependency Audit

npm audit fix was run and all vulnerabilities were resolved, resulting in a clean dependency set with 0 known security issues.

3. Secret Key Rotation & Cleanup

During early development, environment variables were accidentally committed.
These were immediately revoked, replaced, and removed from version control.
A full history rewrite was performed to ensure no API keys exist in any commit.
A .gitignore file now properly excludes .env and other sensitive configurations.

4. Build & Config Hardening

The Vite configuration was cleaned to remove undefined environment references that could impact routing or build stability. The build now operates with a minimal, safe configuration.

5. Static Deployment Architecture

Because the project is deployed as a static frontend (no server-side execution), it has no attack surface for code execution vulnerabilities such as React2Shell.


**Asthi Mortgage Group – Website Build Summary**

Check out the website at: (https://my-repository-3x5y.vercel.app/)


This project is a modern mortgage broker website I designed and developed for a client, “Asthi Mortgage Group.” The goal was to create a clean, trustworthy, and professional online presence that makes it easy for clients to understand the services, calculate home-loan estimates, and book appointments.


Planning & Design

Before writing any code, I planned the site structure and overall look. The client shared examples like Amma Care and IdealLoanz, so I focused on building a similar modern layout using React and Tailwind.

For branding, we created a unique AMG logo and picked a colour palette using Coolors.co.
Final palette:

  - #48297A (main purple)

  - #111218 (dark background)

  - #E9F1F7 (light accent)

These colours helped give the site a premium, finance-focused vibe.

What I Built

The website includes:

   - A custom navigation bar with the AMG logo and quick links

  - A clean hero section introducing the brand

  - A services section explaining loan options

  - A loan calculator (borrowing power + repayment estimate)

  - A booking form for clients to request appointments

  - A responsive layout that works on desktop and mobile

  - Everything was designed to look minimal, smooth, and easy to read.

Tech Used

I built the site using:

  - React + Vite for fast development

  - Tailwind CSS for styling

  - Custom components for modularity

  - Vercel for deployment preview

  - AI (chatgpt), for debugging, tidying code and general assistance
  

I also learned to set up Tailwind’s newer PostCSS configuration, since Tailwind 4 updated how it works.

Execution

The build process was:

  1. Setting up the project with React + Vite

  2. Installing Tailwind and configuring the theme with our custom colours

  3. Building reusable components (Navbar, Hero, Services, Calculator, Booking Form)

  4. Making everything responsive

  5. Testing the UI and adjusting spacing/colours

  6. Deploying the preview version so the client can review it before connecting a domain

This project helped me practice frontend structure, branding consistency, and real-world client communication and refine my javascript skills.
