import Link from "next/link";

interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    image: string;
    price: number;
    rating: number;
    address: {
      city: string;
      country: string;
    };
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">

        {/* Property Image */}
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-56 object-cover"
        />

        {/* Property Info */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold truncate">
              {property.name}
            </h3>
            <span className="text-yellow-500 text-sm">
              ⭐ {property.rating}
            </span>
          </div>

          <p className="text-gray-500 text-sm mt-1">
            {property.address.city}, {property.address.country}
          </p>

          <p className="mt-2 text-lg font-bold">
            ${property.price}
            <span className="text-sm font-normal text-gray-500"> / night</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
