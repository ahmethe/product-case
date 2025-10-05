# Product Case

A full-stack web application developed based on the provided design.  
Users can filter products by **price** and **popularity**, and prices are dynamically calculated from the **real-time gold price** via an external API.

---

## Technologies Used
- **Frontend:** React + Vite  
- **Backend:** Node.js (Serverless on Vercel)  
- **Hosting:** Vercel (Automatic HTTPS)  
- **External API:** [GoldAPI.io](https://www.goldapi.io) for real-time gold price  

---

## Features Implemented
- **Dynamic gold price integration** — product prices are calculated using live gold data  
- **Filter system** — users can filter products by:
  - Minimum / Maximum price (integer values)
  - Minimum popularity (one decimal precision)
- **Fallback mechanism** — when the API limit is reached, a static gold price is used  
- **Serverless backend** — `/api/products` endpoint deployed on Vercel  
- **Responsive frontend** — modern and clean UI built with React + Vite  
- **Real-time filtering** — instant data updates without page reload  

---

## 🧠 Project Structure
product-case/
┣ api/ # Backend route (Node.js)
┃ ┣ data/products.json
┃ ┗ products.js
┣ product-frontend/ # React + Vite frontend
┣ package.json
┗ README.md

---

## Live Demo
**Frontend + API (HTTPS):**  
[https://product-case.vercel.app](https://product-case.vercel.app)

**Backend Endpoint:**  
[https://product-case.vercel.app/api/products](https://product-case.vercel.app/api/products)

---

## Run Locally
# Clone the repository
git clone https://github.com/ahmethe/product-case

# Install backend + frontend dependencies
npm install
cd product-frontend
npm install

# Start backend locally
npm run start:backend

# Start frontend
npm run dev
