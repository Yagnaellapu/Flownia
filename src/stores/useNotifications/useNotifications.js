import { create } from "zustand";
import axios from "axios";

const useNotifications = create((set) => ({
  hasNotifications: false,
  notifications: [],
  isLoading: false,
  errorMsg: "",
  selectedNotifications: [],
  selectNotifications: (notifications) => {
    set({ selectedNotifications: notifications });
  },
  getNotifications: async () => {
    set({ isLoading: true });
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      set({ notifications: res.data });
    } catch (err) {
      set({ errorMsg: err.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useNotifications;
