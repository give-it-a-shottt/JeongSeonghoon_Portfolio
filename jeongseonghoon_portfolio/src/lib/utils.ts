import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// shadcn/ui 컴포넌트들이 공통으로 쓰는 클래스 병합 헬퍼
// clsx로 조건부 클래스를 합치고, tailwind-merge로 충돌하는 유틸리티 클래스(예: px-2 px-4)를 정리한다
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
