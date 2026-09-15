export const contactInfo = {
  companyName: "Radiant Expeditions",
  fullBusinessName: "Radiant Airtickets and Expeditions",
  phone1: { name: "Amith / Vishwanath", number: "9019985906", tel: "+919019985906" },
  phone2: { name: "Kavitha", number: "9901696090", tel: "+919901696090" },
  phone3: { name: "Lavanya", number: "9176699080", tel: "+919176699080" },
  whatsapp: "919019985906",
  whatsappDisplay: "090199 85906",
  email: "radiantbookings@gmail.com",
  location: "Bangalore, Karnataka, India",
  address: "14th Main, 6th B Cross Rd, Arehalli, AGS Layout, Banashankari, Bengaluru, Karnataka 560085",
  timings: "Mon – Sun: 8:00 AM – 9:30 PM",
  googleMapsUrl: "https://share.google/sKJGscBnoFqiLYYus",
  experienceYears: "8+",
  happyPilgrims: "2,00,000+",
  groupPackages: "1,000+",
  establishedYear: "2018",
  googleRating: 4.8,
  googleReviewsCount: "39+"
};

export const heroSlides = [
  {
    id: 1,
    title: "South Indian Tour Packages",
    price: "8500/-",
    duration: "2 to 5 Days",
    tagline: "Serene Backwaters, Munnar Tea Valleys, Tirupati Balaji & Coastal Temples",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
    badge: "Popular Destinations"
  },
  {
    id: 2,
    title: "North Indian Tour Packages",
    price: "18500/-",
    duration: "5 to 7 Days",
    tagline: "Kashmir Paradise, Himachal Snow Valleys, Golden Triangle & Royal Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80",
    badge: "Scenic & Heritage"
  },
  {
    id: 3,
    title: "Sacred Pilgrimage Yatras",
    price: "14500/-",
    duration: "1 to 11 Days",
    tagline: "Shirdi Sai VIP Darshan, Kashi-Ayodhya-Gaya & Chardham Himalayan Yatra",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80",
    badge: "VIP Darshan & Yatra"
  }
];

/* ─────────────────────────────────────────────────────────────
   1. SOUTH INDIAN PACKAGES
───────────────────────────────────────────────────────────── */
export const southIndianPackages = [
  {
    id: "south-1",
    title: "Munnar - Thekkady – Alleppey",
    duration: "5 Days / 4 Nights",
    route: "Munnar → Thekkady → Alleppey Backwaters",
    price: 16500,
    priceDisplay: "Rs.16500/-",
    category: "south-india",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    badge: "Best Seller",
    highlights: [
      "Munnar Tea Gardens & Mattupetty Dam",
      "Periyar Wildlife Sanctuary Boat Cruise in Thekkady",
      "Alleppey Luxury Houseboat Day Cruise & Backwaters",
      "Cheeyappara & Valara Waterfalls Visit",
      "Deluxe Resort Accommodation with Breakfast & Dinner"
    ],
    itinerary: [
      { day: "Day 1", desc: "Pickup from Cochin/Bangalore. Scenic drive to Munnar through rolling tea plantation hills. Visit Cheeyappara and Valara waterfalls. Check-in at Munnar deluxe resort and relax." },
      { day: "Day 2", desc: "Full day Munnar sightseeing: Mattupetty Dam, Echo Point, Kundala Lake, Eravikulam National Park (Nilgiri Tahr), and Tea Museum. Evening free for local spice shopping." },
      { day: "Day 3", desc: "Drive to Thekkady through cardamon hills. Visit Periyar Wildlife Sanctuary and enjoy scenic lake boating. Optional Kathakali & Kalaripayattu cultural martial arts show." },
      { day: "Day 4", desc: "Transfer to Alleppey (Venice of the East). Board the traditional Kerala Houseboat cruise through tranquil paddy fields and palm-fringed backwaters with authentic Kerala lunch." },
      { day: "Day 5", desc: "Morning breakfast, Cochin city sightseeing including Fort Kochi, Chinese Fishing Nets, and departure transfer back to Bangalore." }
    ],
    inclusions: [
      "AC Vehicle for all transfers & sightseeing",
      "4 Nights accommodation in 3/4-star deluxe resorts",
      "Daily breakfast and dinner",
      "Alleppey houseboat cruise with Kerala lunch",
      "Driver allowances, toll, parking and all taxes"
    ],
    exclusions: ["Flight/train tickets", "Personal boating/entry tickets", "Optional activities"]
  },
  {
    id: "south-2",
    title: "Tirupati Balaji VIP Darshan",
    duration: "2 Days / 1 Night",
    route: "Bangalore → Tirupati → Tirumala → Bangalore",
    price: 8500,
    priceDisplay: "Rs.8500/-",
    category: "south-india",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    badge: "Guaranteed VIP Darshan",
    highlights: [
      "Guaranteed Tirumala VIP Sheegra Darshan ticket (Rs.300)",
      "Padmavathi Ammavari Temple (Tiruchanur) Darshan",
      "AC Deluxe Hotel stay in Tirupati town",
      "Dedicated South Indian tour guide assistance in Tirumala",
      "Laddu Prasadam included per devotee"
    ],
    itinerary: [
      { day: "Day 1", desc: "Morning AC bus/cab departure from Bangalore to Tirupati. Check-in at deluxe hotel. Afternoon visit to Sri Padmavathi Ammavari Temple in Tiruchanur and Govindaraja Swamy Temple. Overnight stay." },
      { day: "Day 2", desc: "Early morning uphill climb to sacred Tirumala Hills. Experience holy VIP Sheegra Darshan of Lord Venkateshwara Balaji. Collect divine Laddu Prasadam. Afternoon return drive to Bangalore." }
    ],
    inclusions: [
      "Bangalore to Tirupati roundtrip AC transport",
      "1 Night AC deluxe hotel stay (Twin/Triple sharing)",
      "TTD Special Entry VIP Darshan pass",
      "South Indian vegetarian meals",
      "Experienced tour manager assistance"
    ],
    exclusions: ["Special hair tonsure charges", "Personal shopping & archana fees"]
  },
  {
    id: "south-3",
    title: "Mysore - Coorg - Ooty Splendors",
    duration: "5 Days / 4 Nights",
    route: "Mysore Palace → Coorg Hills → Ooty Blue Mountains",
    price: 17500,
    priceDisplay: "Rs.17500/-",
    category: "south-india",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    badge: "Hills & Palaces",
    highlights: [
      "Royal Mysore Palace & Brindavan Musical Gardens",
      "Coorg Golden Temple (Bylakuppe), Abbey Falls & Raja's Seat",
      "Ooty Botanical Gardens, Ooty Lake & Doddabetta Peak",
      "Scenic Nilgiri Toy Train Ride experience",
      "Tea & Spice Plantation walk with chocolate tasting"
    ],
    itinerary: [
      { day: "Day 1", desc: "Departure from Bangalore to Mysore. Visit Srirangapatna, illuminated Mysore Palace, Chamundi Hills temple and evening Brindavan Gardens light show. Stay in Mysore." },
      { day: "Day 2", desc: "Drive from Mysore to Coorg (Kodagu). Visit Namdroling Monastery (Golden Temple), Dubare Elephant Camp, and scenic Raja's Seat sunset. Overnight in Madikeri." },
      { day: "Day 3", desc: "Morning Abbey Falls and Omkareshwara Temple. Drive through the Nilgiri ghats to Queen of Hill Stations — Ooty. Evening relax by Ooty Lake." },
      { day: "Day 4", desc: "Full day Ooty & Coonoor tour: Doddabetta Peak, Tea Factory, Botanical Garden, Sim's Park and Dolphin's Nose in Coonoor." },
      { day: "Day 5", desc: "Morning leisure, homemade Ooty chocolate shopping, and comfortable return transfer to Bangalore." }
    ],
    inclusions: [
      "AC private vehicle from pickup to drop",
      "4 Nights star accommodation with breakfast & dinner",
      "All sightseeing transfers per itinerary",
      "Tolls, parking, driver bata and permits"
    ],
    exclusions: ["Entry tickets for gardens/palace", "Toy train ticket", "Personal expenses"]
  },
  {
    id: "south-4",
    title: "Rameshwaram - Madurai - Kanyakumari",
    duration: "5 Days / 4 Nights",
    route: "Madurai Meenakshi → Rameshwaram Island → Kanyakumari",
    price: 18900,
    priceDisplay: "Rs.18900/-",
    category: "south-india",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    badge: "Sacred Temple Circuit",
    highlights: [
      "Madurai World-Famous Meenakshi Amman Temple & Nayakar Mahal",
      "Ramanathaswamy Temple Darshan & 22 Holy Theerthams holy bath",
      "Ghost town Dhanushkodi & Dr. APJ Abdul Kalam Memorial",
      "Kanyakumari Sunrise & Sunset over 3 Oceans (Triveni Sangam)",
      "Vivekananda Rock Memorial & Thiruvalluvar Statue Boat Ferry"
    ],
    itinerary: [
      { day: "Day 1", desc: "Arrival in Madurai from Bangalore. Check-in and visit magnificent Meenakshi Amman Temple and Thirumalai Nayakkar Palace. Overnight in Madurai." },
      { day: "Day 2", desc: "Morning drive across the legendary Pamban Sea Bridge to sacred Rameshwaram Island. Check-in and evening Darshan at Ramanathaswamy Temple." },
      { day: "Day 3", desc: "Morning 22 Theertham holy snan at temple. Visit Agni Theertham, Ram Setu point at Dhanushkodi and Kalam National Memorial. Afternoon drive to Kanyakumari." },
      { day: "Day 4", desc: "Witness breathtaking sunrise at Triveni Sangam. Ferry ride to Vivekananda Rock Memorial and Thiruvalluvar Statue. Visit Kanyakumari Amman Temple." },
      { day: "Day 5", desc: "Morning visit to Suchindram Thanumalayan Temple. Transfer to Madurai/Trivandrum airport for flight back to Bangalore." }
    ],
    inclusions: [
      "AC sanitized vehicle for all 5 days",
      "4 Nights accommodation in quality AC hotels",
      "Daily South Indian breakfast",
      "Temple darshan coordination and guidance",
      "All interstate permits, parking and tolls"
    ],
    exclusions: ["Special temple pooja/archana fees", "Ferry boat tickets", "Meals other than breakfast"]
  },
  {
    id: "south-5",
    title: "Udupi - Murudeshwar - Gokarna - Kollur",
    duration: "3 Days / 2 Nights",
    route: "Udupi Sri Krishna → Murudeshwar → Gokarna Om Beach",
    price: 11500,
    priceDisplay: "Rs.11500/-",
    category: "south-india",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
    badge: "Coastal Karnataka",
    highlights: [
      "Udupi Sri Krishna Matha & Kanakana Kindi Darshan",
      "Murudeshwar 123-ft Giant Shiva Statue & 20-storey Raja Gopura",
      "Gokarna Mahabaleshwara Temple (Atmalinga) & Om Beach",
      "Kollur Mookambika Temple Shakti Darshan",
      "Malpe Beach & St. Mary's Island basaltic rock formations"
    ],
    itinerary: [
      { day: "Day 1", desc: "Departure from Bangalore. Scenic drive to Udupi. Visit Sri Krishna Temple and Anantheshwara Temple. Evening visit to pristine Malpe Beach." },
      { day: "Day 2", desc: "Drive along coastal highway to Kollur Sri Mookambika Temple. Proceed to Murudeshwar, marvel at the Arabian Sea Shiva statue and 18-storey Gopura with lift to top. Stay in Murudeshwar." },
      { day: "Day 3", desc: "Morning visit to Gokarna Mahabaleshwar Temple for Atmalinga Darshan. Stroll across scenic Om Beach. Evening comfortable drive back to Bangalore." }
    ],
    inclusions: [
      "AC vehicle for entire tour roundtrip from Bangalore",
      "2 Nights deluxe hotel accommodation",
      "Breakfast on all days",
      "Driver charges, tolls and parking"
    ],
    exclusions: ["Special archana passes", "Water sports at beach"]
  },
  {
    id: "south-6",
    title: "Hyderabad & Srisailam Jyotirlinga",
    duration: "3 Days / 2 Nights",
    route: "Hyderabad Charminar → Srisailam Mallikarjuna Jyotirlinga",
    price: 12900,
    priceDisplay: "Rs.12900/-",
    category: "south-india",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80",
    badge: "Jyotirlinga & Heritage",
    highlights: [
      "Mallikarjuna Swamy Jyotirlinga & Bhramaramba Devi Shakti Peeth",
      "Patala Ganga holy bath & Krishna River ropeway ride",
      "Hyderabad Charminar, Salar Jung Museum & Golconda Fort",
      "Hussain Sagar Lake with giant Buddha statue",
      "Authentic Hyderabadi cuisine experience"
    ],
    itinerary: [
      { day: "Day 1", desc: "Bangalore to Hyderabad flight/train. City tour of Golconda Fort sound & light show, Charminar and Hussain Sagar Lake. Stay in Hyderabad." },
      { day: "Day 2", desc: "Early morning drive through Nallamala forest to sacred Srisailam hill shrine. VIP Abhishek Darshan of Sri Mallikarjuna Jyotirlinga and Bhramaramba Shakti Peeth. Overnight in Srisailam." },
      { day: "Day 3", desc: "Visit Patala Ganga ropeway, Sakshi Ganapathi and Shikhareswaram. Afternoon return drive to Hyderabad for evening flight/train back to Bangalore." }
    ],
    inclusions: [
      "AC vehicle transfers throughout the itinerary",
      "2 Nights accommodation in star hotels",
      "Daily breakfast",
      "Srisailam temple darshan assistance",
      "All driver, toll and parking charges"
    ],
    exclusions: ["VIP Darshan ticketing fees", "Entry fees for monuments"]
  }
];

