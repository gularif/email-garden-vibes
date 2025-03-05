
export interface EmailType {
  id: string;
  from: {
    name: string;
    email: string;
    avatar?: string;
  };
  to: string[];
  subject: string;
  body: string;
  attachments: {
    name: string;
    size: string;
    type: string;
  }[];
  date: string;
  read: boolean;
  starred: boolean;
  labels: string[];
  folder: string;
}

export interface FolderType {
  id: string;
  name: string;
  icon: string;
  count?: number;
  color?: string;
}

export interface LabelType {
  id: string;
  name: string;
  color: string;
}

export const folders: FolderType[] = [
  { id: 'inbox', name: 'Inbox', icon: 'inbox', count: 12 },
  { id: 'sent', name: 'Sent', icon: 'send' },
  { id: 'drafts', name: 'Drafts', icon: 'file', count: 4 },
  { id: 'starred', name: 'Starred', icon: 'star' },
  { id: 'spam', name: 'Spam', icon: 'alert-circle' },
  { id: 'trash', name: 'Trash', icon: 'trash' }
];

export const labels: LabelType[] = [
  { id: 'personal', name: 'Personal', color: 'bg-blue-500' },
  { id: 'work', name: 'Work', color: 'bg-purple-500' },
  { id: 'finance', name: 'Finance', color: 'bg-green-500' },
  { id: 'social', name: 'Social', color: 'bg-yellow-500' },
  { id: 'updates', name: 'Updates', color: 'bg-red-500' }
];

