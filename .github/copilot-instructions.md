# Gorira Ecology Site
A Nuxt.js 4 educational web application about gorilla ecology and human-gorilla relationships, presented in Japanese. The site covers historical interactions, scientific discoveries, and cultural aspects of gorillas.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively
- Bootstrap, build, and test the repository:
  - Verify Node.js is available: `node --version` (requires v18+ for Nuxt 4)
  - Install dependencies: `npm install` -- takes 6-90 seconds depending on cache. NEVER CANCEL. Set timeout to 3+ minutes.
  - Build application: `npm run build` -- takes 8 seconds. Set timeout to 1+ minute.
- Development workflow:
  - Start development server: `npm run dev` -- serves on http://localhost:3001/gorira/
  - ALWAYS verify the application responds: `curl -I http://localhost:3001/gorira/` should return 200 OK
  - Access the application at http://localhost:3001/gorira/ (note the /gorira/ baseURL)
- Production workflow:
  - Build first: `npm run build`
  - Test with preview: `npm run preview` -- serves production build on http://localhost:3001/gorira/
  - Run production server directly: `node .output/server/index.mjs`
  - For PM2 deployment: `pm2 start ecosystem.config.cjs`

## Validation
- ALWAYS manually validate any changes by testing the application in a browser or with curl.
- ALWAYS test at least the homepage and one other page after making changes.
- Key validation scenarios:
  - Homepage loads correctly: `curl -s http://localhost:3001/gorira/ | grep "ゴリラの生態学芸サイト"`
  - Navigation works: test pages like /first-contact, /uma-era, /peace-treaty, /after-gorillas, /roots, /gorilla-gorilla-gorilla
  - Both development and production servers function correctly
  - All pages return 200 status codes and render Japanese content properly
- The application serves Japanese content about gorilla ecology and should display correctly in browsers with Japanese language support.
- All pages are server-side rendered (SSR) and should work without JavaScript enabled.

## Common Tasks
The following are validated commands and expected outputs:

### Repository Structure
```
ls -la [repo-root]
.
..
.git/
.gitignore
README.md
app.vue                  # Main application component
ecosystem.config.cjs     # PM2 configuration
nuxt.config.ts          # Nuxt configuration
package.json            # Dependencies and scripts
package-lock.json       # Locked dependency versions
pages/                  # Vue pages (8 total)
public/                 # Static assets
tsconfig.json          # TypeScript configuration
開発指示書              # Development instructions (Japanese)
```

### Available Scripts
```
npm run
build      # nuxt build - builds for production
dev        # PORT=3001 nuxt dev - development server
generate   # nuxt generate - static site generation
preview    # PORT=3001 nuxt preview - preview production build
postinstall # nuxt prepare - generates types (runs automatically)
```

### Key Configuration Details
- **Port**: 3001 (configured in package.json scripts and nuxt.config.ts)
- **Base URL**: /gorira/ (configured in nuxt.config.ts)
- **TypeScript**: Enabled with strict configuration
- **SSR**: Enabled (ssr: true in nuxt.config.ts)
- **Node Version**: Requires v18+ (tested with v20.19.4)
- **Dependencies**: Minimal Nuxt 4 setup with Vue 3 and vue-router

### Page Structure
The application contains these pages:
- `/` - Homepage with navigation and gorilla facts
- `/first-contact` - Human-gorilla first contact history
- `/uma-era` - Era when gorillas were feared as UMA (Unidentified Mysterious Animals)
- `/peace-treaty` - Peace treaty between humans and gorillas
- `/after-gorillas` - Post-treaty gorilla developments
- `/roots` - Human and gorilla evolutionary roots
- `/gorilla-gorilla-gorilla` - About Gorilla gorilla gorilla species

### Build Output Validation
After `npm run build`, expect to see:
- `.output/` directory created
- Server chunks in `.output/server/`
- Client assets in `.output/public/`
- Total build size approximately 1.97 MB (498 kB gzip)
- Success message: "You can preview this build using `node .output/server/index.mjs`"

### Development Server Validation
After `npm run dev`, expect to see:
- Message: "Local: http://localhost:3001/gorira/"
- DevTools available with Shift + Alt + D
- Vite client and server build completion messages
- Rapid hot module replacement for development

### Production Server Validation
- Preview mode: `npm run preview` shows preview mode banner
- Direct server: `node .output/server/index.mjs` shows "Listening on http://[::1]:3001/gorira"
- PM2 mode: `pm2 start ecosystem.config.cjs` runs app named "B"

## Troubleshooting
- If build fails, ensure Node.js version is 18 or higher
- If server doesn't respond on port 3001, check if port is already in use
- If Japanese characters don't display correctly, ensure your terminal/browser supports UTF-8
- If pages return 404, remember the base URL is /gorira/ not root /
- Missing dependencies: run `npm install` to ensure all packages are installed
- TypeScript errors: run `npm run postinstall` to regenerate type definitions

## Development Notes
- No linting or testing framework is currently configured
- Application uses Vue 3 Composition API with `<script setup>` syntax
- Styling is done with scoped CSS in each Vue component
- Content is primarily in Japanese with some English technical terms
- PM2 configuration is set up for production deployment
- Build artifacts are gitignored (.output/, .nuxt/, dist/, node_modules/)