/* ─────────────────────────────────────────────────────────────
   2. NORTH INDIAN PACKAGES
───────────────────────────────────────────────────────────── */
export const northIndianPackages = [
  {
    id: "north-1",
    title: "Delhi - Agra - Jaipur (Golden Triangle)",
    duration: "5 Days / 4 Nights",
    route: "Delhi Capital → Agra Taj Mahal → Jaipur Pink City",
    price: 18500,
    priceDisplay: "Rs.18500/-",
    category: "north-india",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    badge: "India's Classic Route",
    highlights: [
      "Majestic Sunrise view at the iconic Taj Mahal",
      "Agra Fort & Fatehpur Sikri red sandstone ghost city",
      "Jaipur Amber Fort with royal elephant/jeep ride",
      "Hawa Mahal, City Palace & Jantar Mantar in Jaipur",
      "India Gate, Qutub Minar & Rashtrapati Bhavan in Delhi"
    ],
    itinerary: [
      { day: "Day 1", desc: "Arrival at Delhi Airport from Bangalore. City tour covering Qutub Minar, India Gate, Lotus Temple, and drive past Parliament House. Overnight in Delhi." },
      { day: "Day 2", desc: "Drive via Yamuna Expressway to Agra. Visit monumental Agra Fort and evening view of Taj Mahal from Mehtab Bagh across Yamuna River." },
      { day: "Day 3", desc: "Early morning sunrise visit to world wonder Taj Mahal. After breakfast, drive to Jaipur via UNESCO Fatehpur Sikri and Chand Baori stepwell. Check-in at Jaipur." },
      { day: "Day 4", desc: "Full day Jaipur Pink City tour: Grand Amber Fort, photo stop at Jal Mahal, iconic Hawa Mahal facade, City Palace and Jantar Mantar observatory." },
      { day: "Day 5", desc: "Morning shopping for Rajasthani textiles, handicrafts and blue pottery. Return drive to Delhi Airport for flight back to Bangalore." }
    ],
    inclusions: [
      "Flight assistance & AC private cab for all transfers",
      "4 Nights accommodation in 3/4-star heritage/deluxe hotels",
      "Daily buffet breakfast",
      "Authorized English/Hindi government-certified tour guides",
      "All toll, state permits, and driver charges"
    ],
    exclusions: ["Monument entry tickets", "Lunches and dinners", "Personal shopping"]
  },
  {
    id: "north-2",
    title: "Delhi - Shimla - Manali",
    duration: "6 Days / 5 Nights",
    route: "Delhi → Shimla Mall Road → Manali Snow Valleys",
    price: 21500,
    priceDisplay: "Rs.21500/-",
    category: "north-india",
    image: "/images/shimla_manali.jpg",
    badge: "Snow & Hills",
    highlights: [
      "Shimla Mall Road, The Ridge & Christ Church",
      "Snow amusement fun at Kufri Adventure Park",
      "Solang Valley Adventure Sports & Atal Tunnel Rohtang",
      "Hadimba Devi Ancient Wooden Temple in cedar forest",
      "Vashisht Hot Water Springs & Jogini Waterfalls trek"
    ],
    itinerary: [
      { day: "Day 1", desc: "Pickup from Delhi Airport. Scenic drive to Shimla (the Summer Capital of British India). Check-in at hotel and evening walk at Mall Road & Lakkar Bazaar." },
      { day: "Day 2", desc: "Excursion to Kufri. Enjoy horse riding, Himalayan Nature Park, and snow fun activities. Afternoon visit to Jakhoo Temple (108-ft Hanuman statue)." },
      { day: "Day 3", desc: "Check out and drive to Manali along the gushing Beas River. En route stop at Pandoh Dam, Hanogi Mata Temple and Kullu Shawl weaving factory. Overnight in Manali." },
      { day: "Day 4", desc: "Full day Solang Valley & Atal Tunnel excursion. Enjoy paragliding, zorbing, snow skiing and stunning snow-clad Himalayan mountain views." },
      { day: "Day 5", desc: "Local Manali sightseeing: Hadimba Temple, Tibetan Monastery, Vashisht Hot Sulfur Springs and Old Manali cafes." },
      { day: "Day 6", desc: "Morning breakfast, check out and drive back to Delhi Airport for flight back to Bangalore with cherished memories." }
    ],
    inclusions: [
      "AC vehicle for entire 6-day tour from Delhi to Delhi",
      "5 Nights accommodation in scenic valley view hotels",
      "Daily breakfast and dinner (MAP plan)",
      "Sightseeing per itinerary with driver allowance",
      "Rohtang/Solang Valley green tax & permits"
    ],
    exclusions: ["Adventure sports fees (paragliding/skiing)", "Heater charges", "Airfare"]
  },
  {
    id: "north-3",
    title: "Srinagar - Sonmarg - Gulmarg - Pahalgam",
    duration: "6 Days / 5 Nights",
    route: "Dal Lake → Gulmarg Gondola → Pahalgam Valley",
    price: 26500,
    priceDisplay: "Rs.26500/-",
    category: "north-india",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80",
    badge: "Heaven On Earth",
    highlights: [
      "Luxury Dal Lake Houseboat stay with Shikara boat ride",
      "Gulmarg Asia's Highest Gondola Cable Car ride (Phase 1 & 2)",
      "Pahalgam Betaab Valley, Aru Valley & Chandanwari",
      "Sonmarg Meadow of Gold & Thajiwas Glacier pony trek",
      "Mughal Gardens: Shalimar Bagh, Nishat Bagh & Chashme Shahi"
    ],
    itinerary: [
      { day: "Day 1", desc: "Flight from Bangalore to Srinagar Airport. Meet executive, transfer to Deluxe Houseboat on Dal Lake. 1-Hour sunset Shikara ride across floating gardens and lotus lakes." },
      { day: "Day 2", desc: "Full day excursion to Gulmarg (Meadow of Flowers). Ride the famous Gondola Cable Car up to Apharwat Peak snow station. Return to Srinagar hotel." },
      { day: "Day 3", desc: "Day trip to Sonmarg (Meadow of Gold). Witness sparkling Sindh river, alpine meadows, and optional pony trek to Thajiwas Glacier." },
      { day: "Day 4", desc: "Drive to Pahalgam (Valley of Shepherds) through saffron fields of Pampore and Apple orchards. Visit Betaab Valley and Aru Valley. Overnight in Pahalgam." },
      { day: "Day 5", desc: "Morning riverside stroll by Lidder River. Return to Srinagar and tour majestic Mughal Gardens (Nishat & Shalimar Bagh) and Shankaracharya Temple." },
      { day: "Day 6", desc: "Morning dry fruit and Kashmiri Pashmina shopping. Transfer to Srinagar Airport for flight back to Bangalore." }
    ],
    inclusions: [
      "1 Night Luxury Dal Lake Houseboat + 4 Nights Deluxe Hotel",
      "Daily breakfast and dinner",
      "All transfers by dedicated private non-AC cab (AC not allowed in hills)",
      "1-Hour Shikara ride on Dal Lake",
      "Toll taxes, driver charges and union permits"
    ],
    exclusions: ["Gondola cable car ticket", "Pahalgam local union cab", "Pony rides"]
  },
  {
    id: "north-4",
    title: "Ahmedabad, Dwarka, Somnath, Statue of Unity, Omkareshwar, and Ujjain",
    duration: "11 Nights, 12 Days",
    route: "Ahmedabad, Dwarka, Somnath, Statue of Unity, Omkareshwar, and Ujjain",
    price: 55000,
    priceDisplay: "Rs.55,000/-",
    category: "north-india",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    badge: "Jyotirlinga & Heritage",
    highlights: [
      "Dwarkadhish Jagat Mandir, Bet Dwarka boat ferry & Nageshwar Jyotirlinga",
      "Somnath First Jyotirlinga oceanfront darshan & Sound and Light Show",
      "World's Tallest 182m Statue of Unity & Unity Glow Garden in Kevadia",
      "Sacred Omkareshwar & Mamleshwar Jyotirlinga on Holy Narmada River",
      "Mahakaleshwar Jyotirlinga, Kaal Bhairav & Ram Ghat in sacred Ujjain",
      "Sabarmati Gandhi Ashram, Akshardham Temple, Rani ki Vav & Modhera Sun Temple"
    ],
    itinerary: [
      { day: "Day 1", desc: "Ahmedabad arrival, Sabarmati Ashram, shopping, Akshardham Temple." },
      { day: "Day 2", desc: "Mathru Gaya, Rani ki Vav, Modhera Sun Temple, overnight in Ahmedabad." },
      { day: "Day 3", desc: "Travel to Dwarka, Dwarkadheesh Temple, Sharda Peeth." },
      { day: "Day 4", desc: "Bet Dwarka, Rukmini Temple, Nageshwar Jyotirlinga, overnight in Dwarka." },
      { day: "Day 5", desc: "Porbandar, Kirti Mandir, Somnath Temple, Sound and Light Show." },
      { day: "Day 6", desc: "Old Somnath Temple, Bhalka Tirth, Gayatri Mandir, Optional Gir Safari." },
      { day: "Day 7", desc: "Nishkalank Mahadev Temple, journey to Bhavnagar for overnight." },
      { day: "Day 8", desc: "Vadodara, Statue of Unity, Light Show, Unity Glow Garden." },
      { day: "Day 9", desc: "Travel to Indore, check-in, free time for relaxation or shopping." },
      { day: "Day 10", desc: "Omkareshwar Jyotirlinga, travel to Ujjain for overnight stay." },
      { day: "Day 11", desc: "Mahakaleshwar, Kaal Bhairav, Ram Ghat, various Ujjain temples." },
      { day: "Day 12", desc: "Breakfast, transfer to Indore Airport, departure with memories." }
    ],
    inclusions: [
      "To & Fro Flight Tickets from Bangalore",
      "Stay on Double sharing basis in AC Deluxe Hotels",
      "Breakfast, Lunch and Dinner (South Indian / Pure Veg)",
      "2X2 Semi Sleeper AC Coach for all ground transfers",
      "Dedicated Tour Manager & all driver expenses"
    ],
    exclusions: [
      "Auto, Jeep, Boat, Entrance Tickets",
      "Pooja, Kriya on actuals",
      "Jungle Safaris (Gir National Park)",
      "Temple Entry Fees & Local Taxis"
    ]
  },
  {
    id: "north-5",
    title: "Jaipur - Jodhpur - Udaipur - Pushkar",
    duration: "6 Days / 5 Nights",
    route: "Jaipur Pink City → Jodhpur Blue City → Udaipur Lake City",
    price: 23500,
    priceDisplay: "Rs.23500/-",
    category: "north-india",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    badge: "Royal Rajputana",
    highlights: [
      "Udaipur City Palace & Lake Pichola sunset boat cruise",
      "Jodhpur massive Mehrangarh Fort & Jaswant Thada",
      "Pushkar Sacred Lake & World's only Lord Brahma Temple",
      "Jaipur Amber Fort, Hawa Mahal & Albert Hall Museum",
      "Authentic Rajasthani folk dance & Dal Baati Churma dinner"
    ],
    itinerary: [
      { day: "Day 1", desc: "Flight from Bangalore to Jaipur. Check-in and explore Albert Hall Museum, Birla Temple and colorful Bapu Bazaar markets. Overnight in Jaipur." },
      { day: "Day 2", desc: "Full day Jaipur sightseeing: Amber Fort with elephant/jeep ride, Jal Mahal, City Palace, Jantar Mantar and Hawa Mahal." },
      { day: "Day 3", desc: "Drive to Pushkar. Visit sacred Brahma Temple and holy Pushkar Lake. Continue drive to Jodhpur (the Blue City). Check-in and relax." },
      { day: "Day 4", desc: "Visit imposing Mehrangarh Fort standing 400ft above city, and marble cenotaph Jaswant Thada. Afternoon drive to romantic Udaipur. Stay in Udaipur." },
      { day: "Day 5", desc: "Full day Udaipur: Magnificent City Palace complex, Saheliyon-ki-Bari, Jagdish Temple, and evening boat cruise on Lake Pichola past Lake Palace." },
      { day: "Day 6", desc: "Morning breakfast, shopping for miniature paintings and silver jewelry, and drop at Udaipur Airport for return flight to Bangalore." }
    ],
    inclusions: [
      "AC private sedan/suv with professional chauffeur",
      "5 Nights accommodation in heritage/deluxe hotels",
      "Daily buffet breakfast",
      "Lake Pichola shared boat ride ticket",
      "All interstate taxes, tolls and driver night allowance"
    ],
    exclusions: ["Monument entry fees", "Lunches & dinners", "Camera charges"]
  },
  {
    id: "north-6",
    title: "Amritsar Golden Temple & Wagah Border",
    duration: "3 Days / 2 Nights",
    route: "Amritsar Golden Temple → Wagah Border → Jallianwala Bagh",
    price: 11500,
    priceDisplay: "Rs.11500/-",
    category: "north-india",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    badge: "Heritage & Devotion",
    highlights: [
      "Sri Harmandir Sahib (Golden Temple) Day & Night Palki Sahib Aarti",
      "Guru Ka Langar Seva (world's largest community kitchen)",
      "High-energy Beating Retreat Ceremony at Indo-Pak Wagah Border",
      "Historical Jallianwala Bagh Martyr's Memorial & Amar Jyoti",
      "Durgiana Temple & famous Amritsari Kulcha food trail"
    ],
    itinerary: [
      { day: "Day 1", desc: "Flight from Bangalore to Sri Guru Ram Dass Jee Amritsar Airport. Check-in and evening visit to the Golden Temple illuminated against the sacred Sarovar. Witness Night Sukhasan ceremony." },
      { day: "Day 2", desc: "Morning visit to Jallianwala Bagh and Partition Museum. Afternoon drive to Attari-Wagah Border to witness the goosebumps-inducing patriotic Beating Retreat flag ceremony." },
      { day: "Day 3", desc: "Morning visit to Durgiana Temple and Gobindgarh Fort. Taste authentic Amritsari kulchas and pinni sweets. Afternoon airport transfer for return flight to Bangalore." }
    ],
    inclusions: [
      "Bangalore to Amritsar flight guidance & AC airport transfers",
      "2 Nights deluxe hotel accommodation near Golden Temple",
      "Daily breakfast",
      "Special Wagah Border reserved seating coordination",
      "All toll, parking and driver allowances"
    ],
    exclusions: ["Airfare", "Personal donations & offerings"]
  },
  {
    id: "northeast-india-12days",
    title: "North East India Unveiled: A 12-Day Adventure",
    duration: "11 Nights, 12 Days",
    route: "Guwahati, Shillong, Dawki, Mawlynnong, Cherrapunjee, Kaziranga, Bomdila, Tawang, Dirang Valley",
    price: 74999,
    priceDisplay: "Rs.74,999/-",
    category: "north-india",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80",
    badge: "Three Sisters Grand Tour",
    description:
      "North East India Unveiled: 12-Day Tour of Assam, Meghalaya & Arunachal. Explore the mystical lands, ancient temples, lush landscapes, and diverse wildlife of Guwahati, Shillong, Cherrapunjee, Kaziranga, Bomdila, and Tawang.",
    highlights: [
      "Kamakhya Devi Temple sacred Shakti Peetha darshan in Guwahati",
      "Shillong 'Scotland of the East', Umium Lake & Don Bosco Museum",
      "Dawki crystal-clear Umngot River & Mawlynnong (Asia's Cleanest Village)",
      "Cherrapunjee Nohkalikai Falls, Seven Sisters Falls & Mawsmai Caves",
      "Kaziranga National Park Elephant & Jeep Safaris (One-Horned Rhinos)",
      "Sela Pass (13,700 ft), Jaswantgarh & Iconic Tawang Buddhist Monastery",
      "Dirang Valley Kiwi Garden & Jung Water Fall"
    ],
    itinerary: [
      { day: "Day 1", desc: "Arrive in Guwahati, visit the sacred Kamakhya Temple, and check into your hotel for the night." },
      { day: "Day 2", desc: "Travel to Shillong, explore Umium Lake, Don Bosco Museum, and Wards Lake, enjoying the scenic beauty." },
      { day: "Day 3", desc: "Visit the crystal-clear Umngot River in Dawki and explore Mawlynnong, Asia's Cleanest Village, with its Living Root Bridge." },
      { day: "Day 4", desc: "Full-day excursion to Cherrapunjee, witnessing Nohkalikai Falls, Seven Sisters Falls, Mawsmai Caves, Elephant Falls, and Shillong View Point." },
      { day: "Day 5", desc: "Travel to Kaziranga National Park, a UNESCO World Heritage Site, and settle into your hotel." },
      { day: "Day 6", desc: "Experience early morning Elephant Safari and an afternoon Jeep Safari for wildlife viewing in Kaziranga National Park." },
      { day: "Day 7", desc: "Drive to Bomdila, visiting Tipi Orchidarium and Nag Mandir en route." },
      { day: "Day 8", desc: "Journey to Tawang, crossing Sela Pass, admiring Paradise Lake, and paying homage at Jaswantgarh." },
      { day: "Day 9", desc: "Explore Penga Ten TSO Lake, War Memorial, and the iconic Tawang Monastery, experiencing Tawang's spiritual and natural beauty." },
      { day: "Day 10", desc: "Drive back to Bomdila, stopping at Jung Water Fall and Kiwi Garden in Dirang Valley." },
      { day: "Day 11", desc: "Drive back to Guwahati, with an evening at leisure for relaxation or last-minute souvenir shopping." },
      { day: "Day 12", desc: "Enjoy breakfast before transferring to Guwahati Airport for your onward journey, concluding the North East adventure." }
    ],
    inclusions: [
      "Two-way flights from Bangalore to Guwahati & Guwahati to Bangalore",
      "Comfortable AC 12 Seater Urbania or 22 Seater AC Coach for ground transfers",
      "South Indian - Breakfast, Lunch, Dinner & Tea, Filter Coffee",
      "03 liters of mineral water per person per day",
      "Twin sharing basis AC Deluxe Rooms for all overnight stays"
    ],
    exclusions: [
      "SUV Jeep/Elephant Safari & Jungle Safaris in Kaziranga (chargeable directly)",
      "Entrance Fees/VIP PASS for Kamakhya Devi, monasteries, waterfalls, hanging bridges, etc.",
      "Auto/Vans/Jeep/Boat rides where coaches cannot reach (cost to be borne by guests)",
      "Temple entrance fees/VIP Darshan/Pooja rituals ceremonies",
      "06 Sharing Innova vehicle for Bumla Pass from Tawang",
      "Insurance and laundry"
    ]
  }
];

