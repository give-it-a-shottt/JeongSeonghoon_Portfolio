import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/useCart'
import { findProductById, formatPrice, type Product } from '../../data/products'

interface OrderSummary {
  rows: { product: Product; quantity: number }[]
  totalPrice: number
  name: string
}

/**
 * 결제(목업) 페이지. 실제 결제 대신 주문 정보를 요약해 보여주고 장바구니를 비운다
 * 4단계에서 FastAPI 연동 시 이 handleSubmit이 실제 주문 생성 API 호출로 바뀔 예정
 */
function CheckoutPage() {
  const { items, clearCart } = useCart()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  // 주문이 완료되면 이 값이 채워지고, 완료 화면으로 전환된다
  const [completedOrder, setCompletedOrder] = useState<OrderSummary | null>(null)

  const cartRows = items
    .map((item) => {
      const product = findProductById(item.productId)
      return product ? { product, quantity: item.quantity } : null
    })
    .filter((row): row is { product: Product; quantity: number } => row !== null)

  const totalPrice = cartRows.reduce((sum, row) => sum + row.product.price * row.quantity, 0)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // 장바구니를 비우기 전에 주문 요약을 먼저 저장해둔다 (비우고 나면 items가 사라지기 때문)
    setCompletedOrder({ rows: cartRows, totalPrice, name })
    clearCart()
  }

  // 주문 완료 화면
  if (completedOrder) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8 text-center">
        <div className="mb-4 text-5xl">✅</div>
        <h2 className="mb-2 text-2xl font-bold text-neutral-900">주문이 완료되었습니다</h2>
        <p className="mb-8 text-neutral-500">
          {completedOrder.name}님, 아래 내용으로 주문이 접수되었습니다. (실제 결제는 이루어지지
          않은 데모입니다)
        </p>

        <div className="mx-auto mb-8 max-w-md rounded-xl border border-neutral-200 bg-white p-4 text-left">
          {completedOrder.rows.map((row) => (
            <div key={row.product.id} className="flex justify-between py-1 text-sm">
              <span className="text-neutral-700">
                {row.product.name} × {row.quantity}
              </span>
              <span className="text-neutral-500">
                {formatPrice(row.product.price * row.quantity)}
              </span>
            </div>
          ))}
          <div className="mt-2 flex justify-between border-t border-neutral-200 pt-2 font-semibold text-neutral-900">
            <span>총 결제 금액</span>
            <span>{formatPrice(completedOrder.totalPrice)}</span>
          </div>
        </div>

        <Link
          to="/shopping"
          className="rounded-full bg-primary-900 px-4 py-2 text-sm font-medium text-white hover:bg-primary-950"
        >
          상품 목록으로
        </Link>
      </div>
    )
  }

  // 장바구니가 비어 있는데 아직 주문도 완료되지 않은 경우
  if (cartRows.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8 text-center">
        <p className="mb-4 text-neutral-500">장바구니가 비어 있어 결제를 진행할 수 없습니다.</p>
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
      <Link to="/shopping/cart" className="mb-4 inline-block text-sm text-neutral-400 hover:text-neutral-600">
        ← 장바구니로
      </Link>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-neutral-900">주문자 정보</h2>

          <label className="flex flex-col gap-1 text-sm">
            <span className="text-neutral-600">이름</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border border-neutral-300 px-3 py-2 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:outline-none"
              placeholder="홍길동"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm">
            <span className="text-neutral-600">배송 주소</span>
            <input
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="rounded-lg border border-neutral-300 px-3 py-2 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:outline-none"
              placeholder="서울특별시 ..."
            />
          </label>

          <label className="flex flex-col gap-1 text-sm">
            <span className="text-neutral-600">연락처</span>
            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-lg border border-neutral-300 px-3 py-2 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:outline-none"
              placeholder="010-0000-0000"
            />
          </label>

          <button
            type="submit"
            className="mt-2 rounded-lg bg-primary-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-950"
          >
            주문 완료하기
          </button>
        </form>

        <div>
          <h2 className="mb-4 text-xl font-bold text-neutral-900">주문 요약</h2>
          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            {cartRows.map((row) => (
              <div key={row.product.id} className="flex justify-between py-1 text-sm">
                <span className="text-neutral-700">
                  {row.product.name} × {row.quantity}
                </span>
                <span className="text-neutral-500">
                  {formatPrice(row.product.price * row.quantity)}
                </span>
              </div>
            ))}
            <div className="mt-2 flex justify-between border-t border-neutral-200 pt-2 font-semibold text-neutral-900">
              <span>총 결제 금액</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
