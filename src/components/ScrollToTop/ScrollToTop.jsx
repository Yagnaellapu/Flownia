import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


function ScrollToTop() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
    };
    return (
        <div className="flex justify-end items-center">
            {/* Scroll-to-top button */}
            <button
                onClick={scrollToTop}
                className="bottom-10 right-8 bg-violet-300 text-white p-2 rounded-full shadow-lg transition-opacity hover:bg-violet-500"
            >
                <MdKeyboardDoubleArrowUp size={24} />
            </button>
        </div>
    );
}
export default ScrollToTop