/* ─────────────────────────────────────────────────────────────
   3. PILGRIMAGE PACKAGES
───────────────────────────────────────────────────────────── */
export const pilgrimagePackages = [
  {
    id: "pilgrim-1",
    title: "Shirdi Sai Baba VIP Darshan",
    duration: "2 Days / 1 Night",
    route: "Bangalore → Pune/Shirdi → Shani Shingnapur",
    price: 14500,
    priceDisplay: "Rs.14500/-",
    category: "pilgrimage",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular Yatra",
    highlights: [
      "Guaranteed Sai Baba VIP Darshan Pass with authorized badge",
      "Visit Samadhi Mandir, Dwarkamai, Gurusthan, Chavadi & Lendi Baug",
      "Shani Shingnapur Swayambhu Shani Dev Temple Darshan",
      "Direct flight from Bangalore with sanitized AC cab transfers",
      "Star hotel accommodation right next to Temple Complex"
    ],
    itinerary: [
      { day: "Day 1", desc: "Early morning direct flight from Bangalore to Shirdi/Pune airport. VIP pickup and fast check-in at deluxe hotel. Afternoon guaranteed VIP Darshan of Shri Sai Baba Samadhi. Evening attend divine Dhoop Aarti. Overnight in Shirdi." },
      { day: "Day 2", desc: "Optional early morning Kakad Aarti. After breakfast, proceed to Shani Shingnapur for holy oil offering. Return transfer to Shirdi/Pune airport for flight back to Bangalore." }
    ],
    inclusions: [
      "Roundtrip Bangalore flights / train options",
      "1 Night AC Deluxe Hotel stay",
      "All Satvik buffet meals (Breakfast, Lunch, Dinner)",
      "VIP Temple Darshan Passes",
      "Dedicated tour guide and 24/7 on-ground executive"
    ],
    exclusions: ["Special personal Abhishek fees", "Shopping & room service"]
  },
  {
    id: "pilgrim-2",
    title: "Varanasi (Kashi) - Prayagraj - Ayodhya - Gaya",
    duration: "6 Days / 5 Nights",
    route: "Kashi Vishwanath → Ayodhya Ram Mandir → Gaya Pind Daan",
    price: 21500,
    priceDisplay: "Rs.21500/-",
    category: "pilgrimage",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    badge: "Mokshapuri Yatra",
    highlights: [
      "Kashi Vishwanath Jyotirlinga Corridor & Annapurna Temple",
      "Spectacular Dashashwamedh Ghat Evening Ganga Aarti by boat",
      "Ayodhya Ram Janmabhoomi Balak Ram Lalla & Hanuman Garhi",
      "Prayagraj Triveni Sangam holy snan & Alopi Devi Shakti Peeth",
      "Gaya Vishnupad Temple & sacred Pind Daan Vedic priest arrangements"
    ],
    itinerary: [
      { day: "Day 1", desc: "Arrival at Varanasi Airport from Bangalore. Hotel check-in. Evening private boat ride along sacred Ganga Ghats witnessing the majestic Maha Ganga Aarti. Stay in Varanasi." },
      { day: "Day 2", desc: "Early morning holy bath in Ganga. VIP Darshan of Kashi Vishwanath Jyotirlinga, Annapurna Mata, and Kal Bhairav. Visit Sarnath (where Buddha gave his first sermon)." },
      { day: "Day 3", desc: "Drive to Prayagraj (Allahabad). Holy dip at Triveni Sangam (Ganga, Yamuna & Saraswati). Visit Anand Bhavan and Bade Hanuman Temple. Drive to Ayodhya. Overnight in Ayodhya." },
      { day: "Day 4", desc: "Full day in sacred Ayodhya: Divine Darshan of Ram Lalla at newly consecrated Ram Mandir, Hanuman Garhi, Kanak Bhavan, and holy Sarayu River Aarti." },
      { day: "Day 5", desc: "Drive to Gaya. Perform sacred ancestral Pind Daan rituals at Phalgu River and Vishnupad Temple with verified south Indian purohits. Visit Mahabodhi Temple. Overnight in Bodhgaya." },
      { day: "Day 6", desc: "Drive back to Varanasi Airport for flight back to Bangalore with divine spiritual blessings." }
    ],
    inclusions: [
      "AC vehicle for all 6 days transfers and intercity travel",
      "5 Nights star AC hotel accommodation",
      "Daily pure vegetarian South Indian / Satvik meals",
      "Ganga boat ride tickets in Varanasi & Sangam boat in Prayagraj",
      "Experienced South Indian tour manager"
    ],
    exclusions: ["Pind Daan priest dakshina", "Flight tickets (arranged on request)"]
  },
  {
    id: "pilgrim-3",
    title: "Chardham Yatra (Haridwar - Kedarnath - Badrinath)",
    duration: "11 Days / 10 Nights",
    route: "Yamunotri → Gangotri → Kedarnath → Badrinath",
    price: 34500,
    priceDisplay: "Rs.34500/-",
    category: "pilgrimage",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    badge: "Ultimate Himalayan Yatra",
    highlights: [
      "All 4 Sacred Dhams: Yamunotri, Gangotri, Kedarnath & Badrinath",
      "Helicopter booking assistance for Kedarnath Darshan",
      "Haridwar Har Ki Pauri & Rishikesh Triveni Ghat Aarti",
      "Panch Prayag confluences (Devprayag, Rudraprayag, Karnaprayag)",
      "Senior citizen friendly pacing and hot water accommodations"
    ],
    itinerary: [
      { day: "Day 1", desc: "Bangalore to Delhi/Dehradun flight. Transfer to Haridwar. Evening Har Ki Pauri Ganga Aarti. Overnight in Haridwar." },
      { day: "Day 2", desc: "Haridwar to Barkot via Mussoorie and Kempty Falls. Rest and acclimatize for Yamunotri trek." },
      { day: "Day 3", desc: "Barkot to Yamunotri (trek/pony/doli) for holy bath at Surya Kund and Divya Shila Darshan. Return to Barkot." },
      { day: "Day 4", desc: "Drive from Barkot to Uttarkashi. Visit ancient Kashi Vishwanath Temple and Shakti Temple." },
      { day: "Day 5", desc: "Uttarkashi to Gangotri along Bhagirathi river gorge. Holy bath and Darshan of Mother Ganga. Return to Uttarkashi." },
      { day: "Day 6", desc: "Drive from Uttarkashi to Guptkashi/Phata via scenic Mandakini valley." },
      { day: "Day 7", desc: "Trek or Helicopter from Phata/Sirsi to Kedarnath. Evening Aarti and Darshan of Lord Shiva Jyotirlinga. Stay at Kedarnath." },
      { day: "Day 8", desc: "Morning Kedarnath Darshan. Descend to Phata and drive to Pipalkoti/Joshimath." },
      { day: "Day 9", desc: "Drive to holy Badrinath Dham. Take bath in Tapt Kund and attend divine Badrinarayan Darshan and Mana village (last Indian village)." },
      { day: "Day 10", desc: "Drive from Badrinath to Rishikesh. Visit Ram Jhula, Lakshman Jhula and Ganga Aarti." },
      { day: "Day 11", desc: "Morning return to Delhi/Dehradun Airport for return flight to Bangalore." }
    ],
    inclusions: [
      "10 Nights hotel/ashram accommodation with hot water",
      "Pure vegetarian meals throughout the yatra",
      "Customized 2x2 pushback tempo traveler / Innova transport",
      "Biometric registration and Yatra permit passes",
      "Experienced mountain drivers and tour escort"
    ],
    exclusions: ["Helicopter/Pony/Doli charges", "Personal porterage", "Airfare"]
  },
  {
    id: "pilgrim-4",
    title: "Puri Jagannath - Konark Sun Temple - Bhubaneswar",
    duration: "3 Days / 2 Nights",
    route: "Bhubaneswar → Puri Jagannath → Konark Sun Temple",
    price: 15500,
    priceDisplay: "Rs.15500/-",
    category: "pilgrimage",
    image: "/images/puri_jagannath_temple.jpg",
    badge: "Eastern Chardham",
    highlights: [
      "Shree Jagannath Temple VIP Darshan with panda escort",
      "Authentic Mahaprasad (56 Bhog) experience at Ananda Bazar",
      "UNESCO World Heritage Konark Sun Temple architectural marvel",
      "Golden Beach Puri & Chandrabhaga Beach holy sunrise",
      "Lingaraj Temple & Dhauli Shanti Stupa in Bhubaneswar"
    ],
    itinerary: [
      { day: "Day 1", desc: "Direct flight from Bangalore to Bhubaneswar Airport. Visit 11th-century Lingaraj Temple and Dhauli Peace Pagoda. Drive to Puri, check-in and evening Golden Beach stroll." },
      { day: "Day 2", desc: "Early morning sacred Darshan of Lord Jagannath, Balabhadra and Subhadra. Taste divine Mahaprasad. Afternoon drive along Marine Drive to UNESCO Konark Sun Temple. Return to Puri." },
      { day: "Day 3", desc: "Morning second Darshan or Gundicha Temple visit. Return drive to Bhubaneswar, visit Udayagiri & Khandagiri Caves, and board return flight to Bangalore." }
    ],
    inclusions: [
      "AC private car from Bhubaneswar pickup to drop",
      "2 Nights deluxe hotel accommodation in Puri",
      "Daily breakfast and dinner",
      "Jagannath Temple Darshan guidance",
      "All parking, toll and driver allowances"
    ],
    exclusions: ["Panda dakshina", "Monument entrance tickets", "Flight tickets"]
  },
  {
    id: "pilgrim-5",
    title: "Panch Jyotirlinga Tour (Maharashtra & Ujjain)",
    duration: "5 Days / 4 Nights",
    route: "Trimbakeshwar → Bhimashankar → Grishneshwar → Mahakaleshwar",
    price: 19500,
    priceDisplay: "Rs.19500/-",
    category: "pilgrimage",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    badge: "5 Sacred Jyotirlingas",
    highlights: [
      "Trimbakeshwar Jyotirlinga (source of holy Godavari River)",
      "Bhimashankar Jyotirlinga nestled in Western Ghat forests",
      "Grishneshwar Jyotirlinga (12th and last Jyotirlinga) & Ellora Caves",
      "Mahakaleshwar Jyotirlinga in Ujjain with Bhasma Aarti",
      "Omkareshwar Island Jyotirlinga on sacred Narmada River"
    ],
    itinerary: [
      { day: "Day 1", desc: "Flight from Bangalore to Mumbai/Pune. Drive to Trimbakeshwar for Jyotirlinga Darshan. Proceed to Shirdi for night stay." },
      { day: "Day 2", desc: "Morning Sai Baba Darshan in Shirdi. Drive to Grishneshwar Jyotirlinga and world heritage Ellora Caves. Evening train/drive toward Indore/Ujjain." },
      { day: "Day 3", desc: "Arrival in holy Ujjain. Visit Mahakaleshwar Temple, Harsiddhi Mata Shakti Peeth and Kaal Bhairav Temple. Attend evening Sandhya Aarti." },
      { day: "Day 4", desc: "Witness early 4:00 AM sacred Bhasma Aarti at Mahakaleshwar. Drive to sacred Omkareshwar Jyotirlinga on Mandhata Island. Return to Indore." },
      { day: "Day 5", desc: "Visit Bhimashankar Jyotirlinga near Pune and board evening return flight back to Bangalore with immense spiritual merit." }
    ],
    inclusions: [
      "AC vehicle for all transfers and temple circuits",
      "4 Nights accommodation in AC hotels",
      "Daily vegetarian breakfast",
      "Experienced pilgrimage coordinator",
      "All toll, parking and interstate permits"
    ],
    exclusions: ["VIP Bhasma Aarti pass fees", "Special pooja tickets"]
  },
  {
    id: "pilgrim-6",
    title: "Nepal, Ayodhya & Kashi Pilgrimage Tour",
    duration: "13 Nights, 14 Days",
    route: "Ayodhya, Lumbini, Pokhara, Muktinath, Kathmandu, Chitwan, Janakpur, Deoghar, Gaya, Varanasi",
    price: 65000,
    priceDisplay: "Rs.65,000/-",
    category: "pilgrimage",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80",
    badge: "Divine Maha Yatra",
    highlights: [
      "Sri Ram Janam Bhoomi & Hanuman Garhi darshan in sacred Ayodhya",
      "Lumbini birthplace of Lord Buddha & Maya Devi Temple",
      "Adventurous Jeep journey to sacred Muktinath Temple & 108 holy spouts bath",
      "Pashupatinath Temple & Manokamana Temple ropeway in Nepal",
      "Chitwan National Park & Janakpur Palace evening Aarti",
      "Baidyanath Jyotirlinga Sparsh Darshan in Deoghar",
      "Gaya Shraddha Pitrukarya rituals & sacred Vishnupad Temple",
      "Kashi Vishwanath Jyotirlinga, holy Ganga Snan & famous Ganga Aarti"
    ],
    itinerary: [
      { day: "Day 1", desc: "Arrive in Ayodhya, check into your hotel, and explore the sacred sites of Sri Ram Janam Bhoomi and Hanuman Garhi." },
      { day: "Day 2", desc: "Journey to Lumbini, the birthplace of Buddha, exploring sacred sites after completing immigration formalities." },
      { day: "Day 3", desc: "Travel from Lumbini to the beautiful city of Pokhara, nestled amidst the stunning Himalayan foothills." },
      { day: "Day 4", desc: "Embark on an adventurous jeep journey from Pokhara to Muktinath, staying overnight at Jomsom." },
      { day: "Day 5", desc: "Return from Muktinath to Pokhara, followed by an afternoon of local sightseeing around Phewa Lake and temples." },
      { day: "Day 6", desc: "Travel from Pokhara to Kathmandu, including a spiritual stop at Manokamana Temple by ropeway." },
      { day: "Day 7", desc: "Explore Kathmandu's spiritual and cultural heritage, including Pashupatinath Temple and Bhaktapur Durbar Square." },
      { day: "Day 8", desc: "Travel to Chitwan for an optional jungle safari or relaxation by the resort pool." },
      { day: "Day 9", desc: "Journey to Janakpur, visiting Dhanush Dham en route and witnessing the evening Aarti at Janakpur Palace." },
      { day: "Day 10", desc: "Long road journey from Janakpur to Deoghar, aiming for Sparsh Darshan at Baidyanath Jyotirlinga." },
      { day: "Day 11", desc: "Journey to Bodh Gaya for local sightseeing and a briefing on Gaya shradda Pithru Karya rituals." },
      { day: "Day 12", desc: "Perform Pitrukarya rituals in Gaya, visit Vishnupad and Shaktipeeth, then travel to Varanasi." },
      { day: "Day 13", desc: "Experience the spiritual essence of Varanasi with a Ganga Snan, temple visits, and the famous Ganga Aarti." },
      { day: "Day 14", desc: "Final Darshan or souvenir shopping in Kashi, followed by departure from Varanasi Airport." }
    ],
    inclusions: [
      "Two-way flight tickets (Bangalore to Lucknow & Varanasi to Bangalore)",
      "Comfortable AC Coach for ground travel",
      "Scorpio SUV Jeep for Muktinath journey",
      "Twin sharing basis AC Deluxe Rooms (deluxe stay in Jomsom)",
      "South Indian - Breakfast, Lunch, Dinner & Tea, Filter Coffee",
      "03 liters mineral water per day per person"
    ],
    exclusions: [
      "VIP Darshan & Ritual Ceremonies (Rudra Chamkam at Pashupatinath, Pinda Dhana at Gaya, Sparsha Darshana)",
      "Manokamana Cable Car charges & attraction entrance tickets",
      "Boating charges in Pokhara or for Ganga Aarti",
      "Mountain Flights and auto fare for non-motorable ways"
    ]
  }
];

