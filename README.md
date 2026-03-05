# Personal Website

A clean and minimalist personal website built with Astro, React, and TypeScript.

## 🚀 Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Astro** - Web framework and build system
- **Tailwind CSS** - Styling
- **Iconify** - Icons (Simple Icons for brand icons)
- **Lucide React** - UI icons
- **Astro Content + MDX** - Blog content support
- **Oxlint + Oxfmt** - Linting and formatting

## 🛠️ Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## 📁 Project Structure

```
src/
├── App.tsx          # Main application component
├── components/      # Reusable UI components
│   └── ui/         # shadcn/ui components
├── lib/            # Utility functions
└── styles/         # CSS files
```

## ✨ Features

- Responsive design
- Dark theme with zinc color palette
- Social media links
- Clean, centered layout
- Easily configurable social links
- Commented project section (ready to uncomment when needed)

## 🎨 Customization

### Social Links

Update the `socialLinks` object in `src/App.tsx`:

```typescript
const socialLinks = {
  twitter: "your-twitter-url",
  github: "your-github-url",
  linkedin: "your-linkedin-url",
  email: "your-email@example.com",
};
```

### Adding Projects

Uncomment the projects section in `src/App.tsx` and the related imports to display your projects.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
