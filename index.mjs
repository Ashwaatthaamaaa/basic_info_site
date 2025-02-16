import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const app = express();

// Simulate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve about.html when /about is accessed
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// (Optional) Keep the root path serving 404.html for demonstration,
// but in a real application, you'd likely serve index.html or a proper homepage at /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Or index.html in real app
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact-me.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(5000, () => console.log("Server is running on port 5000"));