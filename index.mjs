import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const app = express();

// Simulate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views','pages'))

// Route to serve about.html when /about is accessed
app.get('/about', (req, res) => {
  res.render('about',{message:'fuck you'})
});

// (Optional) Keep the root path serving 404.html for demonstration,
// but in a real application, you'd likely serve index.html or a proper homepage at /
app.get('/', (req, res) => {
  res.render('index') // Or index.html in real app
});

app.get('/contact-me', (req, res) => {
  res.render('contact-me')
});

app.get('*', (req, res) => {
  res.render('404')
});

app.listen(5000, () => console.log("Server is running on port 5000"));