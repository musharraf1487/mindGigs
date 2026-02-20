/* Mock Data */
export const mockUsers = {
  expert: {
    email: 'expert@mindgigs.com',
    pass: 'demo',
    role: 'expert',
    name: 'Priya Sharma',
    handle: 'priya',
  },
  admin: {
    email: 'admin@mindgigs.com',
    pass: 'demo',
    role: 'admin',
    name: 'Admin User',
  },
  affiliate: {
    email: 'aff@mindgigs.com',
    pass: 'demo',
    role: 'affiliate',
    name: 'Zaid Malik',
  },
};

export const expertData = {
  stats: [
    { label: 'Total Earnings', val: '$8,340', ch: '↑ +24%', color: 'gr' },
    { label: 'Monthly Revenue', val: '$3,840', ch: '↑ MRR', color: 'gr' },
    { label: 'Active Subscriptions', val: '24', ch: '↑ +3 this week', color: 'tl' },
    { label: 'Upcoming Sessions', val: '8', ch: 'Next: Today 3PM', color: 'gd' },
  ],
  revenueChartBars: [38, 52, 44, 68, 72, 58, 80, 88, 76, 94, 85, 100],
  revenueMonths: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
  revenueMix: [
    { label: 'Sessions', percentage: 46, color: '#4ecb87' },
    { label: 'Subscriptions', percentage: 35, color: '#1ab8a0' },
    { label: 'Affiliates', percentage: 19, color: '#e8c547' },
  ],
  activities: [
    {
      icon: '🗓️',
      color: '#d4f5e4',
      text: 'Aisha Khan booked a 60-min session',
      time: '2 min ago',
      val: '+$250',
    },
    {
      icon: '♻️',
      color: 'rgba(26,184,160,.1)',
      text: 'Marcus Lee subscribed to Monthly Mentorship',
      time: '1 hr ago',
      val: '+$199/mo',
    },
    {
      icon: '📦',
      color: 'rgba(232,197,71,.12)',
      text: 'Sara M. purchased Pitch Deck Template',
      time: '3 hr ago',
      val: '+$79',
    },
    {
      icon: '🔗',
      color: '#d4f5e4',
      text: "Affiliate commission from Zaid's referral",
      time: '5 hr ago',
      val: '+$42',
    },
  ],
  offers: {
    sessions: [
      { title: '60-min Strategy Deep Dive', price: '$250', bookings: 34, active: true },
      { title: '15-min Quick Call', price: '$40', bookings: 89, active: true },
      { title: 'Custom Advisory Package', price: '$800', bookings: 5, active: false },
    ],
    subscriptions: [
      { title: 'Monthly Mentorship Club', price: '$199/mo', subscribers: 24, active: true },
    ],
    products: [
      { title: 'Pitch Deck Template', price: '$79', sales: 142, active: true },
      { title: 'SaaS Metrics Spreadsheet', price: '$49', sales: 88, active: true },
    ],
  },
  bookings: [
    { client: 'Aisha Khan', type: '60-min Strategy', date: 'Today, 3:00 PM', status: 'confirmed' },
    { client: 'Marcus Lee', type: '15-min Quick Call', date: 'Tomorrow, 10:00 AM', status: 'confirmed' },
    { client: 'Sara Müller', type: '60-min Deep Dive', date: 'Thu, 2:00 PM', status: 'pending' },
    { client: 'James R.', type: 'Custom Advisory', date: 'Mar 2, 11:00 AM', status: 'completed' },
    { client: 'Nia Okafor', type: '15-min Quick Call', date: 'Feb 28', status: 'cancelled' },
  ],
  subscriptions: [
    { name: 'Aisha K.', plan: 'Monthly Mentorship', since: 'Jan 15', renewal: 'Mar 15', status: 'active' },
    { name: 'Marcus L.', plan: 'Monthly Mentorship', since: 'Feb 1', renewal: 'Mar 1', status: 'active' },
    { name: 'Sara M.', plan: 'Monthly Mentorship', since: 'Dec 10', renewal: 'Mar 10', status: 'active' },
    { name: 'James R.', plan: 'Monthly Mentorship', since: 'Feb 20', renewal: '—', status: 'cancelled' },
  ],
};

