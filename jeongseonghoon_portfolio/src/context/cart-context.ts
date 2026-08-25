import { createContext } from 'react'

// 장바구니에는 "어떤 상품을 몇 개" 담았는지만 저장한다
// 상품의 이름/가격 같은 상세 정보는 필요할 때 products.ts에서 조회해서 합쳐 쓴다
export interface CartItem {
  productId: string
  quantity: number
}

export interface CartContextValue {
  items: CartItem[]
  addItem: (productId: string, quantity: number) => void
  updateQuantity: (productId: string, quantity: number) => void
  removeItem: (productId: string) => void
  clearCart: () => void
  totalCount: number
}

// Context 정의만 이 파일에 두고, Provider 컴포넌트와 useCart 훅은
// react-refresh(HMR)가 "컴포넌트만 export하는 파일"을 요구하기 때문에 별도 파일로 분리했다
export const CartContext = createContext<CartContextValue | null>(null)