export const internationalPackages = [
  {
    id: "bhutan-thimphu-paro",
    title: "Magical Bhutan – Phuentsholing, Thimphu, Punakha, Paro",
    duration: "6 Nights, 7 Days",
    route: "Phuentsholing, Thimphu, Punakha, Paro, Bagdogra",
    price: 60000,
    priceDisplay: "Rs.60,000/-",
    image: "/images/bhutan_tigers_nest.jpg",
    badge: "Land of Thunder Dragon",
    description:
      "Embark on a 7-day journey through Bhutan's stunning landscapes, ancient monasteries, and vibrant culture. Explore Phuentsholing, Thimphu, Punakha, and Paro, including Tiger's Nest Monastery.",
    highlights: [
      "Two-way airfare from Bangalore to Bagdogra (BLR – IXB – BLR)",
      "Handpicked 3-Star hotels across Phuentsholing, Thimphu, and Paro",
      "Full board meals with dedicated South Indian kitchen team",
      "Tiger's Nest Monastery (Taktsang) cliffside hike or Chele La Pass",
      "Punakha Dzong, Dochula Pass 108 Chortens & Buddha Dordenma",
      "Complete Sustainable Development Fee (SDF) & Bhutan entry permits included"
    ],
    itinerary: [
      { day: "Day 1", desc: "Fly to Bagdogra, transfer to Phuentsholing and complete permit formalities." },
      { day: "Day 2", desc: "Scenic drive to Thimphu, visit Sangye Migyur Ling Monastery and National Library." },
      { day: "Day 3", desc: "Day trip to Punakha, explore Dochula Pass, Punakha Dzong, and Chimi Lhakhang." },
      { day: "Day 4", desc: "Visit Buddha Dordenma, Memorial Chorten, and learn about Bhutanese arts before transferring to Paro." },
      { day: "Day 5", desc: "Choose between an exhilarating hike to Tiger's Nest Monastery or a scenic drive to Chele La Pass." },
      { day: "Day 6", desc: "Explore Paro's historical sites like the National Museum and Kyichu Lhakhang, then drive to Phuentsholing." },
      { day: "Day 7", desc: "Enjoy breakfast, check out from Phuentsholing, and transfer to Bagdogra for your flight to Bangalore." }
    ],
    inclusions: [
      "Two-way flight tickets from Bangalore to Bagdogra (BLR – IXB – BLR)",
      "Handpicked 3-Star hotels on twin-sharing basis in Phuentsholing, Thimphu, and Paro",
      "Complete Sustainable Development Fee (SDF) and Bhutan entry permit processing",
      "Daily Breakfast, Lunch, and Dinner (Full Board AP Plan)",
      "Dedicated South Indian kitchen cook travelling with the group",
      "Friendly, experienced Kannada-speaking tour manager",
      "All monument, dzong, museum, and park entrance fees included",
      "Dedicated private vehicle for all ground transfers, tolls, and parking"
    ],
    exclusions: [
      "Personal expenses (laundry, phone calls, room service, mineral water)",
      "Travel insurance"
    ]
  },
  {
    id: "dubai-abu-dhabi-extravaganza",
    title: "Dazzling Dubai & Abu Dhabi Extravaganza",
    duration: "4N/5D",
    route: "Burj Khalifa – Desert Safari – Marina Dhow Cruise – Grand Mosque",
    price: 44500,
    priceDisplay: "Rs.44,500/-",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80",
    badge: "Luxury Getaway",
    description:
      "Experience the ultimate Arabian luxury with Burj Khalifa 124th floor access, exhilarating red dunes desert safari with BBQ dinner, Dubai Marina Dhow cruise, and Abu Dhabi BAPS Hindu Mandir & Sheikh Zayed Grand Mosque tour.",
    highlights: [
      "Burj Khalifa 124th floor observation deck & Dubai Fountain show",
      "Exhilarating Red Dunes 4x4 Desert Safari with BBQ buffet dinner & Tanoura show",
      "Dubai Marina luxury Dhow cruise dinner with skyline views",
      "Abu Dhabi Sheikh Zayed Grand Mosque & BAPS Hindu Mandir visit",
      "Dubai Mall, Gold Souk & Spice Souk traditional shopping"
    ],
    itinerary: [
      { day: "Day 1", desc: "Arrival in Dubai, check-in to 4-star hotel; evening Marina Dhow Cruise with dinner." },
      { day: "Day 2", desc: "Half-day Dubai city tour, Dubai Mall, and 124th Floor Burj Khalifa observation deck with fountain show." },
      { day: "Day 3", desc: "Morning leisure; afternoon 4x4 Red Dunes Desert Safari with dune bashing, camel ride & BBQ buffet." },
      { day: "Day 4", desc: "Full-day Abu Dhabi tour visiting Sheikh Zayed Grand Mosque, BAPS Hindu Mandir & Ferrari World photo stop." },
      { day: "Day 5", desc: "Souk shopping (Gold Souk & Spice Souk) and airport departure transfer." }
    ],
    inclusions: [
      "4-Star luxury hotel stay with daily buffet breakfast",
      "Burj Khalifa 124th floor non-prime ticket included",
      "Desert Safari with BBQ dinner, tanoura dance & belly show",
      "Full-day Abu Dhabi tour with Grand Mosque & BAPS Mandir visit",
      "Return airport transfers on private basis"
    ],
    exclusions: ["UAE Tourist Visa & insurance", "Tourism Dirham fee paid directly at hotel"]
  },
  {
    id: "bali-island-cultural-escape",
    title: "Tropical Bali – Ubud, Kuta & Tanah Lot Temple",
    duration: "5N/6D",
    route: "Denpasar – Ubud – Kintamani Volcano – Tanah Lot – Nusa Penida",
    price: 36900,
    priceDisplay: "Rs.36,900/-",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80",
    badge: "Island Paradise",
    description:
      "Explore the Island of the Gods: lush emerald rice terraces of Tegallalang, sacred sea temple of Tanah Lot, Mount Batur volcano views, thrilling Bali jungle swing, and pristine crystal beaches of Nusa Penida.",
    highlights: [
      "Nusa Penida speed boat excursion: Kelingking T-Rex Beach & Angel's Billabong",
      "Ubud Tegallalang rice terraces & famous Bali jungle swing",
      "Iconic Tanah Lot Sea Temple sunset & Uluwatu Kecak fire dance",
      "Mount Batur volcano viewpoint & Kintamani coffee plantations",
      "Tanjung Benoa water sports (Banana boat included)"
    ],
    itinerary: [
      { day: "Day 1", desc: "Arrival at Bali Ngurah Rai Airport, flower garland welcome, transfer to hotel in Kuta." },
      { day: "Day 2", desc: "Ubud highlights: Celuk silver village, Tegalalang rice terrace & famous Bali jungle swing." },
      { day: "Day 3", desc: "Kintamani volcano view with coffee plantation visit; evening Uluwatu sunset temple & Kecak fire dance." },
      { day: "Day 4", desc: "Full-day speed boat excursion to Nusa Penida: Kelingking T-Rex beach, Broken Beach & Angel's Billabong." },
      { day: "Day 5", desc: "Water sports at Tanjung Benoa (Banana boat included); evening sunset visit to Tanah Lot Sea Temple." },
      { day: "Day 6", desc: "Morning Balinese massage / souvenir shopping and departure transfer." }
    ],
    inclusions: [
      "5 Nights accommodation in 4-star resort with daily breakfast",
      "Nusa Penida West island tour by speed boat with local lunch",
      "Tanjung Benoa water sports and Bali swing entry ticket",
      "Private AC vehicle with English-speaking driver cum guide"
    ],
    exclusions: ["International flights", "Indonesia Visa on Arrival (approx $35)"]
  },
  {
    id: "sri-lanka-ramayana-trail",
    title: "Scenic Sri Lanka – Ramayana Trail & Tea Country",
    duration: "5N/6D",
    route: "Colombo – Kandy – Nuwara Eliya – Bentota Beach",
    price: 29500,
    priceDisplay: "Rs.29,500/-",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=800&auto=format&fit=crop&q=80",
    badge: "Ramayana Heritage",
    description:
      "Retrace the historic Ramayana trail visiting Munneswaram Temple, Kandy Temple of the Tooth, Ashok Vatika (Hakgala Gardens), and Ravana Falls, surrounded by misty Ceylon tea estates and golden Bentota beaches.",
    highlights: [
      "Munneswaram Shiva Temple & Sacred Temple of the Tooth Relic in Kandy",
      "Ashok Vatika (Seetha Amman Temple) & Ravana Falls in Nuwara Eliya",
      "Misty Ceylon tea plantation tour & Peradeniya Royal Botanical Gardens",
      "Madu River mangrove boat safari & Kosgoda turtle hatchery in Bentota",
      "Colombo city orientation, Pettah market & Independence Square"
    ],
    itinerary: [
      { day: "Day 1", desc: "Arrival at Colombo airport, visit Munneswaram Shiva Temple and drive to cultural capital Kandy." },
      { day: "Day 2", desc: "Kandy Temple of the Sacred Tooth Relic, Peradeniya Royal Botanical Gardens, and cultural dance show." },
      { day: "Day 3", desc: "Scenic hill country drive to Nuwara Eliya, visit tea plantation & factory, Seetha Amman Temple (Ashok Vatika)." },
      { day: "Day 4", desc: "Visit Ravana Ella falls and Ravana caves, transfer to golden palm-fringed beaches of Bentota." },
      { day: "Day 5", desc: "Madu River mangrove boat safari, Kosgoda turtle hatchery, and evening relaxation on Bentota beach." },
      { day: "Day 6", desc: "Colombo city orientation & shopping (Pettah, Independence Square), transfer to airport." }
    ],
    inclusions: [
      "5 Nights in star-category hotels on MAP (Breakfast & Dinner) plan",
      "All Ramayana heritage sites entrance and sightseeing permits",
      "Private AC luxury coach with experienced English/Tamil-speaking chauffeur",
      "Madu river boat safari included"
    ],
    exclusions: ["Sri Lanka ETA visa fee", "Personal expenses"]
  }
];

