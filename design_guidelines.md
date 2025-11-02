# Design Guidelines for Albi Yzo Portfolio Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from minimalist art gallery websites and museum portfolios, focusing on clean, elegant presentation that puts the artwork front and center. Think of high-end gallery websites that balance sophistication with accessibility.

## Core Design Principles
- **Gallery Aesthetic**: Clean margins and large spacing reminiscent of an art exhibition catalog
- **Content-First**: Artwork and text should breathe with generous whitespace
- **Timeless Elegance**: Professional, minimalist design that won't feel dated
- **Artist-Centric**: Design serves the art, not the other way around

## Typography Hierarchy

**Display/Titles**: Playfair Display or EB Garamond (serif)
- Hero title (artist name): 72px-96px, light weight
- Page headings: 48px-56px
- Section titles: 32px-40px
- Artwork titles: 24px-28px

**Body Text**: Lato or Inter (sans-serif)
- Primary text: 16px-18px, regular weight
- Secondary text: 14px-16px
- Captions/metadata: 12px-14px, light weight

**Line Height**: 1.6-1.8 for body text, 1.2-1.4 for headings

## Color Palette

- **Background**: #FFFFFF (pure white)
- **Primary Text**: #111111 (near black)
- **Accent Blue**: #B3C7E6 (soft, muted blue for highlights)
- **Accent Beige**: #E8E6D9 (light beige for section backgrounds)
- **Borders/Dividers**: rgba(17, 17, 17, 0.1) (subtle gray)

## Layout System

**Spacing Primitives**: Use consistent Tailwind units
- Micro spacing: 2, 4 (for tight elements)
- Standard spacing: 8, 12, 16 (for component padding)
- Section spacing: 20, 24, 32 (for page sections)
- Hero spacing: 40, 48 (for dramatic sections)

**Container Widths**:
- Maximum content width: max-w-7xl (1280px)
- Text-heavy sections: max-w-4xl (896px)
- Gallery grids: Full width with inner padding

**Grid System**:
- Desktop: 3-4 columns for artwork gallery
- Tablet: 2 columns
- Mobile: 1 column, full stack

## Component Library

### Navigation
- Fixed top navigation with subtle shadow on scroll
- Logo/Artist name on left, navigation links on right
- Clean underline hover effect on navigation links
- Mobile: Hamburger menu with slide-in drawer

### Hero Section (Home)
- Full viewport height (100vh)
- Large hero image with abstract gradient or artwork background
- Centered layout with artist name and subtitle
- Elegant fade-in animation on load
- Scroll indicator at bottom

### Artwork Cards (Portfolio)
- Clean white cards with subtle shadow
- Image placeholder with 4:3 or 3:4 aspect ratio
- Title, year, technique, and dimensions below image
- Hover: Gentle zoom effect (scale 1.05) with smooth transition
- Click: Opens lightbox viewer

### Lightbox Viewer
- Full-screen dark overlay (rgba(0, 0, 0, 0.95))
- Centered artwork image with max dimensions
- Close button (X) in top-right corner
- Navigation arrows for previous/next artwork
- Artwork details overlay at bottom
- Click outside image to close

### Exhibition Cards
- Timeline-style layout for chronological display
- Year badge on left side
- Title, location, and type (Personal/Collective) on right
- Alternating alignment for visual interest
- Subtle connector lines between cards

### Contact Form
- Clean, spacious form fields with generous padding
- Labels above inputs
- Subtle border focus states with accent blue
- Large textarea for message
- Prominent submit button
- Form is visual only (no functionality)

### Footer
- Dark background (#111111) with white text
- Artist name and copyright on left
- "Designed by EAI DEV" on right
- Minimal social media icon links
- Subtle top border separator

## Animations & Interactions

**Scroll Animations**: Fade-in effects as elements enter viewport
- Opacity: 0 → 1
- Transform: translateY(20px) → translateY(0)
- Duration: 0.6s ease-out

**Hover Effects**:
- Artwork cards: Scale 1.05, smooth transition
- Navigation links: Underline slide-in effect
- Buttons: Subtle brightness increase

**Page Transitions**: Smooth fade transitions between routes (0.3s)

**Performance**: Use CSS transforms and opacity for animations (GPU-accelerated)

## Images

**Hero Section Image**: 
- Full-width, full-height background image
- Abstract gradient or subtle artwork texture
- Semi-transparent overlay for text readability
- Lazy-loaded for performance

**Artwork Placeholders**: 
- Use `/images/placeholder.jpg` for all artwork images
- Maintain consistent aspect ratios within each series
- Blurred preview → sharp image load transition

**Profile Image**: 
- Circular or square portrait on Biography page
- 300x300px minimum, placed beside or above bio text

**Buttons on Images**: 
- Glassmorphism effect: Backdrop blur with semi-transparent background
- White text with subtle shadow for contrast
- Padding: px-8 py-4
- No custom hover states (rely on browser defaults)

## Page-Specific Guidelines

### Home Page
- Full-screen hero with "ALBI YZO" in large serif font
- Subtitle: "Visual Artist – Tirana, Albania"
- Quote section below hero with centered text and generous margins
- Background transitions from hero image to clean white

### Portfolio Page
- Section headers for each period with accent beige background
- Grid layout for artwork cards with consistent spacing
- Filter/sort options at top (visual only)
- Masonry grid option for varied artwork sizes

### Biography Page
- Two-column layout on desktop: Profile image left, bio text right
- Single column on mobile
- Artist statement in italicized blockquote
- Timeline of education and achievements

### Exhibitions Page
- Split into two sections: Personal and Collective
- Chronological order (newest first)
- Card-based layout with year prominently displayed
- Subtle animations on scroll

### Contact Page
- Two-column layout: Contact form left, info/map right
- Email and phone displayed prominently
- Social media icons with hover effects
- Optional: Embedded map placeholder (Google Maps iframe)

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2 columns, simplified nav)
- Desktop: > 1024px (full multi-column layouts)

## Accessibility
- High contrast ratios (WCAG AA minimum)
- Focus states visible on all interactive elements
- Semantic HTML structure
- Alt text for all images (describe artwork)
- Keyboard navigation support