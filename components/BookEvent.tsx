"use client";


import { useState } from "react";
import { useToast} from "./toast-1";
import { createBooking } from "@/lib/actions/booking.actions";
const BookEvent = ({ eventId}: { eventId: string; }) => {
    const {showToast} = useToast()
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
        if(!email){
             showToast("Enter an email address", "error", "bottom-right");
             return
        }
      const { success } = await createBooking({ eventId,  email });
        
      if (success) {
        setSubmitted(true);
        
               showToast('Event Booked.', 'success', 'bottom-right')

      } else {
        // console.error("Booking creation failed");
        showToast("Booking creation failed", "error", "bottom-right");
        
      }
    };
  return (
    <div id="book-event">
      {submitted ? (
        <p className="text-sm">Thank you for signing up!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter your email address"
            />
          </div>

          <button type="submit" className="button-submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