export const affiliateData = {
  totalEarnings: '$4,280',
  totalCommissions: '$2,840',
  pendingPayout: '$340',
  referrals: [
    { name: 'Priya Sharma', status: 'active', joined: 'Jan 15', earnings: '$520', referralLink: 'zaid/ref/priya' },
    { name: 'Amara Diop', status: 'active', joined: 'Jan 28', earnings: '$480', referralLink: 'zaid/ref/amara' },
    { name: 'Marcus Lee', status: 'active', joined: 'Feb 5', earnings: '$320', referralLink: 'zaid/ref/marcus' },
    { name: 'Sara Müller', status: 'pending', joined: 'Feb 12', earnings: '$0', referralLink: 'zaid/ref/sara' },
  ],
  campaigns: [
    { name: 'Email Outreach', status: 'active', clicks: 340, conversions: 8, roi: '245%' },
    { name: 'LinkedIn Posts', status: 'active', clicks: 520, conversions: 12, roi: '180%' },
    { name: 'Webinar Partners', status: 'paused', clicks: 180, conversions: 3, roi: '95%' },
  ],
  activities: [
    { icon: '✅', text: 'Priya Sharma was approved', time: '2 min ago', val: '+$520' },
    { icon: '📣', text: 'Your campaign "LinkedIn Posts" has 520 clicks', time: '1 hr ago', val: '' },
    { icon: '🎉', text: 'Amara Diop booked a session with Priya', time: '3 hr ago', val: '+$84' },
    { icon: '💰', text: 'Commission credited to your account', time: '5 hr ago', val: '+$250' },
  ],
  payouts: [
    { date: 'Feb 10, 2025', amount: '$500', status: 'completed', method: 'Bank Transfer' },
    { date: 'Jan 25, 2025', amount: '$750', status: 'completed', method: 'Bank Transfer' },
    { date: 'Jan 10, 2025', amount: '$420', status: 'completed', method: 'PayPal' },
  ],
};

export const adminData = {
  stats: [
    { label: 'Total Users', val: '10,248', ch: '↑ +124 this week' },
    { label: 'Platform Revenue', val: '$48,920', ch: '↑ +18% MoM' },
    { label: 'Active Experts', val: '1,840', ch: '↑ +42 new' },
    { label: 'Total Transactions', val: '4,382', ch: '↑ This month' },
  ],
  chartBars: [30, 45, 38, 62, 70, 55, 77, 85, 78, 92, 88, 100],
  keyMetrics: [
    { label: 'CAC', value: '$4.20', color: 'gr' },
    { label: 'LTV', value: '$284', color: 'gr' },
    { label: 'Churn', value: '4.2%', color: 'tl' },
    { label: 'MRR', value: '$48,920', color: 'gr' },
  ],
  users: [
    { name: 'Priya Sharma', email: 'priya@example.com', role: 'expert', status: 'active', joined: 'Jan 15' },
    { name: 'Zaid Malik', email: 'zaid@example.com', role: 'affiliate', status: 'active', joined: 'Feb 1' },
    { name: 'Amara Diop', email: 'amara@example.com', role: 'expert', status: 'active', joined: 'Jan 28' },
    { name: 'James R.', email: 'james@example.com', role: 'expert', status: 'suspended', joined: 'Dec 10' },
    { name: 'Nia O.', email: 'nia@example.com', role: 'visitor', status: 'active', joined: 'Feb 18' },
  ],
  recentTransactions: [
    { id: 'TXN001', user: 'Priya Sharma', type: 'Session Booking', amount: '$250', date: 'Feb 18', status: 'completed' },
    { id: 'TXN002', user: 'Aisha Khan', type: 'Subscription', amount: '$199', date: 'Feb 17', status: 'completed' },
    { id: 'TXN003', user: 'Marcus Lee', type: 'Product Purchase', amount: '$79', date: 'Feb 16', status: 'completed' },
    { id: 'TXN004', user: 'Zaid Malik', type: 'Affiliate Payout', amount: '$500', date: 'Feb 15', status: 'completed' },
    { id: 'TXN005', user: 'Sara M.', type: 'Session Booking', amount: '$250', date: 'Feb 14', status: 'pending' },
  ],
  platformMetrics: [
    { label: 'Avg Session Price', value: '$210', trend: '↑ +8%' },
    { label: 'Avg Subscription', value: '$156', trend: '↑ +12%' },
    { label: 'Platform Fee %', value: '20%', trend: '—' },
    { label: 'System Uptime', value: '99.8%', trend: '✓' },
  ],
};
