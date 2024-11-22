import React from "react";
import { PanelRightOpen, PanelRightClose } from "lucide-react";

export default function Sidebtn({ toggleSidebar }) {
  return (
    <div className="relative">
      <button
        className="fixed top-24 right-10 lg:right-24 bg-[#572dff] p-2 rounded-lg shadow-lg z-10"
        onClick={toggleSidebar}
      >
        <PanelRightOpen color="#fefefe" />
      </button>
    </div>
  );
}
