import { useState } from 'react'

// 메뉴바에 표시할 항목 목록 (실제 서비스에서는 이 배열을 props로 받아도 됨)
const MENU_ITEMS = ['홈', '소개', '서비스', '문의'] as const

/**
 * 실제로 클릭 시 활성 탭이 바뀌는 네비게이션 메뉴바 컴포넌트
 */
function MenuBar() {
  // 현재 선택된 메뉴 항목을 state로 관리 -> 클릭할 때마다 활성 스타일이 이동한다
  const [active, setActive] = useState<(typeof MENU_ITEMS)[number]>('홈')

  return (
    <nav className="flex gap-1 rounded-full border border-neutral-200 bg-white p-1 shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
      {MENU_ITEMS.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setActive(item)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            active === item
              ? 'bg-violet-600 text-white'
              : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800'
          }`}
        >
          {item}
        </button>
      ))}
    </nav>
  )
}

export default MenuBar
