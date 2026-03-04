# Quick Start Guide

## Setup & Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. **Open in browser**
   - Automatically opens at `http://localhost:5173`
   - Or manually navigate to `http://localhost:5173`

## Project Structure Overview

- **`src/components/pages/`** - Full page components (Landing, Login, Signup, etc.)
- **`src/components/dashboards/`** - Dashboard components (Expert, Admin, Affiliate)
- **`src/components/common/`** - Reusable components (Notifications, DashShell)
- **`src/styles/`** - CSS organized by purpose (5 files)
- **`src/data/`** - Mock data and design tokens

## Testing the App

### Available Test Users

Use these credentials to login:

**Expert User:**

- Username: `expert_user`
- Password: `password123`

**Admin User:**

- Username: `admin_user`
- Password: `password123`

**Affiliate User:**

- Username: `affiliate_user`
- Password: `password123`

### Testing Flow

1. **Homepage** - Start at `/` (landing page)
2. **Signup** - Create new account (fills with test data)
3. **Login** - Select role and enter credentials
4. **Onboarding** - Complete 3-step wizard
5. **Dashboard** - Access role-specific dashboard

## Production Build

```bash
npm run build
```

Output files will be in the `dist/` directory.

## Completed Components

✅ **Fully Implemented:**

- LandingPage with all sections and navigation
- LoginPage with role selection and validation
- SignupPage with form fields
- OnboardingPage (3-step wizard)
- PublicProfile (expert profile showcase)
- BookingFlow (calendar + checkout)
- ExpertDashboard with 8 sections:
  - Overview (stats and recent activity)
  - Offers (create and manage)
  - Bookings (calendar and list)
  - Subscriptions (recurring revenue)
  - Products (digital product sales)
  - Affiliate (referral program)
  - Earnings (payouts and transactions)
  - Settings (profile and preferences)

🔄 **In Progress / Placeholder:**

- AdminDashboard (structure ready)
- AffiliateDashboard (structure ready)

## Adding Navigation

The `nav()` function is available in most components:

```jsx
nav("home"); // → Go to landing page
nav("login"); // → Go to login
nav("expert-dashboard"); // → Go to expert dashboard
nav("public-profile"); // → Go to expert profile
nav("booking"); // → Go to booking flow
```

## Styling System

All CSS classes are documented in `/src/styles/`:

- **Colors**: Use CSS custom properties like `var(--gd)`, `var(--purp)`, etc.
- **Buttons**: `.btn`, `.btn-pr`, `.btn-gr`, `.btn-gh`, `.btn-teal`, `.btn-gold`, `.btn-red`
- **Cards**: `.card`, `.card-dark`
- **Tags**: `.tag`, `.tag-gr`, `.tag-tl`, `.tag-gh`
- **Layout**: `.flex`, `.flex-col`, `.grid-2`, `.grid-3`, `.grid-4`

## Key Files

| File             | Purpose                          |
| ---------------- | -------------------------------- |
| `App.jsx`        | Main router and state management |
| `index.jsx`      | React entry point                |
| `index.html`     | HTML template                    |
| `vite.config.js` | Build configuration              |
| `package.json`   | Dependencies and scripts         |

## Next Steps

1. **Customize mock data** in `src/data/mockData.js`
2. **Update design tokens** in `src/data/designTokens.js`
3. **Create Admin/Affiliate dashboards** following `ExpertDashboard` pattern
4. **Connect to real APIs** (replace mock data with API calls)
5. **Add authentication** (JWT, sessions, etc.)
6. **Deploy** (Vercel, Netlify, AWS, etc.)

## Troubleshooting

**Port 5173 already in use?**

```bash
npm run dev -- --port 3000
```

**Module not found errors?**

- Run `npm install` again
- Check import paths are correct
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`

**Styles not loading?**

- Check that all CSS files are imported in `App.jsx`
- Verify CSS class names match component usage
- Check browser console for CSS errors

## Support

Review the `README.md` for full documentation of the project structure and migration guide.
