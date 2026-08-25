import { useMemo, useState, type ReactNode } from 'react'
import { CartContext, type CartContextValue, type CartItem } from './cart-context'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // 이미 담긴 상품이면 수량만 더하고, 처음 담는 상품이면 새 항목을 추가한다
  function addItem(productId: string, quantity: number) {
    setItems((prev) => {
      const existing = prev.find((item) => item.productId === productId)
      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...prev, { productId, quantity }]
    })
  }

  // 수량을 0 이하로 바꾸면 장바구니에서 아예 제거한다
  function updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    setItems((prev) =>
      prev.map((item) => (item.productId === productId ? { ...item, quantity } : item)),
    )
  }

  function removeItem(productId: string) {
    setItems((prev) => prev.filter((item) => item.productId !== productId))
  }

  function clearCart() {
    setItems([])
  }

  // 장바구니에 담긴 전체 수량 합계 (헤더의 "🛒 n"에 사용)
  const totalCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  const value: CartContextValue = {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    totalCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
