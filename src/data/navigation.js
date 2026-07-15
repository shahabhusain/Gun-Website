export const NAV_ITEMS = [
  {
    label: 'FIREARMS',
    key: 'firearms',
    href: '/firearms',
    mega: {
      columns: [
        {
          heading: 'PISTOLS',
          links: [
            { label: 'P365 Series', href: '/firearms/pistols' },
            { label: 'P320 Series', href: '/firearms/pistols' },
            { label: 'P226 Series', href: '/firearms/pistols' },
            { label: '1911', href: '/firearms/pistols' },
            { label: 'View All Pistols', href: '/firearms/pistols' },
          ],
        },
        {
          heading: 'RIFLES',
          links: [
            { label: 'SIG MCX', href: '/firearms/rifles' },
            { label: 'SIG MCX-SPEAR LT', href: '/product/mcx-spear-lt' },
            { label: 'SIG MPX', href: '/product/sig-mpx' },
            { label: 'CROSS', href: '/product/cross-sawtooth' },
            { label: 'View All Rifles', href: '/firearms/rifles' },
          ],
        },
        {
          heading: 'SHOTGUNS & AIRGUNS',
          links: [
            { label: 'Shotguns', href: '/firearms/shotguns' },
            { label: 'Airguns', href: '/firearms/airguns' },
            { label: 'View All Firearms', href: '/firearms' },
          ],
        },
      ],
    },
  },
  {
    label: 'AMMUNITION',
    key: 'ammunition',
    href: '/ammunition',
    mega: {
      columns: [
        {
          heading: 'AMMUNITION',
          links: [
            { label: 'Handgun Ammunition', href: '/ammunition' },
            { label: 'Rifle Ammunition', href: '/ammunition' },
            { label: 'Shotgun Shells', href: '/ammunition' },
            { label: 'View All Ammunition', href: '/ammunition' },
          ],
        },
      ],
    },
  },
  {
    label: 'ELECTRO-OPTICS',
    key: 'optics',
    href: '/optics',
    mega: {
      columns: [
        {
          heading: 'ELECTRO-OPTICS',
          links: [
            { label: 'Red Dot Sights', href: '/optics' },
            { label: 'Scopes', href: '/optics' },
            { label: 'Binoculars', href: '/product/zulu6-binocular' },
            { label: 'Weapon Lights', href: '/product/foxtrot-edc' },
            { label: 'View All Optics', href: '/optics' },
          ],
        },
      ],
    },
  },
  {
    label: 'SUPPRESSORS',
    key: 'suppressors',
    href: '/suppressors',
    mega: {
      columns: [
        {
          heading: 'SUPPRESSORS',
          links: [
            { label: 'Rifle Suppressors', href: '/suppressors' },
            { label: 'Pistol Suppressors', href: '/suppressors' },
            { label: 'View All Suppressors', href: '/suppressors' },
          ],
        },
      ],
    },
  },
  { label: 'BUILD YOUR OWN', key: 'byo', href: '/build-your-own' },
]

export const FOOTER_LINKS = {
  products: {
    title: 'Products',
    links: [
      { label: 'Firearms', href: '/firearms' },
      { label: 'Ammunition', href: '/ammunition' },
      { label: 'Electro-Optics', href: '/optics' },
      { label: 'Suppressors', href: '/suppressors' },
      { label: 'Shop All', href: '/shop' },
      { label: 'Gun Equipment', href: '/shop?cat=gear' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Customer Service', href: '/about' },
      { label: 'Product Registration', href: '/about' },
      { label: 'Warranty Information', href: '/about' },
      { label: 'Safety & Recall Notices', href: '/about' },
      { label: 'Dealer Locator', href: '/dealer-locator' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About SIG SAUER', href: '/about' },
      { label: 'SIG SAUER Academy', href: '/about' },
      { label: 'Careers', href: '/about' },
      { label: 'Law Enforcement', href: '/about' },
      { label: 'Military', href: '/about' },
    ],
  },
  connect: {
    title: 'Connect',
    links: [
      { label: 'Promotions', href: '/shop' },
      { label: 'Email Sign Up', href: '/' },
      { label: 'Contact Us', href: '/about' },
      { label: 'Shopping Cart', href: '/cart' },
    ],
  },
}
