# 🌐 JavaScript API DashConnect

## ✍️ Author
E. Ermine

---

## 📖 Introduction
**JavaScript API DashConnect** is a multi-feature web application that integrates several public APIs into a single interactive dashboard. Built using **HTML, CSS, and vanilla JavaScript**, this project demonstrates real-world API consumption, dynamic DOM manipulation, and user-driven interactions.

Users can generate random images, fetch live data, search external platforms, and retrieve curated content — all from one responsive interface.

---

## ✨ Features

- 🐶 Random Dog Image Generator (Dog API) :contentReference[oaicite:0]{index=0}  
- 🐱 Random Cat Image Generator (Cataas API) :contentReference[oaicite:1]{index=1}  
- ☀️ Live Weather Data Display (Open-Meteo API) :contentReference[oaicite:2]{index=2}  
- 💱 Currency Converter (Exchange Rate API) :contentReference[oaicite:3]{index=3}  
- 🎬 Trending Movies List (TMDB API) :contentReference[oaicite:4]{index=4}  
- 🧑‍💻 GitHub User Search (GitHub API) :contentReference[oaicite:5]{index=5}  
- 🤣 Random Joke Generator (Geek Jokes API) :contentReference[oaicite:6]{index=6}  
- 📚 Book Suggestions by Topic (Open Library API) :contentReference[oaicite:7]{index=7}  

---

## 🧰 Technologies Used

- **HTML5** – Structure and layout :contentReference[oaicite:8]{index=8}  
- **CSS3** – Styling, grid layout, responsive design :contentReference[oaicite:9]{index=9}  
- **JavaScript (ES6)** – API calls, async/await, DOM manipulation :contentReference[oaicite:10]{index=10}  

---

## Project Structure

- 📁 api-dashboard
│── index.html # Main UI structure
│── style.css # Styling and layout
│── script.js # API logic and interactivity


---

## 🚀 Installation

1. Clone the repository:
Bash
git clone https://github.com/your-username/api-dashboard.git

2. Navigate into the project folder.
cd api-dashboard

3. Open index.html index in your browser.

---

▶️ Usage

- Click buttons to fetch data from APIs
- Enter input where required:
- GitHub username search
- Book topic search
- Currency conversion fields
- Results dynamically display within each section

---

🧠 Key JavaScript Concepts Used
- fetch() API for HTTP requests
- async/await for asynchronous operations
- DOM manipulation (createElement, appendChild, innerHTML)
- Event listeners (addEventListener)
- Error handling with try/catch
- Conditional rendering based on API responses

---

🎨 Styling & UI Design
- Responsive CSS Grid layout for modular sections
- Clean card-based interface
- Hover effects for buttons
- Mobile-friendly scaling using auto-fit and minmax()
- Custom typography using Google Fonts

---

⚠️ Known Issues / Improvements
- Weather API uses static coordinates (can be improved with user location)
- No loading indicators for API calls
- Limited error messaging for some APIs
- API key for TMDB is exposed (should be secured in production)

---

🔮 Future Improvements
- Add loading spinners for better UX
- Implement user geolocation for weather data
- Enhance styling with animations or transitions
- Add API caching for performance
- Convert to React-based application
- Secure API keys using environment variables
