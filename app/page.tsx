"use client";

import AppSideBar from "@/components/AppSideBar";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard"; // Assuming you saved it here

// Sample Data - You can later fetch this from an API
const PRODUCTS = [
  {
    id: 1,
    title: "Dark Roast Coffee",
    description:
      "Deep, bold flavor with notes of dark chocolate and toasted nuts.",
    price: 18.5,
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=500",
  },
  {
    id: 2,
    title: "Classic Cheeseburger",
    description:
      "Juicy beef patty with melted cheddar, lettuce, and our secret sauce.",
    price: 12.99,
    category: "Foods",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500",
  },
  {
    id: 3,
    title: "Strawberry Cheesecake",
    description:
      "Creamy NY style cheesecake topped with fresh strawberry glaze.",
    price: 7.5,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500",
  },
  {
    id: 4,
    title: "Green Tea Matcha",
    description: "Premium ceremonial grade matcha whisked to perfection.",
    price: 6.0,
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1582733315328-849315f400fa?q=80&w=500",
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      {/* Navbar stays at the top */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar on the left */}
        <AppSideBar />

        {/* Main Product Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="flex flex-col gap-6">
            <header>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Our Menu
              </h1>
              <p className="text-muted-foreground mt-1">
                Freshly prepared items delivered to your table.
              </p>
            </header>

            {/* PRODUCT GRID */}
            {/* grid-cols-1 for mobile, 2 for tablets, 3 for desktops */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {PRODUCTS.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  category={product.category}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
