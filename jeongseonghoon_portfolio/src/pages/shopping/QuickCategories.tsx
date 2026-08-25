import { Link, useSearchParams } from 'react-router-dom'
import { QUICK_CATS } from '../../data/products'

/**
 * 히어로 배너 아래 놓이는 이모지 아이콘 카테고리 바로가기.
 * 헤더의 카테고리 네비와 마찬가지로 ?category= 값을 공유한다
 */
function QuickCategories() {
  const [searchParams] = useSearchParams()
  const currentCategory = searchParams.get('category') ?? '전체'

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
        {QUICK_CATS.map((quick) => {
          const isActive = currentCategory === quick.cat
          return (
            <Link
              key={quick.label}
              to={quick.cat === '전체' ? '/shopping' : `/shopping?category=${encodeURIComponent(quick.cat)}`}
              className={`group flex flex-col items-center gap-2 rounded-2xl p-3 transition-all ${
                isActive ? 'bg-primary-50' : 'hover:bg-white hover:shadow-md'
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl transition-shadow ${
                  isActive ? 'bg-primary-900/10 shadow-md' : 'bg-white shadow-sm group-hover:shadow-md'
                }`}
              >
                {quick.icon}
              </div>
              <span
                className={`text-xs font-medium transition-colors ${
                  isActive ? 'font-bold text-primary-900' : 'text-neutral-600 group-hover:text-primary-900'
                }`}
              >
                {quick.label}
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default QuickCategories
