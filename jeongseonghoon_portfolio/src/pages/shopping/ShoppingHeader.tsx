import { Bell, Heart, Search, ShoppingCart, User } from 'lucide-react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { CATEGORIES } from '../../data/products'
import { useCart } from '../../context/useCart'

/**
 * 모든 쇼핑몰 하위 페이지(목록/상세/장바구니/결제)에 공통으로 나오는 헤더
 * 최상단 공지바 + 로고/검색/아이콘 + 카테고리 네비, 3단으로 구성된다
 * useCart()를 쓰기 때문에 반드시 CartProvider 내부에서 렌더링되어야 한다
 */
function ShoppingHeader() {
  const { totalCount } = useCart()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const searchValue = searchParams.get('q') ?? ''
  const currentCategory = pathname === '/shopping' ? (searchParams.get('category') ?? '전체') : null

  // 검색어가 바뀔 때마다 URL의 ?q= 값을 갱신한다 (홈이 아닌 페이지라면 홈으로 이동시키면서 검색)
  function handleSearchChange(value: string) {
    if (pathname === '/shopping') {
      const next = new URLSearchParams(searchParams)
      if (value) next.set('q', value)
      else next.delete('q')
      setSearchParams(next)
    } else {
      navigate(value ? `/shopping?q=${encodeURIComponent(value)}` : '/shopping')
    }
  }

  return (
    <header className="sticky top-0 z-10">
      {/* 최상단 공지바: 원본의 배송 안내 문구 + 포트폴리오로 돌아가는 링크를 함께 둔다 */}
      <div className="flex items-center justify-between gap-4 bg-primary-900 px-4 py-2 text-xs tracking-wide text-white">
        <Link to="/frontend" className="shrink-0 text-white/70 hover:text-white">
          ← 포트폴리오로
        </Link>
        <span className="text-center">
          🚚 5만원 이상 구매 시 무료배송 &nbsp;|&nbsp; 신규 회원 첫 구매 10% 할인 쿠폰 제공
        </span>
        <span className="hidden shrink-0 sm:inline text-white/70">정성훈의 쇼핑몰 데모</span>
      </div>

      <div className="border-b border-neutral-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <Link to="/shopping" className="shrink-0 text-xl font-black tracking-tight text-primary-900">
            ACC<span className="text-accent-500">IO</span>
          </Link>

          <div className="mx-auto max-w-xl flex-1">
            <div className="relative">
              <Search size={15} className="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="상품을 검색해보세요"
                value={searchValue}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full rounded-xl border border-transparent bg-neutral-100 py-2.5 pr-4 pl-9 text-sm transition-all focus:border-accent-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-0.5">
            {/* 원본 디자인처럼 클릭 기능은 없는 장식용 아이콘 */}
            <button className="hidden rounded-full p-2.5 transition-colors hover:bg-neutral-100 sm:flex" aria-label="알림">
              <Bell size={19} className="text-neutral-600" />
            </button>
            <button className="hidden rounded-full p-2.5 transition-colors hover:bg-neutral-100 sm:flex" aria-label="찜">
              <Heart size={19} className="text-neutral-600" />
            </button>
            <button className="hidden rounded-full p-2.5 transition-colors hover:bg-neutral-100 sm:flex" aria-label="마이페이지">
              <User size={19} className="text-neutral-600" />
            </button>
            <Link
              to="/shopping/cart"
              className="relative rounded-full p-2.5 transition-colors hover:bg-neutral-100"
              aria-label="장바구니"
            >
              <ShoppingCart size={19} className="text-primary-900" />
              {totalCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full bg-accent-500 px-1 text-[10px] font-black text-white">
                  {totalCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* 카테고리 네비 */}
        <div className="border-t border-neutral-100">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex gap-6 overflow-x-auto py-2.5">
              {CATEGORIES.map((c) => (
                <Link
                  key={c}
                  to={c === '전체' ? '/shopping' : `/shopping?category=${encodeURIComponent(c)}`}
                  className={`border-b-2 pb-0.5 text-sm font-medium whitespace-nowrap transition-all ${
                    currentCategory === c
                      ? 'border-primary-900 text-primary-900'
                      : 'border-transparent text-neutral-600 hover:text-primary-900'
                  }`}
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ShoppingHeader
