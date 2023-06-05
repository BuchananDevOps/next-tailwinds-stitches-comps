import React from "react"

import { theme } from "@/theme"

import { IconProps } from "./index"

const Submit: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  className,
  ...props
}) => {
  const color = fill || theme?.colors?.accents3?.value

  return (
    <svg
      className={className}
      data-name="Iconly/Curved/Lock"
      height={size || height || 24}
      stroke={color}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(2 2)">
        <path
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default Submit
