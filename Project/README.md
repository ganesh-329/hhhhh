# Quick Lister

A micro job service platform where users can find and post small, local jobs on an interactive map. 100% frontend, built with HTML, CSS, and vanilla JavaScript.

## Features
- **Landing Page:** Welcome, branding, and authentication modals.
- **Authentication:** Login/Sign Up with dummy logic (no backend).
- **Dashboard:**
  - Interactive map (Leaflet + OpenStreetMap) with job markers.
  - Job list panel with filters and search.
  - Post a job (adds to local job list and map).
- **Profile Page:** User info, posted jobs, applied jobs (dummy data), edit profile.
- **AI Assistant:** Rule-based chatbot for job tips, search help, and FAQs.
- **Responsive Design:** Mobile and desktop friendly, modern UI.
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation.
- **Persistence:** All data stored in JS variables and/or browser localStorage.

## Setup & Usage
1. **Clone or Download** this repository.
2. **Open `index.html` in your browser.**
   - No build step or server required.
3. **Explore:**
   - Use the landing page to log in or sign up (dummy logic).
   - After login, use the dashboard to view/post jobs on the map.
   - Try the AI assistant (robot button) for tips and help.
   - Visit the profile page to see/edit user info and jobs.

## Tech Stack
- HTML5, CSS3 (Flexbox/Grid, media queries)
- Vanilla JavaScript (modular, no frameworks)
- [Leaflet.js](https://leafletjs.com/) + [OpenStreetMap](https://www.openstreetmap.org/) for maps
- [Font Awesome](https://fontawesome.com/) for icons

## File Structure
```
/css         # Stylesheets
/js          # JavaScript modules
/assets      # Images, icons, etc.
index.html   # Landing page
/dashboard.html # Main app after login
/profile.html   # User profile page
```

## Notes
- **No backend/server:** All logic is frontend-only. Data is not persistent across browsers/devices unless using localStorage (future stretch).
- **Dummy authentication:** Any login/signup will "succeed" and redirect to dashboard.
- **Job data:** Dummy jobs are preloaded; new jobs are added in-session.
- **Accessibility:** ARIA labels, keyboard navigation, and color contrast considered.

## Credits
- Map: [Leaflet.js](https://leafletjs.com/), [OpenStreetMap](https://www.openstreetmap.org/)
- Icons: [Font Awesome](https://fontawesome.com/)

---
Enjoy using Quick Lister! 