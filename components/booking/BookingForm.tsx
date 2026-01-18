const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Contact Detail</h2>

    <form className="space-y-6">
      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>First Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>Email</label>
          <input type="email" className="border p-2 w-full mt-2 rounded-md" />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
      </div>

      {/* Payment */}
      <h2 className="text-xl font-semibold">Pay with</h2>

      <div>
        <label>Card Number</label>
        <input type="text" className="border p-2 w-full mt-2 rounded-md" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
        <div>
          <label>CVV</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
      </div>

      {/* Billing */}
      <h2 className="text-xl font-semibold">Billing Address</h2>

      <div>
        <label>Street Address</label>
        <input type="text" className="border p-2 w-full mt-2 rounded-md" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>City</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
        <div>
          <label>State</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
        <div>
          <label>Country</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" />
        </div>
      </div>

      <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
