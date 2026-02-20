# Dashboard Component Implementation Guide

This guide shows how to create the Admin and Affiliate dashboard components following the same pattern as the ExpertDashboard.

## File Structure for Admin Dashboard

```
src/components/dashboards/admin/
├── AdminDashboard.jsx          # Main component with routing
└── sections/
    ├── Overview.jsx            # 6 stat cards + recent activity
    ├── Users.jsx               # User management table
    ├── Offers.jsx              # All platform offers
    ├── Transactions.jsx        # Payment transactions
    ├── Commissions.jsx         # Commission tracking
    └── Payouts.jsx             # Payout management
```

## File Structure for Affiliate Dashboard

```
src/components/dashboards/affiliate/
├── AffiliateDashboard.jsx      # Main component with routing
└── sections/
    ├── Overview.jsx            # Dashboard stats
    ├── Referrals.jsx           # Referral tracking
    ├── Commissions.jsx         # Commission details
    ├── Payouts.jsx             # Payout history
    └── Tools.jsx               # Marketing tools (banners, links)
```

## Creating AdminDashboard

### Step 1: Create Main Component

**File: `src/components/dashboards/admin/AdminDashboard.jsx`**

Follow the exact pattern from ExpertDashboard:

```jsx
import React, { useState } from "react";
import { DashShell } from "../../common/DashShell";
import { adminData } from "../../../data/mockData";
import { Overview } from "./sections/Overview";
import { Users } from "./sections/Users";
// ... import other sections

export function AdminDashboard({ user, nav, logout, notify }) {
  const [active, setActive] = useState("overview");

  const navItems = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "users", label: "Users", icon: "👥" },
    { id: "offers", label: "Offers", icon: "💼" },
    { id: "transactions", label: "Transactions", icon: "💳" },
    { id: "commissions", label: "Commissions", icon: "💰" },
    { id: "payouts", label: "Payouts", icon: "🏦" },
  ];

  const renderPage = () => {
    switch (active) {
      case "overview":
        return <Overview user={user} adminData={adminData} notify={notify} />;
      case "users":
        return <Users user={user} adminData={adminData} />;
      // ... other cases
      default:
        return <Overview user={user} adminData={adminData} notify={notify} />;
    }
  };

  const Sidebar = () => (
    <div className="sidebar-nav">
      {/* Use the same sidebar structure as ExpertDashboard */}
    </div>
  );

  return (
    <DashShell
      sidebar={<Sidebar />}
      topbarTitle={
        navItems.find((i) => i.id === active)?.label || "Admin Dashboard"
      }
    >
      {renderPage()}
    </DashShell>
  );
}
```

### Step 2: Create Section Components

Create each section in `sections/` folder following the same pattern:

**`Overview.jsx`** - Show platform statistics

```jsx
// Stats: Total Users, Total Revenue, Active Experts, Commissions Paid
// Use grid-3 or grid-4 for stat cards
```

**`Users.jsx`** - Manage platform users

```jsx
// Table showing: Name, Email, Role, Status, Join Date, Actions button
// Add filter options for role type
```

**`Offers.jsx`** - Monitor all expert offers

```jsx
// List or table of: Expert Name, Offer Type, Price, Activity, Actions
// Show usage statistics
```

**`Transactions.jsx`** - Payment tracking

```jsx
// Table: Payment Date, Expert, Amount, Status, Payment Method, Invoice
// Add period filter and export button
```

**`Commissions.jsx`** - Commission management

```jsx
// Show commission breakdown per expert
// Commission rates and calculations
// Export commission reports
```

**`Payouts.jsx`** - Manage expert payouts

```jsx
// Table: Expert Name, Amount, Status, Date, Bank Details
// Actions: Approve, Reject, View Details
```

## Creating AffiliateDashboard

**File: `src/components/dashboards/affiliate/AffiliateDashboard.jsx`**

Similar structure with 5 nav items:

