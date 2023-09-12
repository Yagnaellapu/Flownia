import React, { useEffect } from "react";
import { EditModal } from "../components";
import { useOverlay } from "../stores";
import DeleteModal from "../components/DeleteModal/DeleteModal";

function OverlayManager() {
  const hasOverlay = useOverlay((state) => state.hasOverlay);
  const isEditModalVisible = useOverlay((state) => state.isEditModalVisible);
  const closeEditModal = useOverlay((state) => state.closeEditModal);
  const isDeleteModalVisible = useOverlay(
    (state) => state.isDeleteModalVisible
  );
  const closeDeleteModal = useOverlay((state) => state.closeDeleteModal);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (hasOverlay) {
      body.classList.add("has-overlay");
    }

    return () => {
      body.classList.remove("has-overlay");
    };
  }, [hasOverlay]);

  return (
    <div>
      {isEditModalVisible && <EditModal onClose={closeEditModal} />}
      {isDeleteModalVisible && <DeleteModal onClose={closeDeleteModal} />}
    </div>
  );
}

export default OverlayManager;
