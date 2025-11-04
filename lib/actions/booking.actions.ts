'use server';

import { Booking } from "@/database";
import connectDB from "../mongodb";

export const createBooking = async ({
  eventId,
  email,
}: {
  eventId: string;
  email: string;
}) => {
  try {
    await connectDB();
    await Booking.create({ eventId, email });
    return { success: true };
  } catch (e) {
    console.error("Create booking failed:", e); // <-- actual DB or validation error
    return {
      success: false,
      error: e instanceof Error ? e.message : "Unknown error",
    };
  }
};
 