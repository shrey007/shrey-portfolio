import { cn } from './cn'
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('inline-flex items-center rounded-full bg-gold/20 text-gold px-2 py-0.5 text-xs', className)} {...props} />
}