/* Compatibility aliases */
export const shirdiPackages = pilgrimagePackages;
export const kashiPackages = pilgrimagePackages;
export const specialPackages = northIndianPackages;

export const trustBadges = [
  { title: "Customized Packages", desc: "Tailored to your family size, budget & convenience" },
  { title: "Flight & Train Options", desc: "Direct flights from Bangalore with priority check-in" },
  { title: "8+ Years Experience", desc: "Organizing successful spiritual yatras since 2018" },
  { title: "2,00,000+ Happy Pilgrims", desc: "Thousands of senior citizens & families served" },
  { title: "24/7 Dedicated Support", desc: "On-ground tour coordinators & 24/7 helpline" },
  { title: "Best Price Guarantee", desc: "Complete transparency with zero hidden charges" }
];

export const googleReviews = [
  {
    id: 1,
    name: "Ramesh Venkatesh",
    location: "Bangalore",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent arrangement for Shirdi 2 Days flight tour! From Bangalore airport pickup till drop, everything was clockwork precision. Special thanks to Lavanya for VIP darshan passes for our elderly parents.",
    tour: "Shirdi 2 Days Tour"
  },
  {
    id: 2,
    name: "Meenakshi Sundaram",
    location: "Mysore",
    rating: 5,
    date: "1 month ago",
    text: "We booked the Kashi, Gaya & Ayodhya 6-day package. The priest arrangement for Pind Daan in Gaya was outstanding and heartfelt. Delicious satvik south Indian food provided throughout. Highly recommended!",
    tour: "Kashi, Gaya, Ayodhya Tour"
  },
  {
    id: 3,
    name: "Anand Kulkarni",
    location: "Bangalore",
    rating: 5,
    date: "3 weeks ago",
    text: "Puri Jagannath tour was spiritually uplifting. Clean star hotels, AC private innova, and our tour guide ensured seamless temple entry without any hassles. Radient Expeditions is truly trustworthy!",
    tour: "Puri Jagannath Tour"
  },
  {
    id: 4,
    name: "Padma & Sridhar Rao",
    location: "Whitefield, Bangalore",
    rating: 5,
    date: "1 month ago",
    text: "Best pilgrimage travel agency in Bangalore. We have completed 4 yatras with them (Shirdi, Ayodhya, Gujarat Dwarka, and Nepal). Outstanding service, always on time, very transparent pricing.",
    tour: "Gujarat Dwarka Tour"
  }
];

