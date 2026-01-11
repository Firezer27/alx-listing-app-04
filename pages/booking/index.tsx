import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post("/api/bookings", formData);
      setSuccess(true);
    } catch (err) {
      console.error("Booking failed:", err);
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 space-y-4"
    >
      {Object.keys(formData).map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field}
          value={(formData as any)[field]}
          onChange={handleChange}
          className="border p-2 w-full rounded-md"
          required
        />
      ))}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-500 text-white py-2 rounded-md"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <p className="text-green-600">
          Booking confirmed!
        </p>
      )}
    </form>
  );
}
