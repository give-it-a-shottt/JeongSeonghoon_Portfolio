import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Star } from 'lucide-react'
import { BADGE_COLORS, formatPrice, type Product } from '../../data/products'
import { useCart } from '../../context/useCart'

/**
 * 상품 그리드에 쓰이는 카드 하나. 이미지/이름 영역은 상세 페이지로 이동하는 링크지만,
 * 찜(하트)과 장바구니 버튼은 카드 안에서 바로 동작해야 하므로 링크 바깥의 별도 버튼으로 둔다
 * (버튼을 링크 안에 중첩시키면 유효하지 않은 HTML 구조가 되기 때문)
 */
function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  // 찜 여부는 새로고침하면 사라지는 화면 전용 상태 (백엔드가 아직 없다)
  const [wishlisted, setWishlisted] = useState(false)
  const [justAdded, setJustAdded] = useState(false)

  function handleAddToCart() {
    addItem(product.id, 1)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1500)
  }

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <Link to={`/shopping/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {product.badge && (
          <span
            className={`absolute top-2 left-2 rounded-full px-2 py-1 text-[10px] font-black ${BADGE_COLORS[product.badge]}`}
          >
            {product.badge}
          </span>
        )}

        <button
          onClick={() => setWishlisted((prev) => !prev)}
          aria-label="찜하기"
          className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
        >
          <Heart size={14} className={wishlisted ? 'fill-red-500 text-red-500' : 'text-neutral-600'} />
        </button>
      </div>

      <div className="p-3">
        <Link to={`/shopping/${product.id}`}>
          <p className="mb-1 text-[11px] font-medium text-neutral-500">{product.category}</p>
          <h3 className="mb-2 line-clamp-2 min-h-[40px] text-sm leading-snug font-medium text-neutral-800">
            {product.name}
          </h3>
        </Link>

        <div className="mb-2.5 flex items-center gap-1">
          <Star size={10} className="fill-amber-400 text-amber-400" />
          <span className="text-xs font-bold text-neutral-600">{product.rating}</span>
          <span className="text-xs text-neutral-400">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="mb-3">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs font-black text-red-500">{product.discount}%</span>
            <span className="text-base font-black text-primary-900">{formatPrice(product.price)}</span>
          </div>
          <span className="text-xs text-neutral-300 line-through">{formatPrice(product.originalPrice)}</span>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full rounded-xl bg-primary-900 py-2 text-xs font-black text-white transition-all hover:bg-primary-950 active:scale-95"
        >
          {justAdded ? '담았어요 ✓' : '장바구니 담기'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
