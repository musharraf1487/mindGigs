/* Mock Data */

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
    { label: 'Sessions', percentage: 46, color: '#547792' },
    { label: 'Subscriptions', percentage: 35, color: '#1ab8a0' },
    { label: 'Affiliates', percentage: 19, color: '#e8c547' },
  ],
  activities: [
    {
      icon: '🗓️',
      color: '#ffeed9',
      text: 'Aisha Khan booked a 60-min session',
      time: '2 min ago',
      val: '+$250',
    },
    {
      icon: '♻️',
      color: 'rgba(191,201,209,.1)',
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
      color: '#ffeed9',
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

export const mockExperts = [
  {
    id: 1,
    name: 'Priya Sharma',
    handle: 'priya',
    image: 'https://i.pravatar.cc/400?img=47',
    category: 'Business',
    tags: ['Product Strategy', 'SaaS', 'Fundraising'],
    bio: 'Product strategist with 10+ years in SaaS. Ex-YC founder. I help early-stage startups nail their go-to-market.',
    rating: 4.9,
    sessions: 87,
    startingPrice: 40,
    verified: true,
    subscriptions: [
      {
        id: 'sub-adv',
        title: 'Strategic Advisory Access',
        price: '$199/mo',
        desc: 'For serious professionals who want personalized guidance.',
        features: [
          "Small-group advisory calls",
          "Personalized growth roadmap",
          "Direct expert feedback",
          "Quarterly performance review"
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Marcus Lee',
    handle: 'marcus',
    image: 'https://i.pravatar.cc/400?img=11',
    category: 'Tech',
    tags: ['Full-Stack', 'React', 'System Design'],
    bio: 'Senior engineer at FAANG with 12 years experience. Helping developers level up in system design and career growth.',
    rating: 4.8,
    sessions: 134,
    startingPrice: 75,
    verified: true,
    subscriptions: [
      {
        id: 'sub-pro',
        title: 'AI Pro Network',
        price: '$99/mo',
        desc: 'Advanced networking and live workshops for AI practitioners',
        features: [
          "Monthly Live Strategy Workshop",
          "Case Study Breakdowns",
          "Direct Expert Feedback",
          "Priority Q&A"
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Dr. Amara Diop',
    handle: 'amara',
    image: 'https://i.pravatar.cc/400?img=40',
    category: 'Health',
    tags: ['Nutrition', 'Wellness', 'Mental Health'],
    bio: 'Licensed physician and wellness coach. Specialising in holistic health, burnout recovery, and performance nutrition.',
    rating: 5.0,
    sessions: 62,
    startingPrice: 120,
    verified: true,
  },
  {
    id: 4,
    name: 'James Rivera',
    handle: 'jrivera',
    image: 'https://i.pravatar.cc/400?img=33',
    category: 'Law',
    tags: ['Startup Law', 'IP', 'Contracts'],
    bio: 'Corporate attorney with 8 years specialising in startup legal needs: term sheets, IP protection, and employment law.',
    rating: 4.7,
    sessions: 48,
    startingPrice: 200,
    verified: true,
  },
  {
    id: 5,
    name: 'Sofia Mendez',
    handle: 'sofia',
    image: 'https://i.pravatar.cc/400?img=44',
    category: 'Coaching',
    tags: ['Executive Coaching', 'Leadership', 'Career'],
    bio: 'ICF-certified executive coach. Helping ambitious professionals unlock their leadership potential and land dream roles.',
    rating: 4.9,
    sessions: 210,
    startingPrice: 90,
    verified: true,
  },
  {
    id: 6,
    name: 'Kai Tanaka',
    handle: 'kai',
    image: 'https://i.pravatar.cc/400?img=12',
    category: 'Finance',
    tags: ['Investing', 'DeFi', 'Financial Planning'],
    bio: 'Former hedge fund analyst turned independent financial educator. Making complex finance simple and actionable.',
    rating: 4.8,
    sessions: 95,
    startingPrice: 60,
    verified: false,
  },
  {
    id: 7,
    name: 'Nadia Osei',
    handle: 'nadia',
    image: 'https://i.pravatar.cc/400?img=35',
    category: 'Creative',
    tags: ['Brand Design', 'UI/UX', 'Figma'],
    bio: 'Award-winning brand designer with clients across 20 countries. From logo to full brand identity systems.',
    rating: 4.9,
    sessions: 158,
    startingPrice: 55,
    verified: true,
  },
  {
    id: 8,
    name: 'Ahmed Hassan',
    handle: 'ahmed',
    image: 'https://i.pravatar.cc/400?img=59',
    category: 'Tech',
    tags: ['AI/ML', 'Python', 'LLMs'],
    bio: 'AI researcher and builder. Helping teams ship real AI products — not just demos. Prompt engineering to MLOps.',
    rating: 4.7,
    sessions: 73,
    startingPrice: 100,
    verified: true,
    subscriptions: [
      {
        id: 'sub-ins',
        title: 'AI Insiders Community',
        price: '$49/mo',
        desc: 'Weekly WhatsApp group with exclusive AI insights and networking',
        features: [
          "Weekly AI insights and trends",
          "Private community access",
          "Monthly Q&A sessions",
          "Exclusive templates and resources"
        ]
      }
    ]
  },
];

export const clientData = {
  stats: [
    { label: 'Sessions Booked', val: '12', ch: '↑ +2 this month', color: 'gr' },
    { label: 'Active Subscriptions', val: '2', ch: 'Renew Mar 15', color: 'tl' },
    { label: 'Products Owned', val: '5', ch: 'Last: Feb 18', color: 'gd' },
    { label: 'Total Spent', val: '$1,240', ch: '↑ Lifetime value', color: 'gr' },
  ],
  bookings: [
    { expert: 'Priya Sharma', type: '60-min Strategy Deep Dive', date: 'Mar 2, 3:00 PM', status: 'upcoming' },
    { expert: 'Marcus Lee', type: 'System Design Review', date: 'Feb 28, 10:00 AM', status: 'upcoming' },
    { expert: 'Sofia Mendez', type: 'Executive Coaching', date: 'Feb 20, 2:00 PM', status: 'completed' },
    { expert: 'Dr. Amara Diop', type: 'Wellness Consultation', date: 'Feb 14', status: 'completed' },
    { expert: 'Priya Sharma', type: '15-min Quick Call', date: 'Feb 5', status: 'completed' },
  ],
  subscriptions: [
    { expert: 'Priya Sharma', plan: 'Monthly Mentorship Club', since: 'Jan 15', renewal: 'Mar 15', price: '$199/mo', status: 'active' },
    { expert: 'Sofia Mendez', plan: 'Leadership Inner Circle', since: 'Feb 1', renewal: 'Mar 1', price: '$149/mo', status: 'active' },
  ],
  purchases: [
    { title: 'Pitch Deck Template', expert: 'Priya Sharma', price: '$79', date: 'Feb 18', icon: '📄' },
    { title: 'SaaS Metrics Dashboard', expert: 'Priya Sharma', price: '$49', date: 'Jan 30', icon: '📊' },
    { title: 'AI Prompt Engineering Guide', expert: 'Ahmed Hassan', price: '$59', date: 'Jan 22', icon: '🤖' },
    { title: 'Brand Identity Workbook', expert: 'Nadia Osei', price: '$39', date: 'Jan 10', icon: '🎨' },
    { title: 'Investment Starter Pack', expert: 'Kai Tanaka', price: '$45', date: 'Dec 28', icon: '💰' },
  ],
  activities: [
    { icon: '🗓️', text: 'Session with Priya Sharma confirmed for Mar 2', time: '1 hr ago' },
    { icon: '📦', text: 'You downloaded "Pitch Deck Template"', time: '3 hr ago' },
    { icon: '♻️', text: 'Monthly Mentorship Club renewed successfully', time: 'Feb 15' },
    { icon: '⭐', text: 'You left a review for Sofia Mendez', time: 'Feb 20' },
  ],
};
