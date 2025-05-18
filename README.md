# Trishna Sharma - Personal Portfolio

This is the repository for my personal portfolio website, showcasing my skills, projects, and experience as a Full-Stack Developer.

**Live Site:** [https://trishna-shil-mou.vercel.app/](https://trishna-shil-mou.vercel.app/)

## Features

*   **Responsive Design:** Adapts to various screen sizes for optimal viewing on desktop, tablet, and mobile devices.
*   **Dark/Light Mode:** Theme toggle for user preference.
*   **Interactive Sections:** Smooth animations and transitions for sections like Hero, Specialization, About Me, My Work, and Contact.
*   **Project Showcase:** Displays a curated list of projects with details available in a pop-up overlay.
*   **Dynamic Content Loading:** Content visibility aniamted on scroll.

## Technologies Used

*   **Frontend:**
    *   React
    *   Vite (Build Tool)
    *   Tailwind CSS (Utility-first CSS framework)
    *   Framer Motion (Animations)
    *   React Icons (Icons)
*   **Deployment:** Vercel

## Setup and Local Development

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd portfolio_trishna
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will typically start the application on `http://localhost:5173` (or another port if 5173 is busy).

4.  **Build for production:**
    ```bash
    npm run build
    ```

## Project Structure (Key Files/Folders)

```
portfolio_trishna/
├── public/                 # Static assets (favicon, etc.)
├── src/
│   ├── assets/             # Images, fonts, etc. used within components
│   ├── components/         # Reusable React components (Navbar, HeroSection, etc.)
│   ├── App.jsx             # Main application component, layout, routing (if any)
│   ├── main.jsx            # Entry point for the React application
│   ├── App.css             # Global custom CSS and Tailwind base/components/utilities
│   └── index.css           # Base Tailwind imports
├── index.html              # Main HTML entry file for Vite
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

---

Feel free to explore the code and reach out if you have any questions!
