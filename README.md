# Sourav Halder - Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing web development skills and projects.

## 🚀 Features

- **Modern Design** - Clean, professional layout with smooth animations
- **Responsive** - Mobile-first design that works on all devices
- **Animated Hero Section** - Dynamic typing effect with multiple developer titles
- **Smooth Scrolling** - Seamless navigation between sections
- **Glassmorphism UI** - Modern glass-like components with backdrop blur
- **Interactive Elements** - Hover animations and transitions
- **Contact Form** - Professional contact section with form validation
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Animations** - CSS-based smooth animations and transitions
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Navigation component
│   │   └── HeroSection.tsx     # Hero section with typing animation
│   ├── globals.css             # Global styles and custom animations
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main page with all sections
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Sections

### Hero Section
- Animated greeting and name
- Dynamic typing effect showing different developer roles
- Call-to-action buttons with smooth animations
- Floating code elements background

### About Section  
- Professional introduction
- Skills showcase with animated tags
- Experience highlights

### Skills Section
- Organized by categories (Frontend, Backend, Database)
- Modern card layout with glassmorphism effects

### Experience Section
- Professional timeline
- Technology stack highlights
- Detailed project descriptions

### Projects Section
- Portfolio showcase
- Interactive project cards
- Live demo and code links

### Contact Section
- Professional contact form
- Social media links
- Contact information

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sourav-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Edit the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom blue shades
  },
  dark: {
    // Your custom dark theme colors
  }
}
```

### Content
Update the following files to customize content:
- `app/page.tsx` - Main content sections
- `app/components/HeroSection.tsx` - Hero section text and titles
- `app/layout.tsx` - Meta tags and SEO information

### Animations
Custom animations are defined in:
- `tailwind.config.js` - Animation definitions
- `app/globals.css` - Custom CSS animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configurations:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

### Deployment
The project is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Sourav Halder**
- Email: sourav@example.com
- LinkedIn: [linkedin.com/in/souravhalder](https://linkedin.com/in/souravhalder)
- Portfolio: [your-portfolio-url.com](https://your-portfolio-url.com)

---

**Built with ❤️ using Next.js and Tailwind CSS** 