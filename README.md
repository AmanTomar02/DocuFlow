# DocuFlow

A modern React application for uploading and managing documents including images and Excel files.

## Features

- 📷 **Image Upload** - Upload car images, sales/insurance images, and purchase invoice images
- 📊 **Excel Upload** - Upload sales data and insurance data Excel files
- 🖱️ **Drag & Drop** - Drag and drop files directly onto upload areas
- 👁️ **File Preview** - Preview uploaded images and view file details
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices
- ☁️ **Google Drive Integration** - Ready for Google Drive API setup

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## Installation

Follow these steps to set up and run the project:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd DocuFlow
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Open in Browser

Once the server starts, open your browser and navigate to:

```
http://localhost:5173
```

## Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload |
| `npm run build`   | Build the project for production             |
| `npm run preview` | Preview the production build locally         |

## Project Structure

```
DocuFlow/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── ImageUpload.jsx
│   │   ├── ImageUpload.css
│   │   ├── ExcelUpload.jsx
│   │   ├── ExcelUpload.css
│   │   ├── UploadCard.jsx
│   │   └── UploadCard.css
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS3** - Styling with CSS variables and flexbox/grid

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License



_________________________________________________________
## How to run Project in your local Host.


# 1. Clone the repo
git clone <repository-url>
cd DocuFlow

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open http://localhost:5173