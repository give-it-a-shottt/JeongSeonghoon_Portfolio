// shadcn/ui의 Skeleton 컴포넌트. 데이터 로딩 중 자리만 잡아두는 펄스 애니메이션 placeholder
import type { ComponentProps } from 'react'
import { cn } from '../../lib/utils'

function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="skeleton" className={cn('bg-accent animate-pulse rounded-md', className)} {...props} />
}

export { Skeleton }
