interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{property.title}</h2>
        <p className="text-sm text-gray-500">{property.location}</p>

        <p className="mt-2 font-medium">
          ${property.price} <span className="text-sm font-normal">/ night</span>
        </p>
      </div>
    </div>
  );
}
