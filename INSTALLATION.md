# CV Writer - Installation Instructions

## 📋 Prerequisites

Before running the application, you need to install the new dependencies for Word document export.

## 🚀 Installation Steps

### 1. Fix PowerShell Execution Policy (if needed)

If you encounter PowerShell execution policy errors, run PowerShell as Administrator and execute:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 2. Install Dependencies

Navigate to the project directory and install the required packages:

```bash
cd "c:\Users\USER\Desktop\cv writer\cv-writer"
npm install
```

This will install:
- `docx` - For creating Word documents
- `file-saver` - For downloading files
- `@types/file-saver` - TypeScript types for file-saver

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## ✨ New Features

### Word Document Export
- Click the green "Word" button in the header to download your CV as a `.docx` file
- The Word document maintains the Nigerian CV format with proper styling
- All sections are included: Personal Data, Education, Experience, etc.

### Mobile-Friendly Interface
- **Hamburger Menu**: Tap the menu icon on mobile to open the sidebar
- **Responsive Layout**: Forms and preview stack vertically on mobile
- **Touch-Optimized**: All buttons and inputs have proper touch targets (min 44px)
- **Better Scaling**: CV preview automatically adjusts for mobile screens

## 📱 Mobile Features

- Collapsible sidebar drawer with overlay
- Auto-close sidebar after section selection
- Responsive padding and spacing
- Optimized zoom controls for small screens
- Touch-friendly interactions

## 🔧 Troubleshooting

### Cannot find module 'docx' or 'file-saver'
Run `npm install` to install the dependencies.

### PowerShell execution policy error
Follow step 1 above to fix the execution policy.

### Build errors
Try deleting `node_modules` and `package-lock.json`, then run `npm install` again.

## 📦 Deployment to Vercel

The app is ready for Vercel deployment. Make sure to:
1. Push the latest changes to GitHub
2. Vercel will automatically detect the Vite framework
3. No environment variables needed for basic functionality
4. Add `VITE_GEMINI_API_KEY` if using AI features

## 🎨 Templates Available

1. **Nigerian** (Default) - Nigerian CV format with green header line
2. Modern - Clean sidebar layout
3. Classic - Traditional serif design
4. Minimal - Whitespace-focused
5. Sidebar - Teal sidebar layout
6. Professional - Centered header design

Enjoy your mobile-friendly CV Writer! 🎉
