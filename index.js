const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Home Route – returns an HTML page
app.get('/', (req, res) => {
  const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>Final Project</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 2rem; background:#f7f7f7; }
          .card { background:white; padding:2rem; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,.08); max-width:700px; margin:auto; }
          h1 { margin-top:0; }
          p { margin:0.4rem 0; }
          .quote { margin-top:1rem; font-style:italic; color:#333; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Personal Profile</h1>
          <p><strong>Full name:</strong> Jonalyn C. Umali</p>
          <p><strong>Class section:</strong> BSIT BA 4102</p>
          <p class="quote">“Friendship is certainly the finest balm for the pangs of disappointed love.” — Northanger Abbey</p>
          <hr/>
          <p>Deployed on Render: <em>replace-with-your-render-url-after-deploy</em></p>
        </div>
      </body>
    </html>
  `;
  res.send(html);
});

// JSON API Route
app.get('/api/info', (req, res) => {
  res.json({
    name: "Jonalyn C. Umali",
    class_section: "BSIT BA 4102",
    quote: "Friendship is certainly the finest balm for the pangs of disappointed love.— Northanger Abbey"
  });
});

// Server Listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