export const pilgrimDestinations = [
  {
    id: "shirdi-dest",
    name: "Shirdi Sai Samadhi",
    state: "Maharashtra",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=500&q=80",
    description: "Abode of Shri Sai Baba with daily Kakad and Dhoop Aartis."
  },
  {
    id: "kashi-dest",
    name: "Kashi Vishwanath",
    state: "Varanasi, UP",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=500&q=80",
    description: "Eternal city on the banks of Holy River Ganga with 12 Jyotirlingas."
  },
  {
    id: "ayodhya-dest",
    name: "Ayodhya Ram Mandir",
    state: "Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=500&q=80",
    description: "Sacred birthplace of Lord Rama with majestic newly built temple."
  },
  {
    id: "puri-dest",
    name: "Puri Jagannath",
    state: "Odisha",
    image: "/images/puri_jagannath_temple.jpg",
    description: "One of the sacred Chardham shrines facing the Bay of Bengal."
  },
  {
    id: "dwarka-dest",
    name: "Dwarka & Somnath",
    state: "Gujarat",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=500&q=80",
    description: "Kingdom of Lord Krishna and the first eternal Jyotirlinga."
  },
  {
    id: "rishikesh-dest",
    name: "Haridwar & Rishikesh",
    state: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=500&q=80",
    description: "Gateway to the Himalayas, Ganga Aarti and meditation ashrams."
  }
];

