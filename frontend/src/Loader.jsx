import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      stroke="#646cff"
      viewBox="0 0 57 57"
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeWidth="2"
        transform="translate(1 1)"
      >
        <circle cx="5" cy="50" r="5">
          <animate
            attributeName="cy"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            repeatCount="indefinite"
            values="50;5;50;50"
          ></animate>
          <animate
            attributeName="cx"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            repeatCount="indefinite"
            values="5;27;49;5"
          ></animate>
        </circle>
        <circle cx="27" cy="5" r="5">
          <animate
            attributeName="cy"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            from="5"
            repeatCount="indefinite"
            to="5"
            values="5;50;50;5"
          ></animate>
          <animate
            attributeName="cx"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            from="27"
            repeatCount="indefinite"
            to="27"
            values="27;49;5;27"
          ></animate>
        </circle>
        <circle cx="49" cy="50" r="5">
          <animate
            attributeName="cy"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            repeatCount="indefinite"
            values="50;50;5;50"
          ></animate>
          <animate
            attributeName="cx"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            from="49"
            repeatCount="indefinite"
            to="49"
            values="49;5;27;49"
          ></animate>
        </circle>
      </g>
    </svg>
  );
}

export default React.memo(Icon);