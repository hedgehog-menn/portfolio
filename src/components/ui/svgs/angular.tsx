import type { SVGProps } from "react";

const Angular = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 250 250"
    preserveAspectRatio="xMidYMid"
  >
    <path
      fill="#DD0031"
      d="M125 0 21.9 36.7l15.6 135.2L125 250l87.5-78.1 15.6-135.2L125 0z"
    />
    <path
      fill="#C3002F"
      d="M125 0v32.2l72.1 25.6 12 103.8L125 250v0l87.5-78.1 15.6-135.2L125 0z"
    />
    <path
      fill="#FFF"
      d="M125 32.2 46.8 178.1h24.5l14.7-37.1h78.1l14.7 37.1h24.5L125 32.2zm34.2 87.8h-68.3l34.1-80.1 34.2 80.1z"
    />
  </svg>
);

export { Angular };