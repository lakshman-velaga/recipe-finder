# 🍽️ Recipe Finder

A simple recipe search app built with React and Vite. Type a dish name, see matching meals, and open any recipe to view its details.

🔗 **Live Demo:** [https://YOUR-VERCEL-LINK](https://YOUR-VERCEL-LINK)

## ✨ Features
- Search recipes by meal name
- Recipe cards with image and name
- Recipe details in a popup modal
- Loading indicator while data is fetched
- Handles empty results and errors without crashing
- Responsive layout for mobile and desktop

## 🛠️ Built With
- React
- Vite
- JavaScript (ES6+)
- CSS
- [TheMealDB API](https://www.themealdb.com/api.php)

## 📸 Screenshot
![Recipe Finder Screenshot](./screenshot.png)

## 🚀 Run It Locally
```bash
# 1. Clone the repo
git clone https://github.com/lakshman-velaga/recipe-finder.git

# 2. Go to the project folder
cd recipe-finder

# 3. Install packages
npm install

# 4. Start the app
npm run dev
```
Then open `http://localhost:5173` in your browser.

## 📁 Project Structure
```
src/
├── Components/   # Navbar, SearchBar, RecipeCard, RecipeModal, Loader
├── Pages/        # Home page
└── Utils/        # API helper (fetchRecipes)
```

## 📚 What I Learned
- Fetching data from a public API with `fetch` and `async/await`
- Managing state with React hooks
- Splitting a UI into reusable components
- Handling loading and error states
- Deploying a React app on Vercel

## 🔮 Future Improvements
- Save favourite recipes
- Filter by category or ingredient

## 👨‍💻 Author
**Velaga Lakshman**
[LinkedIn](https://linkedin.com/in/velaga-lakshman) | [GitHub](https://github.com/lakshman-velaga)
