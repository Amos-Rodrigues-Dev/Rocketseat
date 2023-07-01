import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface NotificationContentProps
  extends HTMLAttributes<HTMLParagraphElement> {
  text: string
}

export function NotificationContent({
  text,
  ...rest
}: NotificationContentProps) {
  return (
    <div
      {...rest}
      className={twMerge('flex-1 flex flex-col gap-2', rest.className)}>
      <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-100">
        {text}
      </p>
      <div className="text-xs text-zinc-400 flex items-center gap-1">
        <span>Convite</span>
        <span>Há 3 min</span>
      </div>
    </div>
  )
}
