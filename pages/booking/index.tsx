import axios from "axios";
import { useState } from "react";

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    for (const key in formData) {
      if (!formData[key as keyof BookingFormData]) {
        setError("Please fill in all fields.");
        return;
      }
    }

    setLoading(true);
    setError(null);

    try {
      await axios.post("/api/bookings", formData);
      setSuccess(true);
    } catch (err) {
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold">Guest Information</h2>

      <div className="grid grid-cols-2 gap-4">
        <input name="firstName" placeholder="First Name" onChange={handleChange} className="input" />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} className="input" />
      </div>

      <input name="email" placeholder="Email" onChange={handleChange} className="input" />
      <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} className="input" />
      <input name="cardNumber" placeholder="Card Number" onChange={handleChange} className="input" />

      <div className="grid grid-cols-2 gap-4">
        <input name="expirationDate" placeholder="MM/YY" onChange={handleChange} className="input" />
        <input name="cvv" placeholder="CVV" onChange={handleChange} className="input" />
      </div>

      <textarea
        name="billingAddress"
        placeholder="Billing Address"
        onChange={handleChange}
        className="input"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-lg"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-600">Booking confirmed!</p>}
    </form>
  );
}
