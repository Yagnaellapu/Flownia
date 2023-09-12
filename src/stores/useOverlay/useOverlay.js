import { create } from "zustand";

const useOverlay = create((set) => ({
  hasOverlay: false,
  isEditModalVisible: false,
  isDeleteModalVisible: false,

  showEditModal: () =>
    set(() => ({ hasOverlay: true, isEditModalVisible: true })),
  closeEditModal: () =>
    set(() => ({ hasOverlay: false, isEditModalVisible: false })),

  showDeleteModal: () =>
    set(() => ({ hasOverlay: true, isDeleteModalVisible: true })),
  closeDeleteModal: () =>
    set(() => ({ hasOverlay: false, isDeleteModalVisible: false })),
}));

export default useOverlay;
