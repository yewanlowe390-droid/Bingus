import tourHolyLand from "@/assets/tour-holyland.png";
import tourPetra from "@/assets/tour-petra.png";
import tourGreece from "@/assets/tour-greece.png";
import tourSriLanka from "@/assets/tour-srilanka.png";
import tourFranceSpain from "@/assets/tour-france-spain-portugal.png";
import tourLourdes from "@/assets/tour-lourdes.png";
import tourMilanNetherlands from "@/assets/tour-milan-netherlands.png";
import destFrance from "@/assets/dest-france.png";
import destSpain from "@/assets/dest-spain.png";
import destItaly from "@/assets/dest-italy.png";
import destUK from "@/assets/dest-uk.png";
import destGermany from "@/assets/dest-germany.png";
import destGreece from "@/assets/dest-greece.png";
import destTurkey from "@/assets/dest-turkey.png";
import destDubai from "@/assets/dest-dubai.png";
import destAustralia from "@/assets/dest-australia.png";
import destAmerica from "@/assets/dest-america.png";
import destIndia from "@/assets/dest-india.png";
import destThailand from "@/assets/dest-thailand.png";
import destMalaysia from "@/assets/dest-malaysia.png";
import destCanada from "@/assets/dest-canada.png";
import destEurope from "@/assets/dest-europe.png";

export interface Tour {
  id: number;
  title: string;
  country: string[];
  image: string;
  duration: string;
  price: string;
  description: string;
  departure?: string;
  highlights: string[];
  badge?: string;
}

export const ALL_DESTINATIONS = [
  "All",
  "France",
  "Spain",
  "Italy",
  "United Kingdom",
  "Germany",
  "Greece",
  "Turkey",
  "Dubai",
  "Australia",
  "America",
  "India",
  "Thailand",
  "Malaysia",
  "Canada",
  "All of Europe",
];