```jsx
const navItems = [
  { id: "overview", label: "Overview", icon: "📊" },
  { id: "referrals", label: "Referrals", icon: "🔗" },
  { id: "commissions", label: "Commissions", icon: "💰" },
  { id: "payouts", label: "Payouts", icon: "🏦" },
  { id: "tools", label: "Tools", icon: "🛠️" },
];
```

### Section Components for Affiliate:

**`Overview.jsx`**

```jsx
// Key stats: Total Referrals, Active, Commission Earned, Pending Payout
// Recent referrals activity feed
```

**`Referrals.jsx`**

```jsx
// Table: Expert Name, Status, Date Referred, Commission Rate, Earned
// Filter by status (pending/active/inactive)
```

**`Commissions.jsx`**

```jsx
// Commission breakdown and earnings chart
// Filter by time period
```

**`Payouts.jsx`**

```jsx
// Payout history table with amounts and dates
// Request payout button
```

**`Tools.jsx`**

```jsx
// Marketing assets: Banner images, Social media links
// Referral link with copy button
// Email templates
```

## Template: Generic Section Component

Use this template for creating any section:

```jsx
import React, { useState } from 'react';

export function SectionName({ user, [role]Data, notify }) {
  const [items] = useState([role]Data?.items || []);
  const [filter, setFilter] = useState('all');

  return (
    <div className="dash-content">
      {/* Header */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600' }}>Section Title</h2>
      </div>

      {/* Stats (optional) */}
      <div className="grid-2" style={{ gap: '20px', marginBottom: '30px' }}>
        <div className="stat-card">Stats here</div>
      </div>

      {/* Main Content - Card or Table */}
      <div className="card">
        {items.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <td>{item.field1}</td>
                  <td>{item.field2}</td>
                  <td>
                    <button>Action</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={{ padding: '60px 20px', textAlign: 'center', color: '#999' }}>
            No items found
          </div>
        )}
      </div>
    </div>
  );
}
```

## Key CSS Classes

For adminDashboard use class: `.sidebar-admin`  
For affiliate use class: `.sidebar-aff`

Available utility classes:

- `.stat-card` - Statistics cards
- `.table` / `.table-wrap` - Table styling
- `.card` - Card containers
- `.btn` / `.btn-pr` / `.btn-gr` - Button styles
- `.grid-2` / `.grid-3` / `.grid-4` - Grid layouts
- `.tag` / `.tag-gr` / `.tag-tl` - Badge styling

## Importing in App.jsx

Once created, update App.jsx:

```jsx
import { AdminDashboard } from "./components/dashboards/admin/AdminDashboard";
import { AffiliateDashboard } from "./components/dashboards/affiliate/AffiliateDashboard";

// Replace placeholder components
```

Then in the conditional rendering in App.jsx, the imports will automatically work.

## Mock Data Reference

Check `src/data/mockData.js` for:

- `adminData` object structure
- `affiliateData` object structure
- Available test data fields

## Best Practices

1. **Keep components simple** - One section per file
2. **Reuse CSS classes** - Use utility classes from utilities.css
3. **Pass data as props** - Don't access global state directly
4. **Use the notify function** - Call `notify()` for user feedback
5. **Consistent styling** - Follow the pattern from ExpertDashboard sections

## Progress Tracking

After creating each dashboard:

✅ AdminDashboard

- [ ] AdminDashboard.jsx main component
- [ ] sections/Overview.jsx
- [ ] sections/Users.jsx
- [ ] sections/Offers.jsx
- [ ] sections/Transactions.jsx
- [ ] sections/Commissions.jsx
- [ ] sections/Payouts.jsx
- [ ] Update App.jsx imports

✅ AffiliateDashboard

- [ ] AffiliateDashboard.jsx main component
- [ ] sections/Overview.jsx
- [ ] sections/Referrals.jsx
- [ ] sections/Commissions.jsx
- [ ] sections/Payouts.jsx
- [ ] sections/Tools.jsx
- [ ] Update App.jsx imports

Once completed, the app will be fully functional with all three dashboard roles implemented!
