// Base Indian cars data
const baseIndianCars = [
    {
        name: "Tata Nexon",
        brand: "Tata",
        model: "2024",
        type: "suv",
        pricePerDay: 2500,
        available: true
    },
    {
        name: "Hyundai Creta",
        brand: "Hyundai",
        model: "2024",
        type: "suv",
        pricePerDay: 3000,
        available: true
    },
    {
        name: "Maruti Suzuki Swift",
        brand: "Maruti Suzuki",
        model: "2024",
        type: "hatchback",
        pricePerDay: 1800,
        available: true
    },
    {
        name: "Mahindra XUV700",
        brand: "Mahindra",
        model: "2024",
        type: "suv",
        pricePerDay: 4000,
        available: true
    },
    {
        name: "Toyota Innova Crysta",
        brand: "Toyota",
        model: "2024",
        type: "mpv",
        pricePerDay: 3500,
        available: true
    },
    {
        name: "Honda City",
        brand: "Honda",
        model: "2024",
        type: "sedan",
        pricePerDay: 2800,
        available: true
    },
    {
        name: "Kia Seltos",
        brand: "Kia",
        model: "2024",
        type: "suv",
        pricePerDay: 3200,
        available: true
    },
    {
        name: "Tata Safari",
        brand: "Tata",
        model: "2024",
        type: "suv",
        pricePerDay: 4500,
        available: true
    },
    {
        name: "Mahindra Scorpio N",
        brand: "Mahindra",
        model: "2024",
        type: "suv",
        pricePerDay: 3800,
        available: true
    },
    {
        name: "Maruti Suzuki Baleno",
        brand: "Maruti Suzuki",
        model: "2024",
        type: "hatchback",
        pricePerDay: 2000,
        available: true
    },
    {
        name: "Hyundai Verna",
        brand: "Hyundai",
        model: "2024",
        type: "sedan",
        pricePerDay: 2700,
        available: true
    },
    {
        name: "Mahindra XUV300",
        brand: "Mahindra",
        model: "2024",
        type: "suv",
        pricePerDay: 2600,
        available: true
    },
    {
        name: "Tata Harrier",
        brand: "Tata",
        model: "2024",
        type: "suv",
        pricePerDay: 4200,
        available: true
    },
    {
        name: "Maruti Suzuki Brezza",
        brand: "Maruti Suzuki",
        model: "2024",
        type: "suv",
        pricePerDay: 2800,
        available: true
    },
    {
        name: "Tata Punch",
        brand: "Tata",
        model: "2024",
        type: "suv",
        pricePerDay: 2200,
        available: true
    },
    {
        name: "Mahindra Bolero",
        brand: "Mahindra",
        model: "2024",
        type: "suv",
        pricePerDay: 2000,
        available: true
    }
];

// Function to generate variants of cars with different models and prices
function generateMoreCars() {
    const variants = {
        'suv': ['Base', 'Adventure', 'Luxury'],
        'sedan': ['Base', 'Premium', 'Sport'],
        'hatchback': ['Base', 'Smart', 'Sport'],
        'mpv': ['Base', 'Premium', 'Luxury']
    };
    const years = ['2022', '2023', '2024'];
    const cars = [];

    baseIndianCars.forEach(baseCar => {
        cars.push({ ...baseCar });

        const carVariants = variants[baseCar.type] || ['Base', 'Premium'];

        // Generate variants (include year in the name so names are unique)
        carVariants.forEach(variant => {
            years.forEach(year => {
                // Only create variant if it's not the base model of current year
                if (!(year === baseCar.model && variant === 'Base')) {
                    const variantPrice = baseCar.pricePerDay *
                        (variant === 'Premium' ? 1.2 :
                         variant === 'Luxury' ? 1.5 :
                         variant === 'Sport' ? 1.3 :
                         variant === 'Adventure' ? 1.25 :
                         variant === 'Smart' ? 1.15 : 1);

                    // Create a descriptive, unique name that includes variant and year
                    const variantName = `${baseCar.name} ${variant} ${year}`;

                    cars.push({
                        name: variantName,
                        brand: baseCar.brand,
                        model: year,
                        type: baseCar.type,
                        pricePerDay: Math.round(variantPrice),
                        available: true
                    });
                }
            });
        });
    });

    return cars;
}

// Export the generated cars
module.exports = generateMoreCars();