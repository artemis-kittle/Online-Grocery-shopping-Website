export const productCategoryList = [
  {
    id: 1,
    category: "Dairy Products",
    subcategories: [
      {
        id: "milk",
        name: "Milk",
      },
      {
        id: "yogurt",
        name: "Yogurt",
      },
      {
        id: "eggs",
        name: "Eggs",
      },
      {
        id: "cheese",
        name: "Cheese",
      },
      {
        id: "cream",
        name: "Cream, Custard and Desserts",
      },
    ],
  },
  {
    id: 2,
    category: "Fruits and vegetables",
    subcategories: [
      {
        id: "fruits",
        name: "Fruits",
      },
      {
        id: "vegetables",
        name: "Vegetables",
      },
      {
        id: "organic",
        name: "Organic",
      },
      {
        id: "salad",
        name: "Salad",
      },
    ],
  },
  {
    id: 3,
    category: "Drinks",
    subcategories: [
      {
        id: "cold",
        name: "Cold Drinks",
      },
      {
        id: "juice",
        name: "Juice",
      },
    ],
  },
  {
    id: 4,
    category: "Cosmetic",
    subcategories: [
      {
        id: "lotion",
        name: "Lotions",
      },
      {
        id: "produkt",
        name: "Grooming",
      },
    ],
  },
  {
    id: 5,
    category: "Baby",
    subcategories: [
      {
        id: "food",
        name: "Baby Food",
      },
      {
        id: "toys",
        name: "Baby Toys",
      },
      {
        id: "babyclo",
        name: "Baby Clothing",
      },
    ],
  },

];

 export const productList = [
  {
    id: "01",
    name: "Skim Milk",
    price: 5.00,
    quantity: 10,
    subcategoryId: 'milk',
    imageLink: "./dairy/skimmilk.png",
  },
  {
    id: "02",
    name: "Full Cream Milk",
    price: 7.00,
    quantity: 10,
    subcategoryId: 'milk',
    imageLink:"./dairy/bluemilk.png",
  },
  {
    id: "03",
    name: "Blueberry Yogurt",
    price: 5.00,
    quantity: 20,
    subcategoryId: 'yogurt',
    imageLink: "./dairy/blueyogurt.png",
  },
  {
    id: "04",
    name: "Cheese",
    price: 3.00,
    quantity: 50,
    subcategoryId: 'cheese',
    imageLink:"./dairy/cheese.png",
  },
  {
    id: "05",
    name: "Eggs",
    price: 2.00,
    quantity: 20,
    subcategoryId: 'eggs',
    imageLink:"./dairy/egg.jpeg",
  },

  {
    id: "06",
    name: "Chocolate Ice Cream",
    price: 10.00,
    subcategoryId: 'cream',
    quantity: 20,
    imageLink:"./dairy/icecream.png",
  },
  {
    id: "07",
    name: "Mixed Ice Cream",
    price: 15.00,
    subcategoryId: 'cream',
    quantity: 30,
    imageLink: "./dairy/icecream2.png",
  },
  {
    id: "08",
    name: "Black Currant Ice Cream",
    price: 15.00,
    subcategoryId: 'cream',
    quantity: 25,
    imageLink:
      "./dairy/icecream3.jpeg",
  },
  {
    id: "09",
    name: "Stwarberry Yogurt",
    price: 9.00,
    subcategoryId: 'yogurt',
    quantity: 15,
    imageLink:
      "./dairy/pinkyogurt.png",
  },
  {
    id: "10",
    name: "Vanilla Custard",
    price: 18.00,
    subcategoryId: 'cream',
    quantity: 10,
    imageLink: "./dairy/vanillacustard.png",
  },
  {
    id: "11",
    name: "Yogurt",
    price: 2.00,
    subcategoryId: "yogurt",
    quantity: 15,
    imageLink:
      "./dairy/yogurt.png",
  },
  {
    id: "12",
    name: "Apple",
    price: 5.00,
    subcategoryId: "fruits",
    quantity: 25,
    imageLink: "./fruits/apple.png",
  },
  {
    id: "13",
    name: "Banana",
    price: 4.00,
    subcategoryId: "fruits",
    quantity: 20,
    imageLink:"./fruits/banana.png",
  },
  {
    id: "14",
    name: "Mango",
    price: 6.00,
    subcategoryId: "fruits",
    quantity: 30,
    imageLink:"./fruits/mango.png",
  },
  {
    id: "15",
    name: "Strawberry",
    price: 5.00,
    subcategoryId: "fruits",
    quantity: 20,
    imageLink:"./fruits/strawberry.png",
  },
  {
    id: "16",
    name: "Broccli",
    price: 8.00,
    subcategoryId: "vegetables",
    quantity: 15,
    imageLink:"./vegetables/brockli.png",
  },
  {
    id: "17",
    name: "Cabbage",
    price: 12.00,
    subcategoryId: "vagetables",
    quantity: 50,
    imageLink:"./vegetables/cabbage.jpg",
  },
  {
    id: "18",
    name: "Eggplant",
    price: 10.00,
    subcategoryId: "vegetables",
    quantity: 10,
    imageLink:"./vegetables/Eggplant.jpg",
  },
  {
    id: "19",
    name: "Garlic",
    price: 4.00,
    subcategoryId: "vegetables",
    quantity: 15,
    imageLink:"./vegetables/Garlic.jpg",
  },
  {
    id: "20",
    name: "Onion",
    price: 12.00,
    subcategoryId: "vegetables",
    quantity: 10,
    imageLink:"./vegetables/onion.png",
  },
  {
    id: "21",
    name: "Potato",
    price: 14.00,
    subcategoryId: "vegetables",
    quantity: 45,
    imageLink:"./vegetables/potato.png",
  },
  {
    id: "22",
    name: "Spinach",
    price: 10.00,
    subcategoryId: "vegetables",
    quantity: 30,
    imageLink:"./vegetables/spinach.jpg",
  },
  {
    id: "23",
    name: "Tomato",
    price: 10.00,
    subcategoryId: "vegetables",
    quantity: 15,
    imageLink:
      "./vegetables/tomato.jpg",
  },
  {
    id: "24",
    name: "Organic Fruits",
    price: 18.00,
    subcategoryId: "organic",
    quantity: 15,
    imageLink:"./organic/organicfruis.jpg",
  },
  {
    id: "25",
    name: "Organic Melon",
    price: 15.20,
    subcategoryId: "organic",
    quantity: 10,
    imageLink: "./organic/organicmelon.jpg",
  },
  {
    id: "26",
    name: "Organic Peas",
    price: 12.00,
    subcategoryId: "organic",
    quantity: 15,
    imageLink: "./organic/organicpeas.jpg",
  },
  {
    id: "27",
    name: "Fruit Salad",
    price: 16.00,
    subcategoryId: "salad",
    quantity: 10,
    imageLink: "./salad/fruitsalad.jpg",
  },
  {
    id: "28",
    name: "Vegetable Salad",
    price: 14.00,
    subcategoryId: "salad",
    quantity: 10,
    imageLink: "./salad/vegetablesalad.jpg",
  },
  {
    id: "29",
    name: "Coke",
    price: 3.50,
    subcategoryId: "cold",
    quantity: 20,
    imageLink:
      "./drinks/coke.png",
  },
  {
    id: "30",
    name: "Pepsi",
    price: 3.50,
    subcategoryId: "cold",
    quantity: 40,
    imageLink:
      "./drinks/pepsi.png",
  },
  {
    id: "31",
    name: "Soda",
    price: 3.50,
    subcategoryId: "cold",
    quantity: 25,
    imageLink:
      "./drinks/soda.png",
  },
  {
    id: "32",
    name: "Orange Juice",
    price: 4.50,
    subcategoryId: "juice",
    quantity: 30,
    imageLink: "./drinks/orangejuice.png",
  },
  {
    id: "33",
    name: "Cherry Juice",
    price: 4.50,
    subcategoryId: "juice",
    quantity: 20,
    imageLink:
      "./drinks/cherrydrink.png",
  },
  {
    id: "34",
    name: "Lotion",
    price: 14.00,
    subcategoryId: "lotion",
    quantity: 35,
    imageLink:
      "./cosmetic/lotion.png",
  },
  {
    id: "35",
    name: "Almond Lotion",
    price: 15.00,
    subcategoryId: "lotion",
    quantity: 0,
    imageLink:
      "./cosmetic/lotion2.png",
  },
  {
    id: "36",
    name: "Hair Dryer",
    price: 20.00,
    subcategoryId: "produkt",
    quantity: 35,
    imageLink:
      "./cosmetic/hairdryer.png",
  },
  {
    id: "37",
    name: "Trimmer",
    price: 20.00,
    subcategoryId: "produkt",
    quantity: 35,
    imageLink:
      "./cosmetic/trimmer.png",
  },
  {
    id: "38",
    name: "Baby Food",
    price: 20.00,
    subcategoryId: "food",
    quantity: 35,
    imageLink:
      "./baby/babyfood.jpeg",
  },
  {
    id: "39",
    name: "Baby Milk",
    price: 20.00,
    subcategoryId: "food",
    quantity: 35,
    imageLink:
      "./baby/babymilk.jpeg",
  },
  {
    id: "40",
    name: "Baby Toy",
    price: 20.00,
    subcategoryId: "toys",
    quantity: 35,
    imageLink:
      "./baby/toy1.png",
  },
  {
    id: "41",
    name: "Baby Toy 2",
    price: 20.00,
    subcategoryId: "toys",
    quantity: 35,
    imageLink:
      "./baby/toy2.png",
  },
];
