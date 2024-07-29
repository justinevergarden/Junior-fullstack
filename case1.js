const fruits = [
    { fruitId: 1, fruitName: 'Apel', fruitType: 'IMPORT', stock: 10 },
    { fruitId: 2, fruitName: 'Kurma', fruitType: 'IMPORT', stock: 20 },
    { fruitId: 3, fruitName: 'apel', fruitType: 'IMPORT', stock: 50 },
    { fruitId: 4, fruitName: 'Manggis', fruitType: 'LOCAL', stock: 100 },
    { fruitId: 5, fruitName: 'Jeruk Bali', fruitType: 'LOCAL', stock: 10 },
    { fruitId: 6, fruitName: 'KURMA', fruitType: 'IMPORT', stock: 20 },
    { fruitId: 7, fruitName: 'Salak', fruitType: 'LOCAL', stock: 150 }
];

// 1. Buah apa saja yang dimiliki Andi? (fruitName)
const fruitNames = fruits.map(fruit => fruit.fruitName);
console.log("Buah yang dimiliki Andi:", fruitNames);

// 2. Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
const fruitTypes = fruits.reduce((acc, fruit) => {
    if (!acc[fruit.fruitType]) {
        acc[fruit.fruitType] = [];
    }
    acc[fruit.fruitType].push(fruit.fruitName);
    return acc;
}, {});

console.log("Jumlah wadah yang dibutuhkan:", Object.keys(fruitTypes).length);
console.log("Buah di masing-masing wadah:", fruitTypes);

// 3. Berapa total stock buah yang ada di masing-masing wadah?
const totalStockByType = fruits.reduce((acc, fruit) => {
    if (!acc[fruit.fruitType]) {
        acc[fruit.fruitType] = 0;
    }
    acc[fruit.fruitType] += fruit.stock;
    return acc;
}, {});

console.log("Total stock buah di masing-masing wadah:", totalStockByType);

// 4. Apakah ada komentar terkait kasus di atas?
//     Komentar: Nama buah sebaiknya konsisten dalam penulisan untuk menghindari duplikasi data.
