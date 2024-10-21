const express = require("express");
const session = require("express-session");
const app = express();
const port = 2080;

// Middleware to serve static files (CSS, JS)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // To parse form data

// Initialize session middleware
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session.isLoggedIn) {
    return next(); // Proceed to the next middleware/route
  } else {
    res.redirect("/login"); // Redirect to login if not authenticated
  }
}

// Routes
app.get("/login", (req, res) => {
  res.render("login"); // Render login page
});

app.get("/signup", (req, res) => {
  res.render("signup"); // Render signup page
});

// Handle login form submission
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Simple login logic (for demonstration purposes)
  if (email === "ishakomervelliwar@gmail.com" && password === "1234") {
    req.session.isLoggedIn = true; // Set session
    res.redirect("/"); // Redirect to home after login
  } else {
    res.send("Invalid login credentials"); // Handle invalid login
  }
});

// Handle signup form submission
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Implement registration logic here

  res.redirect("/login"); // After signup, redirect to login
});

// Protect the home route - user must be logged in
app.get("/", isAuthenticated, (req, res) => {
  res.render("index"); // Render the career guidance quiz page (home)
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
app.js;
