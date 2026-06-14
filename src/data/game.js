export const games = [
  { id: 1, title: "Call of Duty: Black Ops 6", price: 59.99, originalPrice: 79.99, image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/bo6/Store_BO6PDP_Hero.webp", rating: 4.7, platform: ["PC", "PS5", "PS4"], genre: "accion", discount: 25 },
  { id: 2, title: "Modern Warfare III", price: 49.99, originalPrice: 69.99, image: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/08/call-of-duty-modern-warfare-3-2.jpeg?fit=1920%2C1147&quality=50&strip=all&ssl=1", rating: 4.4, platform: ["PC", "PS5", "PS4"], genre: "accion", discount: 28 },
  {
    id: 3, title: "Ghost of Tsushima", price: 39.99, image: "https://i.pinimg.com/736x/30/ac/48/30ac487bc98bb07fbb4abb4feca4a8d4.jpg", rating: 4.9, platform: ["PS5", "PS4"], genre: "accion"
  },
  { id: 4, title: "Resident Evil 4 Remake", price: 34.99, originalPrice: 59.99, image: "https://i.pinimg.com/736x/67/51/8d/67518d669d51b80ce51a3e0854108253.jpg", rating: 4.8, platform: ["PC", "PS5", "PS4"], genre: "accion", discount: 40 },
  { id: 5, title: "The Last of Us Part I", price: 44.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14rgPPVNYblSMwK2G7wyhHMAc8uzeyYonTbd5xi3kISAikwZLp7_U25A&s=10", rating: 4.9, platform: ["PC", "PS5"], genre: "accion" },
  { id: 6, title: "Hogwarts Legacy", price: 29.99, originalPrice: 59.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/capsule_616x353.jpg", rating: 4.6, platform: ["PC", "PS5", "PS4"], genre: "accion", discount: 50 },
  { id: 7, title: "GTA V", price: 14.99, originalPrice: 29.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/capsule_616x353.jpg", rating: 4.8, platform: ["PC", "PS5", "PS4"], genre: "aventura", discount: 50 },
  { id: 8, title: "Uncharted 4", price: 19.99, image: "https://i.pinimg.com/736x/4b/ee/1e/4bee1e0fc85df97c041d29060ffbc977.jpg", rating: 4.9, platform: ["PC", "PS4", "PS5"], genre: "aventura" },
  { id: 9, title: "Back 4 Blood", price: 12.99, originalPrice: 39.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/924970/capsule_616x353.jpg", rating: 4.2, platform: ["PC", "PS5", "PS4"], genre: "aventura", discount: 67 },
  {
    id: 10, title: "Ghost of Tsushima: Director", price: 49.99, image: "https://assets-prd.ignimgs.com/2023/07/03/ghostdir-1688418630974.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80", rating: 4.9, platform: ["PC", "PS5"], genre: "aventura", isNew: true
  },
  { id: 11, title: "Horizon Zero Dawn", price: 9.99, originalPrice: 49.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/capsule_616x353.jpg", rating: 4.7, platform: ["PC", "PS4"], genre: "aventura", discount: 80 },
  { id: 12, title: "Cyberpunk 2077", price: 24.99, originalPrice: 59.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/capsule_616x353.jpg", rating: 4.5, platform: ["PC", "PS5", "PS4"], genre: "aventura", discount: 58 },
  { id: 13, title: "EA Sports FC 25", price: 39.99, originalPrice: 69.99, image: "https://i.pinimg.com/736x/27/c7/14/27c71467a4e74dfa0a7ed0c482fe1d53.jpg", rating: 4.3, platform: ["PC", "PS5", "PS4"], genre: "deportes", discount: 42 },
  { id: 14, title: "NBA 2K25", price: 29.99, originalPrice: 59.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2338770/capsule_616x353.jpg", rating: 4.1, platform: ["PC", "PS5", "PS4"], genre: "deportes", discount: 50 },
  { id: 15, title: "Gran Turismo 7", price: 44.99, image: "https://i.pinimg.com/736x/52/6d/9b/526d9ba56acec0bf68bc28a8c52eba66.jpg", rating: 4.6, platform: ["PS5", "PS4"], genre: "deportes" },
  { id: 16, title: "F1 24", price: 34.99, originalPrice: 69.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2488620/capsule_616x353.jpg", rating: 4.3, platform: ["PC", "PS5", "PS4"], genre: "deportes", discount: 50 },
  { id: 17, title: "UFC 5", price: 24.99, originalPrice: 59.99, image: "https://playxdigital.com/wp-content/uploads/2025/05/COVERS-UFC5E_PS5.webp", rating: 4.2, platform: ["PS5", "PS4"], genre: "deportes", discount: 58 },
  { id: 18, title: "Rocket League", price: 0, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252950/capsule_616x353.jpg", rating: 4.7, platform: ["PC", "PS4", "PS5"], genre: "deportes" },
  { id: 19, title: "Mortal Kombat 1", price: 34.99, originalPrice: 69.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1971870/capsule_616x353.jpg", rating: 4.4, platform: ["PC", "PS5"], genre: "lucha", discount: 50 },
  { id: 20, title: "Street Fighter 6", price: 29.99, originalPrice: 59.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1794680/capsule_616x353.jpg", rating: 4.7, platform: ["PC", "PS5", "PS4"], genre: "lucha", discount: 50 },
  { id: 21, title: "Tekken 8", price: 39.99, originalPrice: 59.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1778820/capsule_616x353.jpg", rating: 4.6, platform: ["PC", "PS5"], genre: "lucha", discount: 33, isNew: true },
  { id: 22, title: "Dragon Ball FighterZ", price: 9.99, originalPrice: 49.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/678950/capsule_616x353.jpg", rating: 4.5, platform: ["PC", "PS4"], genre: "lucha", discount: 80 },
  { id: 23, title: "Elden Ring", price: 39.99, originalPrice: 59.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg", rating: 4.9, platform: ["PC", "PS5", "PS4"], genre: "rpg", discount: 33 },
  { id: 24, title: "God of War: Ragnarök", price: 39.99, image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png", rating: 4.9, platform: ["PC", "PS5", "PS4"], genre: "rpg" },
  { id: 25, title: "Baldur's Gate 3", price: 49.99, image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/capsule_616x353.jpg", rating: 5.0, platform: ["PC"], genre: "rpg" },
  { id: 26, title: "Spider-Man 2", price: 59.99, image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png", rating: 4.8, platform: ["PS5"], genre: "rpg", isNew: true },
];

export const stats = [
  { label: "Juegos disponibles", value: "250+", icon: "lucide:gamepad-2" },
  { label: "Usuarios activos", value: "500+", icon: "lucide:users" },
  { label: "Descargas hoy", value: "1200+", icon: "lucide:download" },
  { label: "Ofertas activas", value: "35+", icon: "lucide:gift" }
];
