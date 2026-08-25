import { Package, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { CATEGORIES, PRODUCTS } from '../../data/products'
import HeroCarousel from './HeroCarousel'
import ServiceFeatures from './ServiceFeatures'
import QuickCategories from './QuickCategories'
import ProductCard from './ProductCard'

/**
 * 쇼핑몰 홈 화면. 히어로 배너 + 서비스 안내 + 퀵 카테고리 + 상품 그리드를 한 화면에 담는다
 * 카테고리(?category=)와 검색어(?q=)는 모두 URL에 저장해서, 헤더의 검색창/카테고리 네비와 상태를 공유한다
 */
function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const category: (typeof CATEGORIES)[number] = (CATEGORIES as readonly string[]).includes(
    categoryParam ?? '',
  )
    ? (categoryParam as (typeof CATEGORIES)[number])
    : '전체'
  const searchQuery = searchParams.get('q') ?? ''

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchCategory = category === '전체' || p.category === category
    const matchSearch = p.name.includes(searchQuery)
    return matchCategory && matchSearch
  })

  function clearSearch() {
    const next = new URLSearchParams(searchParams)
    next.delete('q')
    setSearchParams(next)
  }

  return (
    <div>
      <HeroCarousel />
      <ServiceFeatures />
      <QuickCategories />

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-neutral-800">
              {category === '전체' ? '인기 상품' : `${category} 상품`}
            </h2>
            <p className="mt-0.5 text-xs text-neutral-500">{filteredProducts.length}개의 상품</p>
          </div>
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="flex items-center gap-1 text-xs text-accent-500 hover:underline"
            >
              <X size={12} /> 검색 초기화
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center text-neutral-500">
            <Package size={52} className="mx-auto mb-4 opacity-20" />
            <p className="font-medium">검색 결과가 없습니다</p>
            <p className="mt-1 text-xs">다른 검색어를 입력해보세요</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* 프로모 배너 */}
      <section
        className="px-4 py-16"
        style={{ background: 'linear-gradient(135deg, #014274 0%, #0052CC 50%, #8D34FF 100%)' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.25em] text-white/60 uppercase">
            Limited Time Offer
          </p>
          <h2 className="mb-3 text-2xl font-black text-white md:text-3xl">
            지금 가입하고 혜택을 받아보세요
          </h2>
          <p className="mb-7 text-sm text-white/80">
            신규 회원 첫 구매 10% 할인 + 무료 배송 쿠폰을 드립니다
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="rounded-xl bg-white px-7 py-3 text-sm font-black text-primary-900 transition-all hover:bg-neutral-50 active:scale-95">
              지금 가입하기
            </button>
            <button className="rounded-xl border-2 border-white/50 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-white/10 active:scale-95">
              더 알아보기
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductList
