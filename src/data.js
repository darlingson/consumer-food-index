const data = [
    {
      "id": 1,
      "name": "Bread",
      "category": "Staples",
      "priceHistory": [
        { "date": "2023-01-01", "price": 2.00 },
        { "date": "2023-02-01", "price": 2.10 },
        { "date": "2023-03-01", "price": 2.05 },
        { "date": "2023-04-01", "price": 2.20 }
      ]
    },
    {
      "id": 2,
      "name": "Rice",
      "category": "Staples",
      "priceHistory": [
        { "date": "2023-01-01", "price": 1.50 },
        { "date": "2023-02-01", "price": 1.55 },
        { "date": "2023-03-01", "price": 1.60 },
        { "date": "2023-04-01", "price": 1.70 }
      ]
    },
    {
      "id": 3,
      "name": "Chicken",
      "category": "Proteins",
      "priceHistory": [
        { "date": "2023-01-01", "price": 5.00 },
        { "date": "2023-02-01", "price": 5.20 },
        { "date": "2023-03-01", "price": 5.10 },
        { "date": "2023-04-01", "price": 5.30 }
      ]
    },
    {
      "id": 4,
      "name": "Milk",
      "category": "Dairy",
      "priceHistory": [
        { "date": "2023-01-01", "price": 1.20 },
        { "date": "2023-02-01", "price": 1.25 },
        { "date": "2023-03-01", "price": 1.30 },
        { "date": "2023-04-01", "price": 1.40 }
      ]
    },
    {
      "id": 5,
      "name": "Cassava",
      "category": "Roots & Tubers",
      "priceHistory": [
        { "date": "2023-01-01", "price": 1.00 },
        { "date": "2023-02-01", "price": 1.05 },
        { "date": "2023-03-01", "price": 1.10 },
        { "date": "2023-04-01", "price": 1.15 }
      ]
    },
    {
      "id": 6,
      "name": "Sweet Potatoes",
      "category": "Roots & Tubers",
      "priceHistory": [
        { "date": "2023-01-01", "price": 1.20 },
        { "date": "2023-02-01", "price": 1.25 },
        { "date": "2023-03-01", "price": 1.30 },
        { "date": "2023-04-01", "price": 1.35 }
      ]
    },
    {
      "id": 7,
      "name": "Beans",
      "category": "Legumes",
      "priceHistory": [
        { "date": "2023-01-01", "price": 1.80 },
        { "date": "2023-02-01", "price": 1.85 },
        { "date": "2023-03-01", "price": 1.90 },
        { "date": "2023-04-01", "price": 1.95 }
      ]
    },
    {
      "id": 8,
      "name": "Irish Potatoes",
      "category": "Roots & Tubers",
      "priceHistory": [
        { "date": "2023-01-01", "price": 2.00 },
        { "date": "2023-02-01", "price": 2.05 },
        { "date": "2023-03-01", "price": 2.10 },
        { "date": "2023-04-01", "price": 2.15 }
      ]
    },
    {
      "id": 9,
      "name": "Tomatoes",
      "category": "Vegetables",
      "priceHistory": [
        { "date": "2023-01-01", "price": 1.50 },
        { "date": "2023-02-01", "price": 1.55 },
        { "date": "2023-03-01", "price": 1.60 },
        { "date": "2023-04-01", "price": 1.70 }
      ]
    },
    {
      "id": 10,
      "name": "Eggs",
      "category": "Proteins",
      "priceHistory": [
        { "date": "2023-01-01", "price": 2.50 },
        { "date": "2023-02-01", "price": 2.60 },
        { "date": "2023-03-01", "price": 2.70 },
        { "date": "2023-04-01", "price": 2.80 }
      ]
    },
    {
      "id": 11,
      "name": "Onion",
      "category": "Vegetables",
      "priceHistory": [
        { "date": "2023-01-01", "price": 1.20 },
        { "date": "2023-02-01", "price": 1.25 },
        { "date": "2023-03-01", "price": 1.30 },
        { "date": "2023-04-01", "price": 1.35 }
      ]
    },
    {
      "id": 12,
      "name": "Tilapia",
      "category": "Proteins",
      "priceHistory": [
        { "date": "2023-01-01", "price": 3.00 },
        { "date": "2023-02-01", "price": 3.10 },
        { "date": "2023-03-01", "price": 3.20 },
        { "date": "2023-04-01", "price": 3.30 }
      ]
    },
    {
      "id": 13,
      "name": "Catfish",
      "category": "Proteins",
      "priceHistory": [
        { "date": "2023-01-01", "price": 3.50 },
        { "date": "2023-02-01", "price": 3.60 },
        { "date": "2023-03-01", "price": 3.70 },
        { "date": "2023-04-01", "price": 3.80 }
      ]
    },
    {
      "id": 14,
      "name": "Sugar",
      "category": "Sweeteners",
      "priceHistory": [
        { "date": "2023-01-01", "price": 1.50 },
        { "date": "2023-02-01", "price": 1.55 },
        { "date": "2023-03-01", "price": 1.60 },
        { "date": "2023-04-01", "price": 1.65 }
      ]
    },
    {
      "id": 15,
      "name": "Tea",
      "category": "Beverages",
      "priceHistory": [
        { "date": "2023-01-01", "price": 1.20 },
        { "date": "2023-02-01", "price": 1.25 },
        { "date": "2023-03-01", "price": 1.30 },
        { "date": "2023-04-01", "price": 1.35 }
      ]
    },
    {
      "id": 16,
      "name": "Salt",
      "category": "Condiments",
      "priceHistory": [
        { "date": "2023-01-01", "price": 0.50 },
        { "date": "2023-02-01", "price": 0.55 },
        { "date": "2023-03-01", "price": 0.60 },
        { "date": "2023-04-01", "price": 0.65 }
      ]
    },
    {
      "id": 17,
      "name": "Maize Flour",
      "category": "Staples",
      "priceHistory": [
        { "date": "2023-01-01", "price": 1.00 },
        { "date": "2023-02-01", "price": 1.05 },
        { "date": "2023-03-01", "price": 1.10 },
        { "date": "2023-04-01", "price": 1.15 }
      ]
    }
  ]
export default data;