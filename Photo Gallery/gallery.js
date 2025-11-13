
const thumbnails = document.querySelectorAll(".thumbnails img");
const largeDisplay = document.getElementById("largeDisplay");
const overlayText = document.getElementById("overlayText");
let currentIndex = 0;

function addTabFocus() 
{
    thumbnails.forEach((img, i) => {
        img.setAttribute("tabindex", i + 1);

        img.addEventListener("mouseover", () => showImage(img, i));
        img.addEventListener("focus", () => showImage(img, i));
        img.addEventListener("mouseout", resetImage);
        img.addEventListener("blur", resetImage);
    });

    document.addEventListener("keydown", handleKeyNav);
}

function showImage(img, index) 
{
    largeDisplay.style.backgroundImage = `url(${img.src})`;
    overlayText.textContent = img.alt;
    currentIndex = index;
}

function resetImage() 
{
    largeDisplay.style.backgroundImage = "none";
    overlayText.textContent = "Hover or focus on a moth to see it here!";
}

function handleKeyNav(event) 
{
    if (event.key === "ArrowRight") 
    {
        currentIndex = (currentIndex + 1) % thumbnails.length;
    } 
    else if (event.key === "ArrowLeft") 
    {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    } 
    else 
    {
        return;
    }

    thumbnails[currentIndex].focus();
    showImage(thumbnails[currentIndex], currentIndex);
}
