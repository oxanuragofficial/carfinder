const cars = [
  {
    "id": 1,
    "brand": "Ford",
    "model": "Kwid",
    "body": "SUV",
    "fuel": "Hybrid",
    "seats": 4,
    "price": 12.4,
    "image": "https://picsum.photos/seed/car1/800/520"
  },
  {
    "id": 2,
    "brand": "Maruti Suzuki",
    "model": "Baleno",
    "body": "Hatchback",
    "fuel": "Petrol",
    "seats": 5,
    "price": 4.5,
    "image": "https://picsum.photos/seed/car2/800/520"
  },
  {
    "id": 3,
    "brand": "MG",
    "model": "Rapid",
    "body": "Hatchback",
    "fuel": "Electric",
    "seats": 7,
    "price": 11.7,
    "image": "https://picsum.photos/seed/car3/800/520"
  },
  {
    "id": 4,
    "brand": "Maruti Suzuki",
    "model": "Punch",
    "body": "Sedan",
    "fuel": "Petrol",
    "seats": 2,
    "price": 11.5,
    "image": "https://picsum.photos/seed/car4/800/520"
  },
  {
    "id": 5,
    "brand": "MG",
    "model": "Punch",
    "body": "Coupe",
    "fuel": "Petrol",
    "seats": 5,
    "price": 25.9,
    "image": "https://picsum.photos/seed/car5/800/520"
  },
  {
    "id": 6,
    "brand": "Nissan",
    "model": "Civic",
    "body": "SUV",
    "fuel": "Electric",
    "seats": 4,
    "price": 28.3,
    "image": "https://picsum.photos/seed/car6/800/520"
  },
  {
    "id": 7,
    "brand": "Ford",
    "model": "Baleno",
    "body": "Sedan",
    "fuel": "Diesel",
    "seats": 7,
    "price": 32.0,
    "image": "https://picsum.photos/seed/car7/800/520"
  },
  {
    "id": 8,
    "brand": "Hyundai",
    "model": "i20",
    "body": "SUV",
    "fuel": "Diesel",
    "seats": 7,
    "price": 9.8,
    "image": "https://picsum.photos/seed/car8/800/520"
  },
  {
    "id": 9,
    "brand": "Nissan",
    "model": "Civic",
    "body": "Hatchback",
    "fuel": "Petrol",
    "seats": 5,
    "price": 23.5,
    "image": "https://picsum.photos/seed/car9/800/520"
  },
  {
    "id": 10,
    "brand": "Tata",
    "model": "Kwid",
    "body": "Sedan",
    "fuel": "Electric",
    "seats": 4,
    "price": 31.8,
    "image": "https://picsum.photos/seed/car10/800/520"
  },
  {
    "id": 11,
    "brand": "Nissan",
    "model": "Tiago",
    "body": "SUV",
    "fuel": "Petrol",
    "seats": 7,
    "price": 11.2,
    "image": "https://picsum.photos/seed/car11/800/520"
  },
  {
    "id": 12,
    "brand": "Kia",
    "model": "Polo Pro",
    "body": "SUV",
    "fuel": "Electric",
    "seats": 5,
    "price": 18.5,
    "image": "https://picsum.photos/seed/car12/800/520"
  },
  {
    "id": 13,
    "brand": "Hyundai",
    "model": "Punch",
    "body": "Sedan",
    "fuel": "Electric",
    "seats": 5,
    "price": 9.4,
    "image": "https://picsum.photos/seed/car13/800/520"
  },
  {
    "id": 14,
    "brand": "Nissan",
    "model": "Seltos",
    "body": "Sedan",
    "fuel": "Hybrid",
    "seats": 5,
    "price": 20.1,
    "image": "https://picsum.photos/seed/car14/800/520"
  },
  {
    "id": 15,
    "brand": "Ford",
    "model": "Rapid Pro",
    "body": "Coupe",
    "fuel": "Hybrid",
    "seats": 4,
    "price": 27.0,
    "image": "https://picsum.photos/seed/car15/800/520"
  },
  {
    "id": 16,
    "brand": "Kia",
    "model": "Harrier",
    "body": "SUV",
    "fuel": "Diesel",
    "seats": 2,
    "price": 19.3,
    "image": "https://picsum.photos/seed/car16/800/520"
  },
  {
    "id": 17,
    "brand": "Honda",
    "model": "Thar",
    "body": "Convertible",
    "fuel": "Diesel",
    "seats": 2,
    "price": 26.2,
    "image": "https://picsum.photos/seed/car17/800/520"
  },
  {
    "id": 18,
    "brand": "Volkswagen",
    "model": "Tiago",
    "body": "Convertible",
    "fuel": "Hybrid",
    "seats": 4,
    "price": 7.3,
    "image": "https://picsum.photos/seed/car18/800/520"
  },
  {
    "id": 19,
    "brand": "Skoda",
    "model": "Glanza Pro",
    "body": "SUV",
    "fuel": "Petrol",
    "seats": 7,
    "price": 20.7,
    "image": "https://picsum.photos/seed/car19/800/520"
  },
  {
    "id": 20,
    "brand": "Hyundai",
    "model": "Safari",
    "body": "Hatchback",
    "fuel": "Electric",
    "seats": 5,
    "price": 31.7,
    "image": "https://picsum.photos/seed/car20/800/520"
  },
  {
    "id": 21,
    "brand": "Kia",
    "model": "Polo",
    "body": "Sedan",
    "fuel": "Electric",
    "seats": 5,
    "price": 13.9,
    "image": "https://picsum.photos/seed/car21/800/520"
  },
  {
    "id": 22,
    "brand": "Mahindra",
    "model": "Safari",
    "body": "Hatchback",
    "fuel": "Electric",
    "seats": 5,
    "price": 4.0,
    "image": "https://picsum.photos/seed/car22/800/520"
  },
  {
    "id": 23,
    "brand": "Skoda",
    "model": "Hector",
    "body": "MUV",
    "fuel": "CNG",
    "seats": 5,
    "price": 8.3,
    "image": "https://picsum.photos/seed/car23/800/520"
  },
  {
    "id": 24,
    "brand": "Hyundai",
    "model": "Hector",
    "body": "Coupe",
    "fuel": "Diesel",
    "seats": 2,
    "price": 31.6,
    "image": "https://picsum.photos/seed/car24/800/520"
  },
  {
    "id": 25,
    "brand": "Kia",
    "model": "i20",
    "body": "Convertible",
    "fuel": "Petrol",
    "seats": 2,
    "price": 7.2,
    "image": "https://picsum.photos/seed/car25/800/520"
  },
  {
    "id": 26,
    "brand": "Tata",
    "model": "Seltos",
    "body": "MUV",
    "fuel": "Hybrid",
    "seats": 7,
    "price": 19.6,
    "image": "https://picsum.photos/seed/car26/800/520"
  },
  {
    "id": 27,
    "brand": "Ford",
    "model": "Seltos",
    "body": "Sedan",
    "fuel": "Hybrid",
    "seats": 4,
    "price": 29.5,
    "image": "https://picsum.photos/seed/car27/800/520"
  },
  {
    "id": 28,
    "brand": "Volkswagen",
    "model": "Baleno",
    "body": "SUV",
    "fuel": "Hybrid",
    "seats": 2,
    "price": 8.4,
    "image": "https://picsum.photos/seed/car28/800/520"
  },
  {
    "id": 29,
    "brand": "Maruti Suzuki",
    "model": "Rapid",
    "body": "Convertible",
    "fuel": "Diesel",
    "seats": 7,
    "price": 11.0,
    "image": "https://picsum.photos/seed/car29/800/520"
  },
  {
    "id": 30,
    "brand": "Kia",
    "model": "Magnite",
    "body": "Convertible",
    "fuel": "Petrol",
    "seats": 5,
    "price": 13.1,
    "image": "https://picsum.photos/seed/car30/800/520"
  },
  {
    "id": 31,
    "brand": "MG",
    "model": "EcoSport",
    "body": "MUV",
    "fuel": "Hybrid",
    "seats": 7,
    "price": 21.8,
    "image": "https://picsum.photos/seed/car31/800/520"
  },
  {
    "id": 32,
    "brand": "Hyundai",
    "model": "Hector",
    "body": "Hatchback",
    "fuel": "Electric",
    "seats": 5,
    "price": 4.6,
    "image": "https://picsum.photos/seed/car32/800/520"
  },
  {
    "id": 33,
    "brand": "Renault",
    "model": "Polo",
    "body": "Sedan",
    "fuel": "Diesel",
    "seats": 7,
    "price": 9.4,
    "image": "https://picsum.photos/seed/car33/800/520"
  },
  {
    "id": 34,
    "brand": "Skoda",
    "model": "Polo",
    "body": "Hatchback",
    "fuel": "CNG",
    "seats": 5,
    "price": 6.9,
    "image": "https://picsum.photos/seed/car34/800/520"
  },
  {
    "id": 35,
    "brand": "MG",
    "model": "Kwid",
    "body": "Coupe",
    "fuel": "Electric",
    "seats": 5,
    "price": 29.9,
    "image": "https://picsum.photos/seed/car35/800/520"
  },
  {
    "id": 36,
    "brand": "Nissan",
    "model": "Seltos",
    "body": "SUV",
    "fuel": "Hybrid",
    "seats": 4,
    "price": 18.0,
    "image": "https://picsum.photos/seed/car36/800/520"
  },
  {
    "id": 37,
    "brand": "Maruti Suzuki",
    "model": "Civic Pro",
    "body": "Sedan",
    "fuel": "Hybrid",
    "seats": 2,
    "price": 21.6,
    "image": "https://picsum.photos/seed/car37/800/520"
  },
  {
    "id": 38,
    "brand": "Maruti Suzuki",
    "model": "Baleno",
    "body": "SUV",
    "fuel": "CNG",
    "seats": 7,
    "price": 12.8,
    "image": "https://picsum.photos/seed/car38/800/520"
  },
  {
    "id": 39,
    "brand": "Kia",
    "model": "Rapid",
    "body": "Convertible",
    "fuel": "Electric",
    "seats": 2,
    "price": 25.3,
    "image": "https://picsum.photos/seed/car39/800/520"
  },
  {
    "id": 40,
    "brand": "Volkswagen",
    "model": "Altroz",
    "body": "Coupe",
    "fuel": "Electric",
    "seats": 5,
    "price": 32.0,
    "image": "https://picsum.photos/seed/car40/800/520"
  },
  {
    "id": 41,
    "brand": "Maruti Suzuki",
    "model": "Magnite",
    "body": "MUV",
    "fuel": "Hybrid",
    "seats": 7,
    "price": 5.4,
    "image": "https://picsum.photos/seed/car41/800/520"
  },
  {
    "id": 42,
    "brand": "Skoda",
    "model": "Seltos Pro",
    "body": "Hatchback",
    "fuel": "Petrol",
    "seats": 7,
    "price": 24.5,
    "image": "https://picsum.photos/seed/car42/800/520"
  },
  {
    "id": 43,
    "brand": "Mahindra",
    "model": "Safari",
    "body": "Coupe",
    "fuel": "Diesel",
    "seats": 7,
    "price": 25.6,
    "image": "https://picsum.photos/seed/car43/800/520"
  },
  {
    "id": 44,
    "brand": "Kia",
    "model": "Polo",
    "body": "Sedan",
    "fuel": "Hybrid",
    "seats": 5,
    "price": 24.5,
    "image": "https://picsum.photos/seed/car44/800/520"
  },
  {
    "id": 45,
    "brand": "Mahindra",
    "model": "Hector",
    "body": "Sedan",
    "fuel": "Diesel",
    "seats": 2,
    "price": 17.2,
    "image": "https://picsum.photos/seed/car45/800/520"
  },
  {
    "id": 46,
    "brand": "MG",
    "model": "Seltos",
    "body": "MUV",
    "fuel": "Petrol",
    "seats": 2,
    "price": 26.8,
    "image": "https://picsum.photos/seed/car46/800/520"
  },
  {
    "id": 47,
    "brand": "Hyundai",
    "model": "Altroz",
    "body": "Hatchback",
    "fuel": "Diesel",
    "seats": 5,
    "price": 17.6,
    "image": "https://picsum.photos/seed/car47/800/520"
  },
  {
    "id": 48,
    "brand": "Skoda",
    "model": "Safari Pro",
    "body": "Sedan",
    "fuel": "Diesel",
    "seats": 5,
    "price": 31.1,
    "image": "https://picsum.photos/seed/car48/800/520"
  },
  {
    "id": 49,
    "brand": "Toyota",
    "model": "EcoSport",
    "body": "SUV",
    "fuel": "Electric",
    "seats": 7,
    "price": 6.6,
    "image": "https://picsum.photos/seed/car49/800/520"
  },
  {
    "id": 50,
    "brand": "MG",
    "model": "Hector",
    "body": "Coupe",
    "fuel": "CNG",
    "seats": 7,
    "price": 4.1,
    "image": "https://picsum.photos/seed/car50/800/520"
  },
  {
    "id": 51,
    "brand": "Mahindra",
    "model": "Swift",
    "body": "Hatchback",
    "fuel": "Diesel",
    "seats": 7,
    "price": 15.8,
    "image": "https://picsum.photos/seed/car51/800/520"
  },
  {
    "id": 52,
    "brand": "Mahindra",
    "model": "Baleno",
    "body": "Sedan",
    "fuel": "Electric",
    "seats": 7,
    "price": 4.3,
    "image": "https://picsum.photos/seed/car52/800/520"
  },
  {
    "id": 53,
    "brand": "Maruti Suzuki",
    "model": "Kwid Pro",
    "body": "Hatchback",
    "fuel": "Electric",
    "seats": 5,
    "price": 5.0,
    "image": "https://picsum.photos/seed/car53/800/520"
  },
  {
    "id": 54,
    "brand": "Mahindra",
    "model": "Altroz",
    "body": "Convertible",
    "fuel": "Hybrid",
    "seats": 2,
    "price": 33.9,
    "image": "https://picsum.photos/seed/car54/800/520"
  },
  {
    "id": 55,
    "brand": "Hyundai",
    "model": "Seltos Pro",
    "body": "Convertible",
    "fuel": "Diesel",
    "seats": 2,
    "price": 6.8,
    "image": "https://picsum.photos/seed/car55/800/520"
  },
  {
    "id": 56,
    "brand": "Honda",
    "model": "Kwid",
    "body": "Convertible",
    "fuel": "CNG",
    "seats": 5,
    "price": 13.0,
    "image": "https://picsum.photos/seed/car56/800/520"
  },
  {
    "id": 57,
    "brand": "Renault",
    "model": "Seltos",
    "body": "Convertible",
    "fuel": "CNG",
    "seats": 7,
    "price": 23.4,
    "image": "https://picsum.photos/seed/car57/800/520"
  },
  {
    "id": 58,
    "brand": "Tata",
    "model": "Civic",
    "body": "Hatchback",
    "fuel": "Electric",
    "seats": 5,
    "price": 18.3,
    "image": "https://picsum.photos/seed/car58/800/520"
  },
  {
    "id": 59,
    "brand": "Skoda",
    "model": "Glanza",
    "body": "SUV",
    "fuel": "Diesel",
    "seats": 5,
    "price": 3.6,
    "image": "https://picsum.photos/seed/car59/800/520"
  },
  {
    "id": 60,
    "brand": "Kia",
    "model": "Punch",
    "body": "MUV",
    "fuel": "CNG",
    "seats": 5,
    "price": 4.8,
    "image": "https://picsum.photos/seed/car60/800/520"
  },
  {
    "id": 61,
    "brand": "MG",
    "model": "Civic",
    "body": "Hatchback",
    "fuel": "Electric",
    "seats": 7,
    "price": 28.0,
    "image": "https://picsum.photos/seed/car61/800/520"
  },
  {
    "id": 62,
    "brand": "Skoda",
    "model": "Baleno",
    "body": "SUV",
    "fuel": "CNG",
    "seats": 5,
    "price": 25.4,
    "image": "https://picsum.photos/seed/car62/800/520"
  },
  {
    "id": 63,
    "brand": "Nissan",
    "model": "Kwid",
    "body": "Sedan",
    "fuel": "Electric",
    "seats": 4,
    "price": 30.0,
    "image": "https://picsum.photos/seed/car63/800/520"
  },
  {
    "id": 64,
    "brand": "Tata",
    "model": "Hector",
    "body": "Coupe",
    "fuel": "CNG",
    "seats": 5,
    "price": 9.2,
    "image": "https://picsum.photos/seed/car64/800/520"
  },
  {
    "id": 65,
    "brand": "Nissan",
    "model": "Punch",
    "body": "Hatchback",
    "fuel": "Petrol",
    "seats": 2,
    "price": 19.5,
    "image": "https://picsum.photos/seed/car65/800/520"
  },
  {
    "id": 66,
    "brand": "Mahindra",
    "model": "Kwid",
    "body": "Hatchback",
    "fuel": "Electric",
    "seats": 7,
    "price": 18.8,
    "image": "https://picsum.photos/seed/car66/800/520"
  },
  {
    "id": 67,
    "brand": "Renault",
    "model": "Thar Pro",
    "body": "SUV",
    "fuel": "Hybrid",
    "seats": 4,
    "price": 11.9,
    "image": "https://picsum.photos/seed/car67/800/520"
  },
  {
    "id": 68,
    "brand": "Tata",
    "model": "Kwid",
    "body": "Sedan",
    "fuel": "Petrol",
    "seats": 4,
    "price": 19.5,
    "image": "https://picsum.photos/seed/car68/800/520"
  },
  {
    "id": 69,
    "brand": "Tata",
    "model": "i20 Pro",
    "body": "MUV",
    "fuel": "CNG",
    "seats": 7,
    "price": 10.2,
    "image": "https://picsum.photos/seed/car69/800/520"
  },
  {
    "id": 70,
    "brand": "Kia",
    "model": "Punch",
    "body": "Hatchback",
    "fuel": "Petrol",
    "seats": 4,
    "price": 11.3,
    "image": "https://picsum.photos/seed/car70/800/520"
  },
  {
    "id": 71,
    "brand": "Tata",
    "model": "Tiago Pro",
    "body": "Convertible",
    "fuel": "Petrol",
    "seats": 7,
    "price": 4.0,
    "image": "https://picsum.photos/seed/car71/800/520"
  },
  {
    "id": 72,
    "brand": "MG",
    "model": "Safari",
    "body": "Coupe",
    "fuel": "CNG",
    "seats": 7,
    "price": 34.3,
    "image": "https://picsum.photos/seed/car72/800/520"
  },
  {
    "id": 73,
    "brand": "Maruti Suzuki",
    "model": "Swift Pro",
    "body": "Sedan",
    "fuel": "Hybrid",
    "seats": 5,
    "price": 34.2,
    "image": "https://picsum.photos/seed/car73/800/520"
  },
  {
    "id": 74,
    "brand": "Skoda",
    "model": "Safari",
    "body": "Hatchback",
    "fuel": "CNG",
    "seats": 4,
    "price": 19.2,
    "image": "https://picsum.photos/seed/car74/800/520"
  },
  {
    "id": 75,
    "brand": "Skoda",
    "model": "Nexon",
    "body": "Sedan",
    "fuel": "CNG",
    "seats": 7,
    "price": 13.8,
    "image": "https://picsum.photos/seed/car75/800/520"
  },
  {
    "id": 76,
    "brand": "Maruti Suzuki",
    "model": "Nexon",
    "body": "Hatchback",
    "fuel": "CNG",
    "seats": 5,
    "price": 23.0,
    "image": "https://picsum.photos/seed/car76/800/520"
  },
  {
    "id": 77,
    "brand": "Mahindra",
    "model": "Magnite",
    "body": "Sedan",
    "fuel": "Petrol",
    "seats": 2,
    "price": 32.4,
    "image": "https://picsum.photos/seed/car77/800/520"
  },
  {
    "id": 78,
    "brand": "Honda",
    "model": "Seltos",
    "body": "Hatchback",
    "fuel": "Hybrid",
    "seats": 5,
    "price": 11.7,
    "image": "https://picsum.photos/seed/car78/800/520"
  },
  {
    "id": 79,
    "brand": "Mahindra",
    "model": "Civic",
    "body": "Coupe",
    "fuel": "Diesel",
    "seats": 5,
    "price": 9.3,
    "image": "https://picsum.photos/seed/car79/800/520"
  },
  {
    "id": 80,
    "brand": "Toyota",
    "model": "Nexon",
    "body": "Convertible",
    "fuel": "Diesel",
    "seats": 5,
    "price": 23.2,
    "image": "https://picsum.photos/seed/car80/800/520"
  },
  {
    "id": 81,
    "brand": "Nissan",
    "model": "Corolla",
    "body": "Sedan",
    "fuel": "Diesel",
    "seats": 4,
    "price": 15.8,
    "image": "https://picsum.photos/seed/car81/800/520"
  },
  {
    "id": 82,
    "brand": "Renault",
    "model": "Magnite",
    "body": "Sedan",
    "fuel": "Petrol",
    "seats": 5,
    "price": 21.8,
    "image": "https://picsum.photos/seed/car82/800/520"
  },
  {
    "id": 83,
    "brand": "Toyota",
    "model": "Magnite",
    "body": "MUV",
    "fuel": "Hybrid",
    "seats": 7,
    "price": 17.1,
    "image": "https://picsum.photos/seed/car83/800/520"
  },
  {
    "id": 84,
    "brand": "Hyundai",
    "model": "Nexon",
    "body": "Sedan",
    "fuel": "CNG",
    "seats": 5,
    "price": 10.7,
    "image": "https://picsum.photos/seed/car84/800/520"
  },
  {
    "id": 85,
    "brand": "Nissan",
    "model": "Swift",
    "body": "SUV",
    "fuel": "CNG",
    "seats": 7,
    "price": 18.4,
    "image": "https://picsum.photos/seed/car85/800/520"
  },
  {
    "id": 86,
    "brand": "Toyota",
    "model": "Punch",
    "body": "Hatchback",
    "fuel": "Petrol",
    "seats": 5,
    "price": 12.0,
    "image": "https://picsum.photos/seed/car86/800/520"
  },
  {
    "id": 87,
    "brand": "Hyundai",
    "model": "Baleno Pro",
    "body": "SUV",
    "fuel": "CNG",
    "seats": 7,
    "price": 32.7,
    "image": "https://picsum.photos/seed/car87/800/520"
  },
  {
    "id": 88,
    "brand": "Tata",
    "model": "Hector",
    "body": "MUV",
    "fuel": "Diesel",
    "seats": 5,
    "price": 17.8,
    "image": "https://picsum.photos/seed/car88/800/520"
  },
  {
    "id": 89,
    "brand": "Kia",
    "model": "Baleno",
    "body": "MUV",
    "fuel": "Electric",
    "seats": 7,
    "price": 31.1,
    "image": "https://picsum.photos/seed/car89/800/520"
  },
  {
    "id": 90,
    "brand": "Nissan",
    "model": "EcoSport Pro",
    "body": "Hatchback",
    "fuel": "Petrol",
    "seats": 4,
    "price": 30.2,
    "image": "https://picsum.photos/seed/car90/800/520"
  },
  {
    "id": 91,
    "brand": "Nissan",
    "model": "Altroz",
    "body": "SUV",
    "fuel": "Petrol",
    "seats": 7,
    "price": 7.5,
    "image": "https://picsum.photos/seed/car91/800/520"
  },
  {
    "id": 92,
    "brand": "Maruti Suzuki",
    "model": "Thar",
    "body": "Convertible",
    "fuel": "CNG",
    "seats": 7,
    "price": 21.1,
    "image": "https://picsum.photos/seed/car92/800/520"
  },
  {
    "id": 93,
    "brand": "Skoda",
    "model": "Altroz",
    "body": "Convertible",
    "fuel": "CNG",
    "seats": 7,
    "price": 7.5,
    "image": "https://picsum.photos/seed/car93/800/520"
  },
  {
    "id": 94,
    "brand": "Renault",
    "model": "Polo",
    "body": "Hatchback",
    "fuel": "CNG",
    "seats": 5,
    "price": 9.4,
    "image": "https://picsum.photos/seed/car94/800/520"
  },
  {
    "id": 95,
    "brand": "Kia",
    "model": "Magnite",
    "body": "MUV",
    "fuel": "Petrol",
    "seats": 7,
    "price": 17.8,
    "image": "https://picsum.photos/seed/car95/800/520"
  },
  {
    "id": 96,
    "brand": "MG",
    "model": "Nexon",
    "body": "Convertible",
    "fuel": "Petrol",
    "seats": 5,
    "price": 22.7,
    "image": "https://picsum.photos/seed/car96/800/520"
  },
  {
    "id": 97,
    "brand": "Tata",
    "model": "Tiago Pro",
    "body": "Convertible",
    "fuel": "Petrol",
    "seats": 2,
    "price": 25.8,
    "image": "https://picsum.photos/seed/car97/800/520"
  },
  {
    "id": 98,
    "brand": "Maruti Suzuki",
    "model": "Nexon",
    "body": "Hatchback",
    "fuel": "Petrol",
    "seats": 5,
    "price": 28.8,
    "image": "https://picsum.photos/seed/car98/800/520"
  },
  {
    "id": 99,
    "brand": "Mahindra",
    "model": "Swift",
    "body": "Coupe",
    "fuel": "Hybrid",
    "seats": 5,
    "price": 32.6,
    "image": "https://picsum.photos/seed/car99/800/520"
  },
  {
    "id": 100,
    "brand": "Tata",
    "model": "Safari",
    "body": "Hatchback",
    "fuel": "CNG",
    "seats": 4,
    "price": 11.3,
    "image": "https://picsum.photos/seed/car100/800/520"
  },
  {
    "id": 101,
    "brand": "Skoda",
    "model": "Hector",
    "body": "Convertible",
    "fuel": "CNG",
    "seats": 7,
    "price": 12.0,
    "image": "https://picsum.photos/seed/car101/800/520"
  },
  {
    "id": 102,
    "brand": "Hyundai",
    "model": "Baleno",
    "body": "Coupe",
    "fuel": "Petrol",
    "seats": 4,
    "price": 18.5,
    "image": "https://picsum.photos/seed/car102/800/520"
  },
  {
    "id": 103,
    "brand": "Tata",
    "model": "Nexon",
    "body": "Coupe",
    "fuel": "Hybrid",
    "seats": 5,
    "price": 18.8,
    "image": "https://picsum.photos/seed/car103/800/520"
  },
  {
    "id": 104,
    "brand": "Honda",
    "model": "Altroz",
    "body": "Coupe",
    "fuel": "Hybrid",
    "seats": 7,
    "price": 12.3,
    "image": "https://picsum.photos/seed/car104/800/520"
  },
  {
    "id": 105,
    "brand": "Maruti Suzuki",
    "model": "Magnite",
    "body": "Sedan",
    "fuel": "Diesel",
    "seats": 2,
    "price": 16.6,
    "image": "https://picsum.photos/seed/car105/800/520"
  },
  {
    "id": 106,
    "brand": "Hyundai",
    "model": "Punch",
    "body": "Hatchback",
    "fuel": "Electric",
    "seats": 7,
    "price": 33.8,
    "image": "https://picsum.photos/seed/car106/800/520"
  },
  {
    "id": 107,
    "brand": "Maruti Suzuki",
    "model": "Civic",
    "body": "SUV",
    "fuel": "Petrol",
    "seats": 7,
    "price": 28.4,
    "image": "https://picsum.photos/seed/car107/800/520"
  },
  {
    "id": 108,
    "brand": "Skoda",
    "model": "Altroz",
    "body": "Hatchback",
    "fuel": "Diesel",
    "seats": 2,
    "price": 12.5,
    "image": "https://picsum.photos/seed/car108/800/520"
  },
  {
    "id": 109,
    "brand": "Toyota",
    "model": "Thar",
    "body": "Convertible",
    "fuel": "CNG",
    "seats": 7,
    "price": 20.8,
    "image": "https://picsum.photos/seed/car109/800/520"
  },
  {
    "id": 110,
    "brand": "Kia",
    "model": "Thar",
    "body": "SUV",
    "fuel": "Hybrid",
    "seats": 5,
    "price": 18.7,
    "image": "https://picsum.photos/seed/car110/800/520"
  },
  {
    "id": 111,
    "brand": "Hyundai",
    "model": "Rapid",
    "body": "Convertible",
    "fuel": "Diesel",
    "seats": 7,
    "price": 25.3,
    "image": "https://picsum.photos/seed/car111/800/520"
  },
  {
    "id": 112,
    "brand": "Toyota",
    "model": "Punch",
    "body": "Convertible",
    "fuel": "Electric",
    "seats": 5,
    "price": 34.9,
    "image": "https://picsum.photos/seed/car112/800/520"
  },
  {
    "id": 113,
    "brand": "Ford",
    "model": "Thar",
    "body": "SUV",
    "fuel": "Hybrid",
    "seats": 4,
    "price": 25.1,
    "image": "https://picsum.photos/seed/car113/800/520"
  },
  {
    "id": 114,
    "brand": "Hyundai",
    "model": "Harrier",
    "body": "Sedan",
    "fuel": "Diesel",
    "seats": 2,
    "price": 28.0,
    "image": "https://picsum.photos/seed/car114/800/520"
  },
  {
    "id": 115,
    "brand": "Tata",
    "model": "Civic",
    "body": "Coupe",
    "fuel": "Hybrid",
    "seats": 4,
    "price": 16.6,
    "image": "https://picsum.photos/seed/car115/800/520"
  },
  {
    "id": 116,
    "brand": "Ford",
    "model": "Altroz",
    "body": "Coupe",
    "fuel": "Diesel",
    "seats": 2,
    "price": 7.8,
    "image": "https://picsum.photos/seed/car116/800/520"
  },
  {
    "id": 117,
    "brand": "Ford",
    "model": "Civic",
    "body": "MUV",
    "fuel": "Diesel",
    "seats": 4,
    "price": 31.9,
    "image": "https://picsum.photos/seed/car117/800/520"
  },
  {
    "id": 118,
    "brand": "Kia",
    "model": "Tiago Pro",
    "body": "Convertible",
    "fuel": "CNG",
    "seats": 5,
    "price": 12.9,
    "image": "https://picsum.photos/seed/car118/800/520"
  },
  {
    "id": 119,
    "brand": "MG",
    "model": "Harrier",
    "body": "SUV",
    "fuel": "CNG",
    "seats": 4,
    "price": 5.1,
    "image": "https://picsum.photos/seed/car119/800/520"
  },
  {
    "id": 120,
    "brand": "Kia",
    "model": "Hector",
    "body": "Coupe",
    "fuel": "CNG",
    "seats": 5,
    "price": 34.4,
    "image": "https://picsum.photos/seed/car120/800/520"
  }
];
/* Example usage: access the cars array from browse.html or other pages. Images use picsum.photos placeholders. */
