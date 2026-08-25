import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../../context/useCart'
import { findProductById, formatPrice, type Product } from '../../data/products'

interface CartRow {
  productId: string
  quantity: number
  product: Product
}

/**
 * 장바구니 페이지. 담긴 상품의 수량을 바꾸거나 삭제하고, 총 금액을 확인할 수 있다
 */
function CartPage() {
  const { items, updateQuantity, removeItem, totalCount } = useCart()

  // 장바구니 항목(productId + quantity)에 실제 상품 정보(이름/가격)를 합쳐서 사용한다
  const cartRows = items
    .map((item) => {
      const product = findProductById(item.productId)
      return product ? { ...item, product } : null
    })
    .filter((row): row is CartRow => row !== null)

  const totalPrice = cartRows.reduce((sum, row) => sum + row.product.price * row.quantity, 0)

  if (cartRows.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8 text-center">
        <p className="mb-4 text-neutral-500">장바구니가 비어 있습니다.</p>
        <Link
          to="/shopping"
          className="rounded-full bg-primary-900 px-4 py-2 text-sm font-medium text-white hover:bg-primary-950"
        >
          상품 보러 가기
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link to="/shopping" className="mb-4 inline-block text-sm text-neutral-400 hover:text-neutral-600">
        ← 상품 목록
      </Link>

      <h2 className="mb-6 text-2xl font-bold text-neutral-900">장바구니 ({totalCount})</h2>

      <div className="mb-6 flex flex-col gap-3">
        {cartRows.map((row) => (
          <div
            key={row.productId}
            className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4"
          >
            <img
              src={row.product.image}
              alt={row.product.name}
              className="h-14 w-14 shrink-0 rounded-lg bg-neutral-100 object-cover"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-neutral-900">{row.product.name}</h3>
              <p className="text-sm text-primary-900">{formatPrice(row.product.price)}</p>
            </div>

            <div className="flex items-center rounded-lg border border-neutral-300">
              <button
                type="button"
                onClick={() => updateQuantity(row.productId, row.quantity - 1)}
                className="flex h-7 w-7 items-center justify-center text-neutral-600 hover:bg-primary-50"
                aria-label="수량 감소"
              >
                <Minus size={12} />
              </button>
              <span className="w-8 text-center text-neutral-900">{row.quantity}</span>
              <button
                type="button"
                onClick={() => updateQuantity(row.productId, row.quantity + 1)}
                className="flex h-7 w-7 items-center justify-center text-neutral-600 hover:bg-primary-50"
                aria-label="수량 증가"
              >
                <Plus size={12} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => removeItem(row.productId)}
              className="text-neutral-400 hover:text-red-500"
              aria-label="삭제"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-neutral-200 pt-4">
        <span className="text-lg font-semibold text-neutral-900">
          총 금액 {formatPrice(totalPrice)}
        </span>
        <Link
          to="/shopping/checkout"
          className="rounded-lg bg-primary-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-950"
        >
          결제하기
        </Link>
      </div>
    </div>
  )
}

export default CartPage
