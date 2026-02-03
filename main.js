// Câu 1: 
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: 
let products = [
    new Product(1, "iPhone 15", 25000000, 10, "Electronics", true),
    new Product(2, "Ốp lưng Silicone", 500000, 50, "Accessories", true),
    new Product(3, "MacBook M3", 45000000, 5, "Electronics", true),
    new Product(4, "Chuột không dây", 1200000, 0, "Accessories", false),
    new Product(5, "Bàn phím cơ", 2000000, 15, "Accessories", true),
    new Product(6, "Tai nghe Samsung", 7000000, 8, "Electronics", true)
];

// Câu 3: 
let nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));

// Câu 4: 
let inStock = products.filter(p => p.quantity > 0);

// Câu 5: 
let hasExpensiveItem = products.some(p => p.price > 30000000);

// Câu 6: 
let allAccAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

// Câu 7: 
let totalValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);

// Câu 8: 
console.log("--- Danh sách sản phẩm (for...of) ---");
for (const p of products) {
    let status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${p.name} - ${p.category} - ${status}`);
}

// Câu 9:
console.log("--- Chi tiết thuộc tính sản phẩm 1 (for...in) ---");
let firstProduct = products[0];
for (const key in firstProduct) {
    if (typeof firstProduct[key] !== 'function') {
        console.log(`${key}: ${firstProduct[key]}`);
    }
}

// Câu 10: 
let availableNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

console.log("Sản phẩm sẵn sàng bán:", availableNames);