export const tours: Tour[] = [
  {
    id: 1,
    title: "France, Portugal & Spain",
    country: ["France", "Spain", "All of Europe"],
    image: tourFranceSpain,
    duration: "10 Nights / 11 Days",
    price: "LKR 1,100,000",
    departure: "20th September 2026",
    description: "A sweeping grand tour through three of Europe's most beloved nations — from the romance of Paris and the pilgrimage paths of northern Spain to sun-drenched Lisbon.",
    highlights: ["Paris & Versailles", "Camino de Santiago", "Lisbon & Sintra", "Barcelona", "Porto"],
    badge: "Featured",
  },
  {
    id: 2,
    title: "Lourdes Pilgrimage",
    country: ["France"],
    image: tourLourdes,
    duration: "6 Nights / 7 Days",
    price: "LKR 675,000",
    departure: "6th September 2026",
    description: "A profoundly moving spiritual journey to the world's most beloved Marian shrine in southern France, including the famous candlelight processions and healing waters.",
    highlights: ["Grotto of Massabielle", "Candlelight Procession", "Basilica of the Immaculate Conception", "Blessing of the Sick"],
    badge: "Pilgrimage",
  },
  {
    id: 3,
    title: "Paris & French Riviera",
    country: ["France"],
    image: destFrance,
    duration: "8 Nights / 9 Days",
    price: "LKR 920,000",
    description: "Experience the timeless glamour of Paris — the Eiffel Tower, the Louvre, Versailles — followed by the sun-kissed coastline of Nice, Cannes, and Monaco.",
    highlights: ["Eiffel Tower & Louvre", "Versailles Palace", "Nice & Cannes", "Monaco", "Provence"],
  },
  {
    id: 4,
    title: "Milan to Netherlands",
    country: ["Italy", "All of Europe"],
    image: tourMilanNetherlands,
    duration: "10 Nights / 11 Days",
    price: "LKR 1,175,000",
    departure: "15th October 2026",
    description: "From the fashion and grandeur of Milan to the breathtaking Rhine Valley and the iconic canal cities of Amsterdam and Bruges — a journey through the heart of Europe.",
    highlights: ["Milan & Lake Como", "Swiss Alps Transit", "Rhine Valley", "Bruges", "Amsterdam Canals"],
    badge: "New",
  },
  {
    id: 5,
    title: "Rome, Florence & Venice",
    country: ["Italy"],
    image: destItaly,
    duration: "9 Nights / 10 Days",
    price: "LKR 980,000",
    description: "Italy's three crown jewels in one unforgettable journey — ancient Rome, Renaissance Florence, and the incomparable floating city of Venice.",
    highlights: ["Colosseum & Vatican", "Florence Duomo", "Uffizi Gallery", "Gondola in Venice", "Tuscany countryside"],
  },
  {
    id: 6,
    title: "Spanish Highlights",
    country: ["Spain"],
    image: destSpain,
    duration: "8 Nights / 9 Days",
    price: "LKR 855,000",
    description: "Vibrant cities, flamenco rhythms, and Moorish architecture — discover Barcelona's modernist marvels, Madrid's world-class art, and the Alhambra in Granada.",
    highlights: ["Sagrada Família", "Prado Museum", "Alhambra Palace", "Seville Flamenco", "Montserrat"],
  },
  {
    id: 7,
    title: "London & Scottish Highlands",
    country: ["United Kingdom"],
    image: destUK,
    duration: "9 Nights / 10 Days",
    price: "LKR 1,050,000",
    description: "From the iconic landmarks of London — Buckingham Palace, the Tower of London — to the dramatic lochs and castles of the Scottish Highlands.",
    highlights: ["Buckingham Palace", "Tower of London", "Edinburgh Castle", "Loch Ness", "Glencoe"],
  },
  {
    id: 8,
    title: "Germany & Rhine Valley",
    country: ["Germany", "All of Europe"],
    image: destGermany,
    duration: "8 Nights / 9 Days",
    price: "LKR 890,000",
    description: "Fairytale castles, medieval towns, and the legendary Rhine Valley — experience Germany's legendary Bavaria, Cologne Cathedral, and the Black Forest.",
    highlights: ["Neuschwanstein Castle", "Cologne Cathedral", "Rhine Valley Cruise", "Munich Beer Festival", "Black Forest"],
  },
  {
    id: 9,
    title: "Grecian Antiquities & Islands",
    country: ["Greece"],
    image: tourGreece,
    duration: "10 Nights / 11 Days",
    price: "LKR 890,000",
    description: "Walk in the footsteps of ancient civilizations — the Acropolis, Delphi, and Olympia — then sail to the breathtaking caldera of Santorini and the charm of Mykonos.",
    highlights: ["Acropolis & Parthenon", "Delphi Oracle", "Santorini Caldera", "Mykonos", "Meteora Monasteries"],
  },
  {
    id: 10,
    title: "Greece Pilgrimage",
    country: ["Greece"],
    image: destGreece,
    duration: "8 Nights / 9 Days",
    price: "LKR 810,000",
    description: "A spiritual journey tracing the footsteps of St Paul through Athens, Corinth, and Thessaloniki — with visits to Mount Athos and ancient Byzantine monasteries.",
    highlights: ["Athens Areopagus", "Corinth Canal", "Thessaloniki", "Meteora Monasteries", "Byzantine Churches"],
    badge: "Pilgrimage",
  },
  {
    id: 11,
    title: "Cappadocia & Istanbul",
    country: ["Turkey"],
    image: destTurkey,
    duration: "7 Nights / 8 Days",
    price: "LKR 720,000",
    description: "Float over magical Cappadocia in a hot-air balloon at sunrise, explore ancient underground cities, and discover the spice-scented grandeur of Istanbul.",
    highlights: ["Cappadocia Balloon Ride", "Underground Cities", "Hagia Sophia", "Grand Bazaar", "Bosphorus Cruise"],
  },
  {
    id: 12,
    title: "Dubai Discovery",
    country: ["Dubai"],
    image: destDubai,
    duration: "5 Nights / 6 Days",
    price: "LKR 445,000",
    description: "Experience the glittering future of the Middle East — the Burj Khalifa, desert dunes, a souk adventure, and the world's most extravagant shopping experiences.",
    highlights: ["Burj Khalifa", "Desert Safari", "Gold & Spice Souks", "Dubai Mall", "Dhow Cruise"],
  },
  {
    id: 13,
    title: "Jordan & Holy Land Pilgrimage",
    country: ["All of Europe"],
    image: tourHolyLand,
    duration: "10 Nights / 11 Days",
    price: "LKR 1,150,000",
    description: "A deeply spiritual journey walking in the footsteps of faith — Jerusalem, Bethlehem, Galilee, the ancient city of Petra, and the vast Wadi Rum desert.",
    highlights: ["Jerusalem Old City", "Bethlehem", "Sea of Galilee", "Petra Rose City", "Wadi Rum"],
    badge: "Pilgrimage",
  },
  {
    id: 14,
    title: "Jordan & Petra Expedition",
    country: ["All of Europe"],
    image: tourPetra,
    duration: "8 Nights / 9 Days",
    price: "LKR 985,000",
    description: "Discover the ancient wonders of the Rose City, float in the mineral-rich Dead Sea, and experience the vast red-sand landscape of Wadi Rum under a sky full of stars.",
    highlights: ["Petra Treasury", "Wadi Rum Jeep Tour", "Dead Sea Float", "Aqaba Red Sea", "Amman Citadel"],
  },
  {
    id: 15,
    title: "Australia Highlights",
    country: ["Australia"],
    image: destAustralia,
    duration: "12 Nights / 13 Days",
    price: "LKR 1,490,000",
    description: "The land down under in all its glory — the Opera House, the Great Barrier Reef, the ancient Uluru, and the wild beauty of the Blue Mountains.",
    highlights: ["Sydney Opera House", "Great Barrier Reef", "Uluru (Ayers Rock)", "Blue Mountains", "Melbourne Laneways"],
  },
  {
    id: 16,
    title: "USA East Coast Explorer",
    country: ["America"],
    image: destAmerica,
    duration: "12 Nights / 13 Days",
    price: "LKR 1,580,000",
    description: "New York's electric skyline, Washington DC's monuments, Niagara's thundering falls, and the historic charm of Boston — the American East Coast in one grand sweep.",
    highlights: ["New York City", "Washington DC Monuments", "Niagara Falls", "Boston Freedom Trail", "Philadelphia"],
  },
  {
    id: 17,
    title: "India Heritage & Spirituality",
    country: ["India"],
    image: destIndia,
    duration: "8 Nights / 9 Days",
    price: "LKR 310,000",
    description: "Journey through India's timeless heritage — the iconic Taj Mahal, the spiritual ghats of Varanasi, the pink city of Jaipur, and the sacred temples of the south.",
    highlights: ["Taj Mahal", "Varanasi Ghats", "Jaipur Pink City", "Kerala Backwaters", "Golden Temple"],
  },
  {
    id: 18,
    title: "Thailand Explorer",
    country: ["Thailand"],
    image: destThailand,
    duration: "7 Nights / 8 Days",
    price: "LKR 385,000",
    description: "Golden temples, turquoise islands, night markets, and royal palaces — Thailand delivers an extraordinary blend of culture, spirituality, and tropical paradise.",
    highlights: ["Grand Palace Bangkok", "Chiang Mai Temples", "Phi Phi Islands", "Floating Markets", "Elephant Sanctuary"],
  },
  {
    id: 19,
    title: "Malaysia & Singapore",
    country: ["Malaysia"],
    image: destMalaysia,
    duration: "6 Nights / 7 Days",
    price: "LKR 345,000",
    description: "From the gleaming Petronas Towers of Kuala Lumpur to the multicultural food paradise of Penang and the futuristic garden city of Singapore.",
    highlights: ["Petronas Twin Towers", "Batu Caves", "Penang Georgetown", "Cameron Highlands", "Singapore Gardens"],
  },
  {
    id: 20,
    title: "Canada Rockies & Niagara",
    country: ["Canada"],
    image: destCanada,
    duration: "11 Nights / 12 Days",
    price: "LKR 1,520,000",
    description: "Turquoise glacier lakes, towering snow-capped peaks, the thunder of Niagara Falls, and the cosmopolitan culture of Toronto and Vancouver.",
    highlights: ["Banff & Lake Louise", "Jasper National Park", "Niagara Falls", "Toronto CN Tower", "Vancouver Stanley Park"],
  },
  {
    id: 21,
    title: "European Grand Tour",
    country: ["All of Europe"],
    image: destEurope,
    duration: "14 Nights / 15 Days",
    price: "LKR 1,350,000",
    description: "The ultimate European experience — sweep through Paris, Amsterdam, Brussels, Rhine Valley, Switzerland, and Italy on one seamlessly planned grand tour.",
    highlights: ["Paris Eiffel Tower", "Amsterdam Canals", "Rhine Valley Cruise", "Swiss Alps", "Rome Colosseum"],
  },
  {
    id: 22,
    title: "Sri Lanka Discovery",
    country: [],
    image: tourSriLanka,
    duration: "7 Nights / 8 Days",
    price: "LKR 185,000",
    description: "Lush tea plantations, ancient temples, golden beaches, magnificent wildlife — Sri Lanka packs extraordinary diversity into one beautiful island.",
    highlights: ["Sigiriya Rock Fortress", "Kandy Temple of Tooth", "Ella Tea Country", "Yala Safari", "Galle Fort"],
  },
];
