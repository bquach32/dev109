// Array of images
const images = [
  { src: "https://wl-brightside.cf.tsp.li/resize/728x/webp/6fc/800/f673ef5a92b11eeda0817bd242.jpg.webp", mapName: "map1" },
  { src: "https://wl-brightside.cf.tsp.li/resize/728x/webp/f90/575/7956385482be07b8b79cd86625.jpg.webp", mapName: "map2" },
  { src: "https://wl-brightside.cf.tsp.li/resize/728x/webp/543/30a/f1b42b5926b7f5e19395b16d1c.jpg.webp", mapName: "map3" }
];

// Object mapping images to their items
const items = {
  "map1": [
    { id: "pineapple", name: "Pineapple", coords: "96,547,41" },
    { id: "chair", name: "Chair", coords: "43,328,43" },
    { id: "pear", name: "Pear", coords: "206,330,32" }
  ],
  "map2": [
    { id: "crown", name: "Crown", coords: "622,192,39" },
    { id: "clock", name: "Clock", coords: "629,202,46" },
    { id: "hat", name: "Green hat", coords: "437,115,64" }
  ],
  "map3": [
    { id: "chicken", name: "Chicken", coords: "316,332,45" },
    { id: "knife", name: "Knife", coords: "112,262,35" },
    { id: "lamp", name: "Lamp", coords: "589,285,56" }
  ]
};

let currentItems = [];

// Function to load a random image
function loadRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const imageData = images[randomIndex];

  // Update image
  const gameImage = document.querySelector("#gameImage");
  gameImage.src = imageData.src;

  // Clear old areas and object list
  document.querySelector("#image-map").innerHTML = "";
  document.querySelector("#object-list").innerHTML = "";

  // Get corresponding items for the selected image
  currentItems = items[imageData.mapName] || [];

  gameImage.onload = () => {
    const imageMap = document.querySelector("#image-map");

    currentItems.forEach(item => {
      // Create area for clickable objects
      const area = document.createElement("area");
      area.id = item.id;
      area.alt = item.name;
      area.title = item.name;
      area.href = "#";
      area.shape = "circle";
      area.dataset.originalCoords = item.coords; // Store original coords
      area.addEventListener("click", (event) => foundItem(event, item));

      imageMap.appendChild(area);

      // Add item to the object list
      const listItem = document.createElement("li");
      listItem.id = `${item.id}Item`;
      listItem.textContent = item.name;
      document.querySelector("#object-list").appendChild(listItem);
    });

    adjustItemPositions();
  };
}

// Function to adjust positions based on image's actual displayed size
function adjustItemPositions() {
  const gameImage = document.querySelector("#gameImage");

  if (gameImage.complete) {
    const imageWidth = gameImage.clientWidth;
    const imageHeight = gameImage.clientHeight;
    const originalWidth = gameImage.naturalWidth;
    const originalHeight = gameImage.naturalHeight;

    currentItems.forEach(item => {
      const area = document.getElementById(item.id);
      const coords = item.coords.split(",").map(Number);

      // Scale coordinates dynamically
      const scaleX = imageWidth / originalWidth;
      const scaleY = imageHeight / originalHeight;
      const scaledCoords = coords.map((coord, index) => 
        index % 2 === 0 ? Math.round(coord * scaleX) : Math.round(coord * scaleY)
      );

      area.coords = scaledCoords.join(",");
    });
  } else {
    gameImage.onload = () => adjustItemPositions();
  }
}

// Function to mark the item as found
function foundItem(event, item) {
  event.preventDefault();
  const listItem = document.getElementById(`${item.id}Item`);
  listItem.classList.add("crossed-out");
  checkWin();
}

// Function to check if all items are found
function checkWin() {
  const items = document.querySelectorAll("#object-list li");
  const allFound = Array.from(items).every(item => item.classList.contains("crossed-out"));

  if (allFound) {
    setTimeout(() => {
      alert("You found all items! Play again?");
      replayGame();
    }, 500);
  }
}

// Function to replay the game
function replayGame() {
  loadRandomImage();
  document.querySelectorAll("#object-list li").forEach(item => item.classList.remove("crossed-out"));
}

// Initialize the game on page load
window.onload = loadRandomImage;