export const galleryImages = [
  {
    id: 1,
    title: "Shirdi Sai Baba Group Yatra",
    category: "Shirdi",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Kashi Dashashwamedh Ganga Aarti",
    category: "Kashi",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Ayodhya Ram Mandir Pilgrims",
    category: "Ayodhya",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Puri Jagannath Temple Darshan",
    category: "Puri",
    image: "/images/puri_jagannath_temple.jpg"
  },
  {
    id: 5,
    title: "Jaipur Hawa Mahal Tour Group",
    category: "Special",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Somnath Temple Evening Aarti",
    category: "Special",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Shirdi Group Departure – Bangalore Pilgrims",
    category: "Shirdi",
    image: "https://images.unsplash.com/photo-1609766857776-c0bb5a3fe658?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Kashi Vishwanath Jyotirlinga Darshan",
    category: "Kashi",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Ayodhya Ram Mandir – Grand Entry",
    category: "Ayodhya",
    image: "https://images.unsplash.com/photo-1664575599736-c5197c684b96?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Puri Beach Sunrise – Group Tour",
    category: "Puri",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "Chardham Yatra – Kedarnath Trek",
    category: "Special",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    title: "Rameshwaram – Agni Tirtham Holy Dip",
    category: "Special",
    image: "https://images.unsplash.com/photo-1572448862527-d3c904757de6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    title: "Shirdi Samadhi Mandir Prayers",
    category: "Shirdi",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    title: "Varanasi Boat Ride at Dawn",
    category: "Kashi",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    title: "Tirupati Balaji Temple Darshan",
    category: "Special",
    image: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    title: "Puri Jagannath Rath Yatra Celebration",
    category: "Puri",
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17,
    title: "Kedarnath Temple Snow View",
    category: "Special",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    title: "Group Pilgrims at Ayodhya Ghats",
    category: "Ayodhya",
    image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?auto=format&fit=crop&w=800&q=80"
  }
];
