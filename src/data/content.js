// Edit everything here to make the site yours — no need to touch components.

export const profile = {
  name: 'Fobbs Rolfenson',
  email: 'rolfensonfobbs05@gmail.com',
  year: new Date().getFullYear(),
};

export const reelFrames = [
  { id: 'rf1',
    tag: '16:9 — BRAND FILM',
    image: '/assets/reelFrame1.jpg',},
  { id: 'rf2',
     tag: '9:16 — REEL',
     image: '/assets/reelFrame2.jpg' },
  { id: 'rf3',
    tag: '1:1 — CAMPAIGN',
    image: '/assets/reelFrame3.jpg' },
  { id: 'rf4',
    tag: '4:5 — PORTRAIT',
    image: '/assets/reelFrame4.jpg' },
  { id: 'rf5',
    tag: '16:9 — AD CUT',
    image: '/assets/reelFrame5.jpg' },
];

export const tracks = [
  {
    id: 'V1',
    name: 'Video Editing',
    desc: 'Reels, brand films, and ad cuts edited for retention — pacing, sound design, captions, and color grading handled end to end, from raw footage to publish-ready export.',
  },
  {
    id: 'V2',
    name: 'Photography',
    desc: 'Product, portrait, and campaign shoots composed and lit for the thumbnail, not just the frame — delivered edited and platform-ready.',
  },
  {
    id: 'V3',
    name: 'Graphic Design',
    desc: 'Social templates, ad creative, and brand assets that keep every post, story, and carousel on-message and instantly recognizable.',
  },
];

export const workItems = [
  {
    id: 'w1',
    category: 'VIDEO',
    size: 'tall',
    ratio: '9:16',
    media: { type: 'video', src: '/assets/video_1.mp4',  },
    title: 'Launch Reel — Aurea Skincare',
    client: 'Instagram / TikTok campaign',
    
  },
  {
    id: 'w2',
    category: 'DESIGN',
    ratio: '1:1',
    size: 'square',
    title: 'Logo Creative Set - Venah Organics',
    client: 'Venah Organics',
    media: { type: 'image', src: '/assets/venahDesign.jpg' }
  },
  {
    id: 'w3',
    category: 'PHOTO',
    ratio: '4:5',
    size: 'portrait',
    title: 'Billboard poster',
    client: 'Isaac & Co. — Outdoor campaign',
    media: { type: 'image', src: '/assets/image1.jpg' }
  },


  {
    id: 'w6',
    category: 'DESIGN',
    ratio: '9:16',
    size: 'square',
    title: 'Social Ad Creative — Mellcanedit Agency',
    client: 'Mellcanedit Agency',
    media: { type: 'image', src: '/assets/Logo.png' }
  },
];

export const stats = [
  { num: '2', label: 'YEARS IN THE CRAFT' },
  { num: '40+', label: 'PROJECTS DELIVERED' },
  { num: '3', label: 'DISCIPLINES, ONE WORKFLOW' },
  { num: '48HR', label: 'AVG. FIRST-CUT TURNAROUND' },
];

export const testimonials = [
  {
    id: 't1',
    text: 'Handed over messy raw footage and got back a reel that actually matched how we talk to customers. Fast, and no fifteen rounds of revisions.',
    initials: 'AM',
    avatarClass: 'ta1',
    name: 'Amara Musa',
    role: 'Founder, Aurea Skincare',
  },
  {
    id: 't2',
    text: 'The product shoot came back better than our mood board. Every image was ready to drop straight into the store — no extra editing on our end.',
    initials: 'DH',
    avatarClass: 'ta2',
    name: 'David Halden',
    role: 'Creative Director, Halden Studio',
  },
  {
    id: 't3',
    text: "We needed a month of ad creative in a week. It showed up on time, on-brand, and it's still our best-performing set to date.",
    initials: 'NR',
    avatarClass: 'ta3',
    name: 'Nia Reyes',
    role: 'Marketing Lead, Venah Organics',
  },
];
