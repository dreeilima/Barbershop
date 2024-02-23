"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

interface SaveBookingParams {
  barbershopId: string;
  serviceId: string;
  date: string;
  userId: string;
}

export const saveBooking = async (params: SaveBookingParams) => {
  await db.booking.create({
    data: {
      barbershopId: params.barbershopId,
      serviceId: params.serviceId,
      date: params.date,
      userId: params.userId,
    },
  });

  revalidatePath("/");
  revalidatePath("/bookings");
};
