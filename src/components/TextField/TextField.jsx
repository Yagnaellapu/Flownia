import React from "react";

function TextField({
  type,
  label,
  onChange,
  value,
  placeholder,
  hasSelector,
  selectorList,
}) {
  return (
    <div className="w-1/3 p-4">
      <label className="block mb-2 font-medium">{label}</label>
      <input
        type={type}
        className="w-full border-2 rounded-lg py-2 px-3 focus:outline-none focus:border-violet-400 focus:ring-violet-400 block focus:ring-3"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={12}
      />
    </div>
  );
}

export default TextField;
