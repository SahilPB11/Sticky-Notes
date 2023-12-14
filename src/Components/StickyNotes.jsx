import React from "react";

const StickyNotes = ({ content, onContentChange, position, style }) => {
  return (
    <div
      className={`sticky-note rounded-lg p-4 bg-gray-100 shadow-md w-64 h-64 overflow-hidden ${style}`}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
      }}
    >
      <textarea
        className="w-full h-full resize-none outline-none border-none focus:ring-1 focus:ring-blue-500"
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder="Write your note..."
      />
    </div>
  );
};

export default StickyNotes;
