export const caseStudiesData = {
  uyircare: {
    title: 'UyirCare',
    subtitle: 'Blood Donation Mobile App',
    year: '2025',
    type: 'UX/UI Design • Mobile App',
    heroImage: '/img/uyircare.png',
    role: 'Lead UX/UI Designer',
    platform: 'iOS & Android (Mobile)',
    timeline: '4 Months (Winter 2025)',
    overview: 'UyirCare (உயிர் Care) is a Tamil Nadu–focused life-saving blood donation platform designed to connect patients, voluntary donors, and emergency coordinators in real time. The name "Uyir" means "Life" in Tamil, representing the core value of fast, secure blood matchmaking. In critical medical emergencies, finding rare blood types can take hours of calling manual lists or messaging unverified social media groups. UyirCare solves this with localized matching, donor privacy safeguards, and an approachable interface designed for diverse age groups.',
    
    problem: 'Finding voluntary blood donors in Tamil Nadu during emergencies is highly fragmented. Families rely on messaging apps, word of mouth, or outdated paper logs, which introduces critical delays. Donors are also hesitant due to privacy concerns (unwanted calls) and lack of clear eligibility instructions.',
    
    painPoints: [
      {
        title: 'Emergency Delays',
        description: 'Searching for blood donors through chaotic group messages takes average response times of 3 to 6 hours, which can be fatal.'
      },
      {
        title: 'Privacy Vulnerabilities',
        description: 'Publicly posting phone numbers on social media leads to harassment, spam, and unverified broker interactions.'
      },
      {
        title: 'Eligibility Confusion',
        description: 'Donors lack simple tools to know if they are eligible to donate (e.g., gap period since last donation, health conditions).'
      }
    ],
    
    audience: [
      {
        name: 'Emergency Seekers',
        role: 'Patient Relatives',
        need: 'Need to broadcast a verified blood request and find matching active donors within a 15km radius immediately.'
      },
      {
        name: 'Voluntary Donors',
        role: 'College Students & Professionals',
        need: 'Want to donate safely without sharing private contact info publicly, and need reminders when eligible.'
      }
    ],
    
    existingVsNew: {
      metricTitle: 'Time to Find a Match',
      existingValue: 80, // percentage or mins
      existingLabel: 'Manual Outreach (3.5 Hours)',
      newValue: 15,
      newLabel: 'UyirCare Matches (15 Mins)',
      chartDescription: 'UyirCare matches requests to verified local donors within minutes, avoiding public broadcasts.'
    },
    
    process: [
      {
        phase: '1. Empathy & Research',
        details: 'Surveyed 150 college students and interviewed 10 hospital emergency coordinators. Found that trust and speed were the two massive roadblocks.'
      },
      {
        phase: '2. Anonymous Safeguards',
        details: 'Designed a proxy-calling and in-app chat framework to keep donors completely anonymous, preventing privacy leaks.'
      },
      {
        phase: '3. Accessible UI',
        details: 'Crafted warm, welcoming layouts with large typography and dual-language (Tamil & English) support to facilitate navigation for elderly users.'
      }
    ],
    
    steps: [
      {
        stepNo: 'Step 01',
        title: 'Frictionless Registration & Health Eligibility',
        description: 'Users easily sign up and complete a 4-step eligibility quiz. If eligible, they are added to the donor pool; if not, the system displays a clear countdown timer showing when they can donate next.',
        image: '/img/uyircare.png'
      },
      {
        stepNo: 'Step 02',
        title: 'SOS Emergency Blood Request Broadcast',
        description: 'Patients or relatives enter hospital details, blood group, units, and urgency. The system triggers a location-based notification to verified matching donors within 15km without exposing the requester’s number.',
        image: '/img/uyircare.png'
      },
      {
        stepNo: 'Step 03',
        title: 'Real-time Match Confirmation & Chat',
        description: 'Once a donor accepts, the requester is notified. They can securely chat or call within the app to coordinate hospital logistics. Clear donor cards verify blood type credibility.',
        image: '/img/uyircare.png'
      }
    ],
    
    usability: [
      {
        question: 'What did users struggle with during initial testing?',
        answer: 'Older family members found it hard to navigate the maps and read small text prompts in English during stressful emergency situations.'
      },
      {
        question: 'How did the design adapt to these findings?',
        answer: 'We added dual-language localized Tamil translation toggles, enlarged button target tap zones to 48px, and designed a single-tap SOS call button.'
      }
    ],
    
    outcomes: [
      'Over 90% positive usability rating from volunteer testers in Tamil Nadu.',
      'Average matchmaking time reduced from 3+ hours to under 15 minutes in mock emergencies.',
      '100% phone number protection for registered voluntary donors via proxy communication routing.'
    ]
  },
  
  viveha: {
    title: 'Viveha',
    subtitle: 'Billing and Shop Management Application',
    year: '2026',
    type: 'UX/UI Design • Branding • Graphic Design',
    heroImage: '/img/viveha.png',
    role: 'Lead Designer & Brand Strategist',
    platform: 'Desktop/Web Tablet POS Platform',
    timeline: '3 Months (Spring 2026)',
    overview: 'Viveha is a premium billing and retail shop management platform designed to streamline daily business operations for modern small and medium-sized stores. Inspired by the Sanskrit word "Viveha", representing trust, connection, and reliability, the brand reimagines South Indian traditional retail reliability through an ultra-clean, minimal, and premium digital interface. The project includes a complete brand identity system (logo, typography, colour palette) alongside an offline-first POS interface that handles fast barcode scanning, stock tracking, and sales analytics.',
    
    problem: 'Small and medium retailers in traditional markets face slow checkout queues and complex software interfaces. Existing legacy POS systems are cluttered, require intensive training, fail to show clear inventory alerts, and have poor visual aesthetics that don’t align with modern, premium retail branding.',
    
    painPoints: [
      {
        title: 'Friction-Heavy POS',
        description: 'Cashiers spend unnecessary time clicking through multi-layered menus, resulting in long customer wait times.'
      },
      {
        title: 'Inventory Blindspots',
        description: 'Shop managers are unaware of low stock levels until items run out entirely, leading to sales leakage.'
      },
      {
        title: 'Fragmented Analytics',
        description: 'Understanding daily profit margins and product performance requires manual exports and complex spreadsheet math.'
      }
    ],
    
    audience: [
      {
        name: 'Store Cashiers',
        role: 'Frontline Staff',
        need: 'Need to process 50+ item orders quickly, apply discounts, and generate digital/print invoices in under a minute.'
      },
      {
        name: 'Shop Owners',
        role: 'Business Admins',
        need: 'Need real-time visual dashboards showing profit margins, top-selling items, and automatic low-stock alerts.'
      }
    ],
    
    existingVsNew: {
      metricTitle: 'Checkout Queue Time (per customer)',
      existingValue: 90,
      existingLabel: 'Legacy POS Checkout (90 Seconds)',
      newValue: 30,
      newLabel: 'Viveha Accelerated Flow (30 Seconds)',
      chartDescription: 'Viveha speeds up transactions by integrating global keyboard shortcuts and barcode auto-focus.'
    },
    
    process: [
      {
        phase: '1. Brand Architecture',
        details: 'Developed a refined logo combining traditional motif forms with sleek geometric lines, utilizing a warm sand and rich copper-bronze theme.'
      },
      {
        phase: '2. Keyboard-First Layouts',
        details: 'Designed the checkout UI to be completely operable via standard keyboard hotkeys, reducing cashiers dependency on mouse movements.'
      },
      {
        phase: '3. Proactive Stock Alerts',
        details: 'Integrated a low-stock alert dashboard card featuring a color-coded priority view (Red: Critical, Orange: Low).'
      }
    ],
    
    steps: [
      {
        stepNo: 'Step 01',
        title: 'Keyboard-Driven Rapid Billing Screen',
        description: 'A clean, split-screen POS layout. Cashiers can barcode-scan items or search using keyboard hotkeys. Items populate in a visual ticket side drawer with automated tax calculations.',
        image: '/img/viveha.png'
      },
      {
        stepNo: 'Step 02',
        title: 'Unified checkout & Multi-Payment Drawer',
        description: 'Pressing `F10` triggers the payment drawer. The interface dynamically splits cash, card, and UPI options with quick-cash change recommendations, minimizing human mathematical error.',
        image: '/img/viveha branding.png'
      },
      {
        stepNo: 'Step 03',
        title: 'Real-Time Inventory and Sales Analytics',
        description: 'An elegant dashboard showing high-level visual charts, low-stock notifications, peak transaction hours, and profit trends in custom, high-fidelity widgets.',
        image: '/img/viveha poster.png'
      }
    ],
    
    usability: [
      {
        question: 'What did cashiers find difficult during early test sessions?',
        answer: 'During peak hours, searching for non-barcoded items (e.g., loose grocery items) was slow and halted the checkout queue.'
      },
      {
        question: 'How was the UI optimized for this scenario?',
        answer: 'We created an "F2 Quick Panel" featuring a grid of customizable fast-select buttons for the top 12 non-barcoded items with large, distinct visual cards.'
      }
    ],
    
    outcomes: [
      'Checkout processing speed increased by 65% in active pilot test stores.',
      'Inventory leakage reduced by 30% due to automated critical low-stock alert triggers.',
      'Highly praised premium brand aesthetic that elevates the shop’s professional profile.'
    ]
  },
  
  nexvora: {
    title: 'Nexvora',
    subtitle: 'Enterprise Platform UI Design',
    year: '2026',
    type: 'UX/UI Design • Web Platform',
    heroImage: '/img/nexvora.png',
    role: 'Product Designer, UX Researcher & Developer',
    platform: 'SaaS Web Platform (Desktop)',
    timeline: 'On going',
    overview: 'Nexvora is an advanced enterprise workflow and SaaS digital platform designed to streamline corporate team pipelines, role permissions, and asset tracking. Developed for complex business environments, the design concentrates heavily on layout structure, reducing cognitive load, and visual hierarchy. Featuring a modular dashboard, custom dark and light theme palettes, and a customized 80+ component design system, Nexvora transforms cluttered spreadsheet-based company pipelines into a fluid, responsive collaborative workspace.',
    
    problem: 'Enterprise tools are notoriously cluttered, slow, and hard to learn. Team members face cognitive exhaustion due to excessive visual density, scattered toolsets, and rigid interfaces that do not adapt to different employee roles.',
    
    painPoints: [
      {
        title: 'Cognitive Overload',
        description: 'Dashboards display massive grids of raw data with no visual hierarchy, making it hard to identify key priorities.'
      },
      {
        title: 'Tool Fragmentation',
        description: 'Teams jump between three or four separate apps to coordinate work, review approvals, and track assets.'
      },
      {
        title: 'Rigid Interface Options',
        description: 'Administrative tasks require the same heavy views as manager reviews, leading to workspace clutter.'
      }
    ],
    
    audience: [
      {
        name: 'Project Managers',
        role: 'Team Lead',
        need: 'Need to track tasks, review pending item approvals, and delegate team tasks in a clean high-level view.'
      },
      {
        name: 'Operations Team',
        role: 'System Staff',
        need: 'Need fast, filterable data tables, quick-update status drawers, and responsive bulk-edit workflows.'
      }
    ],
    
    existingVsNew: {
      metricTitle: 'Daily Administrative Time Spend',
      existingValue: 120,
      existingLabel: 'Legacy Workflows (120 Mins)',
      newValue: 45,
      newLabel: 'Nexvora Workspaces (45 Mins)',
      chartDescription: 'Nexvora reduces weekly task overhead through modular action cards and responsive status drawers.'
    },
    
    process: [
      {
        phase: '1. Modular Design System',
        details: 'Engineered an 80+ component Figma design library with strict grid guidelines, guaranteeing pixel-perfect spacing across complex screens.'
      },
      {
        phase: '2. Dynamic Dashboards',
        details: 'Designed custom modular widget structures that can be easily repositioned, letting users curate their ideal task view.'
      },
      {
        phase: '3. Accessibility Optimization',
        details: 'Tested color contrast ratios to pass WCAG 2.1 AA standards, crafting beautiful and comfortable light and dark theme options.'
      }
    ],
    
    steps: [
      {
        stepNo: 'Step 01',
        title: 'Personalized Modular Dashboard',
        description: 'Upon login, Nexvora displays key action widgets, task charts, and low-priority notices tailored strictly to the user’s corporate role, ensuring zero clutter.',
        image: '/img/nexvora.png'
      },
      {
        stepNo: 'Step 02',
        title: 'Frictionless Pipeline & Task Board',
        description: 'A kanban board featuring fluid hover states, color-coded task priorities, and a dynamic slider card that allows quick details inspection without page reloading.',
        image: '/img/nexvora.png'
      },
      {
        stepNo: 'Step 03',
        title: 'Advanced Search & Data Operations',
        description: 'A powerful database view offering instant column filtering, multi-item batch editing, and custom CSV/PDF reports export in two simple clicks.',
        image: '/img/nexvora.png'
      }
    ],
    
    usability: [
      {
        question: 'What did corporate team leads note during user testing?',
        answer: 'Users felt that searching for files or comments across dense task threads took too many clicks and felt slow.'
      },
      {
        question: 'How did the design solve this problem?',
        answer: 'We implemented a global Command Bar (`Cmd+K`) that gives immediate search access to all files, tasks, team members, and actions in one unified modal.'
      }
    ],
    
    outcomes: [
      '40% faster task-completion rates recorded in corporate test cycles.',
      'Reduced initial team onboarding training times from 2 weeks to 3 days.',
      'Overwhelmingly positive reviews for the clean, eye-catching glassmorphism design layouts.'
    ]
  }
};
