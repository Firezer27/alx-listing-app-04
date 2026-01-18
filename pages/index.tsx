import Pill from "@/components/Pill";
import axios from "axios";
import { useEffect, useState } from "react";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Free Parking",
  "Beachfront",
  "Luxury",
];

interface Property {
  id: string;
  name: string;
  image: string;
  rating: number;
  price: number;
  address: {
    city: string;
    country: string;
  };
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (err) {
        setError("Failed to load properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading properties...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <>
      {/* Hero */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-8 flex gap-4 overflow-x-auto">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Listings */}
      <section className="max-w-7xl mx-auto px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-16">
        {properties.map((property) => (
          <div
            key={property.id}
            className="border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={property.image}
              alt={property.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold">{property.name}</h3>
                <span className="text-sm">⭐ {property.rating}</span>
              </div>

              <p className="text-sm text-gray-500">
                {property.address.city}, {property.address.country}
              </p>

              <p className="mt-2 font-semibold">
                ${property.price}{" "}
                <span className="font-normal text-sm">/ night</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
