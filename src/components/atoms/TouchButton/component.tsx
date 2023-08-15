import React, { FC } from "react";
export const KeyboardButton: FC<any> = ({
  text = "",
  isPressed = false,
  onKeyUp,
  onKeyDown,
  keyCode,
}) => {
  return (
    <div
      className="p-1.5 bg-gray-300 rounded select-none"
      tabIndex={keyCode}
      onTouchCancel={() => onKeyUp({ keyCode })}
      onTouchStart={() => onKeyDown({ keyCode })}
      onTouchEnd={() => onKeyUp({ keyCode })}
      onMouseDown={() => onKeyDown({ keyCode })}
      onMouseUp={() => onKeyUp({ keyCode })}
      onKeyUp={() => onKeyUp({ keyCode })}
      onKeyDown={() => onKeyDown({ keyCode })}
    >
      <button
        className={`w-10 h-10 rounded select-none ${
          isPressed ? "bg-gray-50 shadow-inner" : "bg-white shadow-xl"
        } flex items-center justify-center`}
      >
        {text}
      </button>
    </div>
  );
};
