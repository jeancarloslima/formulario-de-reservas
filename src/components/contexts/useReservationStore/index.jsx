import { create } from "zustand";

export const useReservationStore = create((set) => ({
  currentScreen: 1,

  reservationData: {
    checkIn: null,
    checkOut: null,
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
