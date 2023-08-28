// Normalized state with users

import { create } from "zustand";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface State {
  // Normalized state byId and allIds
  byId: {
    [id: string]: User;
  };
  allIds: string[];
  addUser: (user: User) => void;
  removeUser: (id: string) => void;
  updateUser: (user: User) => void;
}

export const initialState: Pick<State, "byId" | "allIds"> = {
  byId: {
    "1": {
      id: "1",
      name: "John Doe",
      email: "",
    },
    "2": {
      id: "2",
      name: "Jane Doe",
      email: "",
    },
  },
  allIds: ["1", "2"],
};

// Zustand to manage state
export const useUserStore = create<State>((set) => ({
  ...initialState,
  // Actions
  addUser: (user: User) =>
    set((state) => ({
      ...state,
      byId: {
        ...state.byId,
        [user.id]: user,
      },
      allIds: [...state.allIds, user.id],
    })),
  removeUser: (id: string) =>
    set((state) => ({
      ...state,
      byId: Object.fromEntries(
        Object.entries(state.byId).filter(([key]) => key !== id)
      ),
      allIds: state.allIds.filter((key) => key !== id),
    })),
  updateUser: (user: User) =>
    set((state) => ({
      ...state,
      byId: {
        ...state.byId,
        [user.id]: user,
      },
    })),
}));
