// 다음 단계에서 구현할 기능 목록 (미리 보여줘서 방향을 안내하는 용도)
const UPCOMING_FEATURES = [
  { emoji: '🗂️', title: '상품 목록', desc: '카테고리/검색으로 상품을 탐색' },
  { emoji: '🔍', title: '상품 상세', desc: '옵션 선택, 수량 조절' },
  { emoji: '🛒', title: '장바구니', desc: '담기/삭제, 총 금액 계산' },
  { emoji: '💳', title: '결제(목업)', desc: '주문서 작성 및 결제 흐름 시뮬레이션' },
]

/**
 * 쇼핑몰 탭은 2단계에서 실제 기능을 구현할 예정 -> 지금은 안내용 자리 표시 페이지
 */
function ShoppingMallPlaceholder() {
  return (
    <div className="text-center">
      <div className="mb-4 text-5xl">🛍️</div>
      <h2 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
        쇼핑몰 — 준비 중
      </h2>
      <p className="mx-auto mb-10 max-w-md text-neutral-500 dark:text-neutral-400">
        다음 단계에서 실제 동작하는 쇼핑몰 데모를 구현할 예정입니다. 아래는 구현 예정 기능입니다.
      </p>

      <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
        {UPCOMING_FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900"
          >
            <div className="mb-2 text-2xl">{f.emoji}</div>
            <h3 className="mb-1 font-semibold text-neutral-900 dark:text-neutral-100">
              {f.title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShoppingMallPlaceholder
