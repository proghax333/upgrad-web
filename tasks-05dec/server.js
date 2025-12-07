const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

function embedHTML(videoId) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <style>
        body { margin: 0; background: #000; }
        iframe {
          width: 100vw;
          height: 100vh;
          border: none;
        }
      </style>
    </head>
    <body>
      <iframe
        src="https://www.youtube.com/embed/${videoId}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </body>
    </html>
  `;
}

// one endpoint that returns JSON containing all 3 pages
app.get("/videos", (req, res) => {
  res.json({
    page1: embedHTML("QQr368H8Wv0"),
    page2: embedHTML("H7Kt3JqhvfM"),
    page3: embedHTML("BeK3QHB66YE"),
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
