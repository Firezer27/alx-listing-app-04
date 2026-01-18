interface PropertyDetailProps {
  property: {
    name: string;
    image: string;
    description: string;
    price: number;
    rating: number;
    address: {
      city: string;
      country: string;
    };
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">{property.name}</h1>

      <p className="text-gray-500 mb-4">
        {property.address.city}, {property.address.country}
      </p>

      <p className="mb-4">{property.description}</p>

      <p className="font-semibold text-lg">
        ${property.price} / night
      </p>

      <p className="mt-2">⭐ {property.rating}</p>
    </div>
  );
}
