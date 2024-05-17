import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex px-8 py-4 xmd:py-[0.75rem] xmd:px-[1.5rem] xmd:h-[3rem] h-[3.5rem] group items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-white ease-linear duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "flex uppercase button text-white justify-center items-center gap-2 border border-orange-hover bg-orange-hover rounded-lg border-solid ",
        outline:
          "flex h-14 hover:bg-orange-hover hover:text-white uppercase button text-orange-normal justify-center items-center gap-2 border border-orange-normal rounded-lg border-solid",
        outline_white:
          "flex h-14 hover:border-orange-hover hover:opacity-100 opacity-60 hover:bg-orange-hover uppercase button text-white justify-center items-center gap-2 border border-white rounded-lg border-solid",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Button = React.forwardRef(({ className, icon, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  const iconColor = variant === "outline" ? "#E64827" : "#FFF";
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} >
      {props.children}
      {icon &&
        <div className='w-max'>
          <svg className='w-3 h-[0.65625rem] group-hover:translate-x-[0.4rem] duration-300 ease-linear group-hover:stroke-white group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">

            <path className='group-hover:stroke-white ' d="M10.125 6H0" stroke={iconColor} stroke-width="2" />
            <g filter="url(#filter0_i_10201_23415)">
              <path className='group-hover:fill-white' d="M12 6L6 11.25L8.41379 6L6 0.75L12 6Z" fill={iconColor} />
            </g>
            <defs>
              <filter id="filter0_i_10201_23415" x="6" y="0.75" width="26" height="14.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="20" dy="4" />
                <feGaussianBlur stdDeviation="50" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10201_23415" />
              </filter>
              <linearGradient id="paint0_linear_10201_23415" x1="4.53912" y1="6" x2="4.53912" y2="6.892" gradientUnits="userSpaceOnUse">
                <stop offset="0.31" stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      }
    </Comp>)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
