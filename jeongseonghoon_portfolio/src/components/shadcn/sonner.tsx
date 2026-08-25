// shadcn/ui의 Toast 컴포넌트 (sonner 라이브러리 기반).
// 원본은 next-themes로 시스템 다크모드를 감지하지만, 이 갤러리는 항상 라이트 톤만 쓰므로 theme="light"로 고정했다
import type { CSSProperties } from 'react'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
