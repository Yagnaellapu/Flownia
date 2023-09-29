import React, { useEffect, useState } from "react";

import Button from "../Buttons/Button";
import Modal from "../Modal/Modal";
import { useNotifications } from "../../stores";
import TextField from "../TextField/TextField";
import Selector from "../selector/Selector";


function EditModal({ onClose }) {
  const [editData, setEditData] = useState({});

  const selectedNotifications = useNotifications(
    (state) => state.selectedNotifications
  );

  useEffect(() => {
    const { name } = selectedNotifications?.[0];
    setEditData({ name });
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setEditData({ ...editData, name: e.target.value });
  };

  const { name } = editData;

  return (
    <Modal onClose={onClose}>
      <div className="flex-grow p-8 w-[500px] h-[500px] bg-white shadow-md text-black">
        <div className="w-full mx-auto px-2">
          <form className="grid grid-cols-1 gap-6 ">
            <div className=" w-full mx-auto max-w-2xl">
              {/* <Selector label={"Bussiness Type"} defaultSelectName="--select--" /> */}
              <TextField
                type="text"
                label="Bussiness Type"
                placeholder="Business Type"
                value={name}
                onChange={handleChange}
              />
            </div>

            <div className="w-full mx-auto max-w-2xl">
              <Selector
                label={"Notifications To"}
                defaultSelectName="All Contacts"
              />
            </div>

            <div className="w-full mx-auto max-w-2xl">
              <label className=" font-semibold">Scrolling Message</label>
              <textarea
                className="border-2 mt-2 w-full border-violet-400 rounded-lg p-2 outline-none"
                placeholder="Enter Scrolling Message"
                rows="4"
              />
            </div>

            <Button
              className="w-full mx-auto max-w-md mt-4"
              title={"submit"}
              primary
            />
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default EditModal;
