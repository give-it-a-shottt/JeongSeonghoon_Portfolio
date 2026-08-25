import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Star } from 'lucide-react'
import { findProductById, formatPrice } from '../../data/products'
import { useCart } from '../../context/useCart'

/**
 * 상품 상세 페이지. 수량을 조절한 뒤 장바구니에 담을 수 있다
 */
function ProductDetail() {
  // URL의 :productId 파라미터로 상품을 찾는다
  const { productId } = useParams<{ productId: string }>()
  const product = productId ? findProductById(productId) : undefined

  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  // 장바구니에 담은 직후 잠깐 보여줄 안내 메시지
  const [justAdded, setJustAdded] = useState(false)

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-neutral-500">존재하지 않는 상품입니다.</p>
      </div>
    )
  }

  function handleAddToCart() {
    addItem(product!.id, quantity)
    setJustAdded(true)
    // 2초 뒤 안내 메시지를 자동으로 숨긴다
    setTimeout(() => setJustAdded(false), 2000)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link
        to="/shopping"
        className="mb-6 inline-block text-sm text-neutral-400 hover:text-neutral-600"
      >
        ← 상품 목록
      </Link>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-2xl bg-neutral-100">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <p className="mb-1 text-sm text-neutral-400">{product.category}</p>
          <h2 className="mb-2 text-2xl font-bold text-neutral-900">{product.name}</h2>

          <div className="mb-3 flex items-center gap-1">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span className="text-sm font-bold text-neutral-600">{product.rating}</span>
            <span className="text-sm text-neutral-400">
              ({product.reviews.toLocaleString()}개 리뷰)
            </span>
          </div>

          <p className="mb-4 text-neutral-500">{product.description}</p>

          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black text-red-500">{product.discount}%</span>
              <span className="text-2xl font-black text-primary-900">
                {formatPrice(product.price)}
              </span>
            </div>
            <span className="text-sm text-neutral-300 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          </div>

          {/* 수량 조절 */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-sm text-neutral-500">수량</span>
            <div className="flex items-center rounded-lg border border-neutral-300">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 text-neutral-600 hover:bg-primary-50"
                aria-label="수량 감소"
              >
                -
              </button>
              <span className="w-10 text-center text-neutral-900">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 text-neutral-600 hover:bg-primary-50"
                aria-label="수량 증가"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-lg bg-primary-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-950"
          >
            장바구니 담기
          </button>

          {justAdded && (
            <p className="mt-3 text-sm font-medium text-primary-900">장바구니에 담았습니다 ✓</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
