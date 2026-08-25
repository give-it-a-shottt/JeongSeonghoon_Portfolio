import { useContext } from 'react'
import { CartContext } from './cart-context'

// Provider 내부에서만 사용할 수 있는 커스텀 훅. Provider 바깥에서 쓰면 바로 에러를 던져 실수를 빨리 발견하게 한다
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart는 CartProvider 내부에서만 사용할 수 있습니다')
  }
  return context
}
