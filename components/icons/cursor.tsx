import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function Cursor({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      data-slot="cursor"
      width={31}
      height={31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("size-5", className)}
      {...props}
    >
      <g filter="url(#cursor-shadow)">
        <path
          d="M16.1751 25.4866L8.70626 11.387C8.27864 10.5797 9.01345 9.6479 9.90756 9.86365L25.5238 13.6319C26.4445 13.854 26.6367 15.0669 25.8296 15.5617L20.5049 18.826C20.2878 18.959 20.1257 19.1646 20.0479 19.4055L18.1391 25.3136C17.8498 26.2092 16.6154 26.3179 16.1751 25.4866Z"
          fill="#8570FF"
        />
        <path
          d="M8.2331 11.6341C7.59166 10.4232 8.69398 9.02537 10.0351 9.349L25.6513 13.1167C27.0323 13.45 27.3206 15.2698 26.1103 16.0121L20.7852 19.2762C20.6767 19.3427 20.5956 19.4456 20.5567 19.566L18.6481 25.4745C18.214 26.8176 16.3619 26.9807 15.7014 25.7338L8.2331 11.6341Z"
          stroke="#8570FF"
          strokeWidth={1.06397}
        />
      </g>
      <defs>
        <filter
          id="cursor-shadow"
          x={5.38182}
          y={7.70704}
          width={24.1534}
          height={22.5967}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1.06397} />
          <feGaussianBlur stdDeviation={1.06397} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
