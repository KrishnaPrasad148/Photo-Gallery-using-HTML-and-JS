# EX04 Creating a Photo Gallery using HTML and JavaScript

### Date: 13/11/25  

---

## AIM:
To create an interactive photo gallery using **HTML**, **CSS**, and **JavaScript** that allows users to view images with hover effects and keyboard navigation.

## DESIGN STEPS:

### Step 1:
Create a new folder for the project.

### Step 2:
Inside the folder, create the following files:
- `index.html`
- `gallery.css`
- `gallery.js`

### Step 3:
Design the gallery layout in HTML include a heading, a main display area for large images, and thumbnail images.

### Step 4:
Style the gallery using CSS to make it visually appealing and responsive with hover and focus effects.

### Step 5:
Use JavaScript to add interactivity:
- Display a larger version of the image when hovering over a thumbnail.
- Enable navigation using the left and right arrow keys.

### Step 6:
Test the gallery in a browser to ensure all features work correctly.

### Step 7:
Review the design and finalize.


## PROGRAM:
```

Developed By : Krishna Prasad S 
Register No. : 212223230108

```

### i) index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cute Moth Gallery</title>
  <link rel="stylesheet" href="gallery.css">
</head>
<body onload="addTabFocus()">

  <h1>Cute Moth Gallery</h1>

  <div id="largeDisplay" class="large-display">
    <div id="overlayText" class="overlay-text">Hover over an image below to display here.</div>
  </div>

  <div class="thumbnails">
    <img src="https://media.istockphoto.com/id/1353691722/photo/a-silkworm-butterfly.jpg" alt="A fluffy white moth">
    <img src="https://media.istockphoto.com/id/1357445639/photo/leopard-moth-pseudopanthera-macularia.jpg" alt="Yellow dot Cheetah">
    <img src="https://media.istockphoto.com/id/1146136535/photo/looper-moth.jpg" alt="Moon Guardian">
    <img src="https://media.istockphoto.com/id/1174620791/photo/silkworm-on-the-leaf-of-a-plant.jpg" alt="Fierce Bloom">
    <img src="https://media.istockphoto.com/id/1271973216/photo/a-large-moth-sitting-on-a-leaf.jpg" alt="Green Leaf Stingray">
    <img src="https://media.istockphoto.com/id/1261739015/photo/big-butterfly-in-the-dark-forest.jpg" alt="Burning Mothra">
  </div>

  <script src="gallery.js"></script>
</body>
</html>
```

### ii) gallery.css
```css
body {
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #4f3c59;
  margin: 0;
  overflow-x: hidden;
}

h1 {
  margin-top: 20px;
  color: white;
  text-shadow: 2px 2px 4px #3b1a3b;
}

.large-display {
  position: relative;
  width: 60%;
  height: 450px;
  margin: 40px auto;
  border: 3px solid #2d2a2a;
  border-radius: 15px;
  background-color: #ddd;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 1.3em;
  padding: 8px 14px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  text-shadow: 1px 1px 3px black;
}

.thumbnails {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 20px;
}

.thumbnails img {
  width: 100px;
  height: 80px;
  border: 2px solid #444;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s, border-color 0.3s;
}

.thumbnails img:hover,
.thumbnails img:focus {
  border-color: #fff;
  transform: scale(1.05);
  outline: none;
}
```

### iii) gallery.js
```javascript
const thumbnails = document.querySelectorAll(".thumbnails img");
const largeDisplay = document.getElementById("largeDisplay");
const overlayText = document.getElementById("overlayText");
let currentIndex = 0;

function addTabFocus() {
  thumbnails.forEach((img, i) => {
    img.setAttribute("tabindex", i + 1);
    img.addEventListener("mouseover", () => showImage(img, i));
    img.addEventListener("focus", () => showImage(img, i));
    img.addEventListener("mouseout", resetImage);
    img.addEventListener("blur", resetImage);
  });
  document.addEventListener("keydown", handleKeyNav);
}

function showImage(img, index) {
  largeDisplay.style.backgroundImage = `url(${img.src})`;
  overlayText.textContent = img.alt;
  currentIndex = index;
}

function resetImage() {
  largeDisplay.style.backgroundImage = "none";
  overlayText.textContent = "Hover or focus on a moth to see it here!";
}

function handleKeyNav(event) {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % thumbnails.length;
  } else if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  } else {
    return;
  }
  thumbnails[currentIndex].focus();
  showImage(thumbnails[currentIndex], currentIndex);
}
```


## OUTPUT:


## RESULT:
The **Photo Gallery** was successfully created using **HTML**, **CSS**, and **JavaScript** with interactive image hover and keyboard navigation features.
