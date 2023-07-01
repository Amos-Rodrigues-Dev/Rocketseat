import { HTMLAttributes, ReactNode } from 'react'

interface NotificationContentProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export function NotificationContent({ children }: NotificationContentProps) {
  return (
    <div className="flex-1 flex flex-col gap-2">
      {children}
      <div className="text-xs text-zinc-400 flex items-center gap-1">
        <span>Convite</span>
        <span>Há 3 min</span>
      </div>
    </div>
  )
}
