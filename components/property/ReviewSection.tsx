import axios from "axios";
import { useEffect, useState } from "react";

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface ReviewSectionProps {
  propertyId: string;
}

export default function ReviewSection({ propertyId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!propertyId) return;

    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="text-gray-500">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-gray-500">No reviews yet.</p>;
  }

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border rounded-lg p-4 bg-white shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium">{review.author}</p>
              <span className="text-sm">⭐ {review.rating}</span>
            </div>

            <p className="text-gray-600">{review.comment}</p>

            <p className="text-xs text-gray-400 mt-2">
              {new Date(review.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
