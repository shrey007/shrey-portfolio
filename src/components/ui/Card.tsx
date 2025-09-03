import { cn } from './cn'
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-2xl border border-silver/20 bg-white/60 dark:bg-white/5 shadow-soft backdrop-blur', className)} {...props} />
}


