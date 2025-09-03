import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from './cn'

const button = cva(
  'inline-flex items-center justify-center rounded-2xl text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-teal text-black hover:opacity-90',
        outline: 'border border-silver/40 text-silver hover:bg-white/5',
        ghost: 'text-silver hover:bg-white/5',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(button({ variant, size, className }))} {...props} />
}