export const mockEmails: EmailType[] = [
  {
    id: '1',
    from: {
      name: 'Apple',
      email: 'no-reply@apple.com',
      avatar: '/lovable-uploads/fda82447-4340-4ec4-9dba-fa474e53ed00.png'
    },
    to: ['john@example.com'],
    subject: 'Your receipt from Apple',
    body: `<p>Dear Customer,</p>
    <p>Thank you for your recent purchase at the Apple Store. Below is your receipt:</p>
    <p><strong>Order Number:</strong> W12345678</p>
    <p><strong>Date:</strong> August 15, 2023</p>
    <p><strong>Total:</strong> $1,299.00</p>
    <p>If you have any questions about your purchase, please contact Apple Support.</p>
    <p>Best regards,<br>Apple Team</p>`,
    attachments: [
      { name: 'Receipt_W12345678.pdf', size: '156 KB', type: 'pdf' }
    ],
    date: '2023-08-15T14:30:00',
    read: false,
    starred: true,
    labels: ['finance'],
    folder: 'inbox'
  },
  {
    id: '2',
    from: {
      name: 'Evelyn Martinez',
      email: 'evelyn@designco.com'
    },
    to: ['john@example.com'],
    subject: 'Updated design files for the new landing page',
    body: `<p>Hi there,</p>
    <p>I've attached the updated design files for our new landing page. I've made the changes we discussed in our meeting:</p>
    <ul>
      <li>Adjusted the color scheme to match our brand guidelines</li>
      <li>Improved the mobile layout for better responsiveness</li>
      <li>Added the new testimonial section</li>
    </ul>
    <p>Let me know if you need any clarification or have additional feedback.</p>
    <p>Best,<br>Evelyn</p>`,
    attachments: [
      { name: 'landing_page_v2.fig', size: '8.4 MB', type: 'fig' },
      { name: 'style_guide.pdf', size: '2.1 MB', type: 'pdf' }
    ],
    date: '2023-08-14T09:45:00',
    read: true,
    starred: false,
    labels: ['work'],
    folder: 'inbox'
  },
  {
    id: '3',
    from: {
      name: 'Netflix',
      email: 'info@netflix.com'
    },
    to: ['john@example.com'],
    subject: 'Your subscription renewal',
    body: `<p>Hello,</p>
    <p>Your Netflix subscription will renew on August 22, 2023. Your membership will be billed to your payment method on file.</p>
    <p>Plan Details: Standard Plan ($15.49/month)</p>
    <p>If you want to make changes to your account or plan, please visit your Account page.</p>
    <p>Thank you for being a loyal Netflix member.</p>
    <p>The Netflix Team</p>`,
    attachments: [],
    date: '2023-08-13T18:20:00',
    read: true,
    starred: false,
    labels: ['updates'],
    folder: 'inbox'
  },
  {
    id: '4',
    from: {
      name: 'GitHub',
      email: 'noreply@github.com'
    },
    to: ['john@example.com'],
    subject: '[GitHub] Security alert for your repository',
    body: `<p>We found a potential security vulnerability in one of the dependencies of your repository "my-awesome-project". We recommend upgrading to the latest version of the affected dependency.</p>
    <p>Vulnerability Details:</p>
    <ul>
      <li>Severity: High</li>
      <li>Package: lodash</li>
      <li>Current Version: 4.17.15</li>
      <li>Recommended Version: 4.17.21</li>
    </ul>
    <p>You can view and fix this alert by updating your dependency in your package.json file.</p>
    <p>Thank you,<br>GitHub Security</p>`,
    attachments: [],
    date: '2023-08-12T11:15:00',
    read: false,
    starred: true,
    labels: ['updates'],
    folder: 'inbox'
  },
  {
    id: '5',
    from: {
      name: 'Alex Thompson',
      email: 'alex.thompson@example.com'
    },
    to: ['john@example.com'],
    subject: 'Weekend hiking plans',
    body: `<p>Hey!</p>
    <p>Are you still up for hiking this weekend? The weather forecast looks great for Saturday. I was thinking we could try the Eagle Peak trail. It's about 8 miles round trip with some moderate elevation gain, but the views from the top are spectacular!</p>
    <p>I've attached a trail map. Let me know if you're interested, and we can coordinate details.</p>
    <p>Cheers,<br>Alex</p>`,
    attachments: [
      { name: 'eagle_peak_trail_map.jpg', size: '3.2 MB', type: 'jpg' }
    ],
    date: '2023-08-11T20:05:00',
    read: true,
    starred: false,
    labels: ['personal'],
    folder: 'inbox'
  },
  {
    id: '6',
    from: {
      name: 'Dropbox',
      email: 'no-reply@dropbox.com'
    },
    to: ['john@example.com'],
    subject: 'Your Dropbox space is almost full',
    body: `<p>Hi there,</p>
    <p>Your Dropbox Basic storage is 95% full. You're running out of space to add new files.</p>
    <p>Upgrade to Dropbox Plus to get 2TB of space, plus all these great features:</p>
    <ul>
      <li>2TB of storage (over 1,000x more than you have now)</li>
      <li>Smart Sync to save space on your hard drive</li>
      <li>Dropbox Passwords to store and sync passwords</li>
      <li>30-day history to restore deleted files</li>
    </ul>
    <p>Upgrade now to ensure uninterrupted use of your Dropbox account.</p>
    <p>The Dropbox Team</p>`,
    attachments: [],
    date: '2023-08-10T15:30:00',
    read: true,
    starred: false,
    labels: ['updates'],
    folder: 'inbox'
  },
  {
    id: '7',
    from: {
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com'
    },
    to: ['john@example.com'],
    subject: 'Meeting notes from today\'s brainstorming session',
    body: `<p>Hi team,</p>
    <p>I wanted to share my notes from our productive brainstorming session today. Here are the key points we discussed:</p>
    <ul>
      <li>Q3 marketing campaign focus: sustainability and eco-friendly initiatives</li>
      <li>New product feature prioritization: mobile app redesign, integration with third-party tools, and improved analytics dashboard</li>
      <li>Budget allocation for the upcoming quarter</li>
    </ul>
    <p>I've attached a more detailed summary for your reference. Please review and let me know if I missed anything important.</p>
    <p>Best regards,<br>Sarah</p>`,
    attachments: [
      { name: 'meeting_notes_08092023.docx', size: '245 KB', type: 'docx' }
    ],
    date: '2023-08-09T16:45:00',
    read: true,
    starred: true,
    labels: ['work'],
    folder: 'inbox'
  },
  {
    id: '8',
    from: {
      name: 'LinkedIn',
      email: 'messages-noreply@linkedin.com'
    },
    to: ['john@example.com'],
    subject: 'You have 3 new connection requests on LinkedIn',
    body: `<p>Hello John,</p>
    <p>You have 3 new connection requests waiting for your response on LinkedIn:</p>
    <ol>
      <li>Michael Chen - Senior Developer at Tech Solutions Inc.</li>
      <li>Emma Wilson - Product Manager at Innovative Designs</li>
      <li>David Rodriguez - Marketing Director at Global Brands</li>
    </ol>
    <p>Expanding your network can help you discover new opportunities and stay connected with professionals in your industry.</p>
    <p>Visit LinkedIn to respond to these requests.</p>
    <p>The LinkedIn Team</p>`,
    attachments: [],
    date: '2023-08-08T10:30:00',
    read: false,
    starred: false,
    labels: ['social'],
    folder: 'inbox'
  }
];
