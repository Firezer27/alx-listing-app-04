import axios from "axios";
import { useEffect, useState } from "react";
import { Review } from "@/interfaces";

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({
  propertyId,
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold mb-4">
        Reviews
      </h3>

      {reviews.length === 0 && (
        <p>No reviews yet.</p>
      )}

      {reviews.map((review, index) => (
        <div
          key={index}
          className="border-b pb-4 mb-4"
        >
          <div className="flex items-center mb-2">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">
                {review.name}
              </p>
              <p className="text-yellow-500">
                ⭐ {review.rating}
              </p>
            </div>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
