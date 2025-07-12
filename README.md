# 🌐 Translator App | Powered by RapidAPI & JavaScript

A sleek, modern, and lightweight **text translation app** built with vanilla JavaScript, using the **Google Translate API via RapidAPI**.  
Translate any text instantly into multiple languages with real-time feedback, error handling, and a stunning UI.

---


## 🖼️ Preview

![Signature Pad Screenshot](./Screenshot%20Translate.png)  

---

## 💡 Features

- 🌍 Auto language detection (`from: "auto"`)
- 🔄 Translate text to any supported language dynamically
- ⏳ Real-time translation status & loading indicator with pulse animation
- ⚠️ User-friendly error messages and input validation
- 🎨 Beautiful **glassmorphism-inspired UI** with smooth gradients and shadows
- ✨ Interactive buttons with hover scale and glow effects
- 🔐 Secure API key usage with RapidAPI proxy
- 🧹 Clean, minimalistic interface with responsive design
- 🧑‍💻 Built using plain JavaScript & Fetch API — no frameworks required!

---

## 🎨 UI & Design Highlights

- **Glassmorphism style card** with subtle frosted glass effect via `backdrop-filter`  
- Gradient background with dark teal hues for modern look  
- Warm accent colors (`#ffb703`, `#ff416c`, `#ff4b2b`) for buttons and headings  
- Smooth input & textarea styling for great user experience  
- Loading indicator animation to visually show translation in progress  
- Responsive layout centered vertically and horizontally on the viewport  

---

## 📁 Project Structure

```
translator-App/
├── index.html 
├── style.css 
├── app.js 

```

---
## 🛠️ Setup & Usage

1. Clone the repo:

```bash
   git clone https://github.com/MahdiJDS/translator-App.git
   cd smart-text-translator

```

2. Open index.html in your browser (or serve via live server).

3. Important: Replace the RapidAPI key in app.js with your own for uninterrupted service.

---

## 🔑 How to Get and Use Your RapidAPI Key

To use this translator app, you need an API key from RapidAPI to access the Google Translate API. Here's how:

### Step 1: Create a RapidAPI Account

- Go to [RapidAPI](https://rapidapi.com/) and sign up for a free account.

### Step 2: Subscribe to Google Translate API

- After logging in, search for **"Google Translate"** in the RapidAPI marketplace.
- Find the API named **"Google Translate"** or the one you're using (e.g. `google-translate113`).
- Subscribe to the free or paid plan depending on your usage needs.

### Step 3: Get Your API Key

- Go to the **Endpoints** tab of the API.
- Find the **x-rapidapi-key** header value shown in your dashboard.
- Copy this key — this is your secret API key.

### Step 4: Use the API Key in Your Project

- Open your `app.js` file.
- Replace the existing API key string with your copied key:

```js
headers: {
  "Content-Type": "application/json",
  "x-rapidapi-host": "google-translate113.p.rapidapi.com",
  "x-rapidapi-key": "YOUR_API_KEY_HERE"
},
```
---

### ⚠️ Important Security Tips

- Never expose your API key publicly in a production environment!

- Consider using a backend proxy to keep your key secure.

- For development or demo purposes, using the key client-side is acceptable but be cautious.

- Monitor your API usage and quota on RapidAPI dashboard to avoid unexpected charges.

---


## 📄 License

This project is licensed under the MIT License.

---

## 🧑‍💻 Developer

- [MahdiJDS on GitHub](https://github.com/MahdiJDS)  
- Email: mahdijahed56@gmail.com  

---
