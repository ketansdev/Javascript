# 🚀 GitHub Profile Finder

A responsive web application that allows users to search and view GitHub profiles in real-time.

---

## 📌 Features

- 🔍 Search GitHub users by username  
- 🏠 Default home screen with preloaded profiles  
- 👤 Dedicated profile screen for searched users  
- 🔄 Dynamic UI switching between Home & Profile sections  
- ❌ Error handling:
  - Invalid username → "Profile Not Found"
  - Empty input → Input validation message  
- 🧹 Displays only **one profile at a time** (previous results cleared)  
- 📱 Fully responsive (Mobile + Desktop)

---

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- GitHub REST API  

---

## ⚙️ How It Works

1. User enters a GitHub username  
2. App sends a request to GitHub API  
3. If user exists → Profile is displayed  
4. If not → Error message is shown  
5. Previous profile is cleared before showing new result  

---

## 🧠 Key Concepts Used

- DOM Manipulation  
- Event Handling  
- API Fetching  
- Conditional Rendering  
- Basic State Management  
- Responsive Design  

## 📸 Screenshots

| Desktop View - Home Screen |Desktop View - Profile Screen| Mobile View - Home Screen|
|------------|-------------|-------------|
| ![Desktop](./assets/desktop-github-profile-checker.png) | ![Profile](./assets/desktop-github-profile-screen-checker.png) | ![Mobile](./assets/mobile-github-profile-checker.png) |


