import { create } from "zustand";

export const useReservationStore = create((set) => ({
  currentScreen: 3,

  reservationData: {
    checkIn: null,
    checkOut: null,
    guests: 1,
    roomId: null,
    name: "",
    email: "",
  },

  nextScreen: () => {
    set((state) => ({
      currentScreen: state.currentScreen + 1,
    }));
  },

  previousScreen: () => {
    set((state) => ({
      currentScreen: state.currentScreen - 1,
    }));
  },

  updateData: (newData) => {
    set((state) => ({
      reservationData: { ...state.reservationData, ...newData },
    }));
  },
}));
