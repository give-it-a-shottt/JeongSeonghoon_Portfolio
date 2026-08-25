import { NavLink, Outlet, Link } from 'react-router-dom'

// 프론트엔드 하위 탭 목록
// 쇼핑몰은 /frontend 안에 중첩된 페이지가 아니라 완전히 독립된 사이트(/shopping)이므로
// 절대 경로를 써서 이동한다. 나머지 탭은 /frontend 기준 상대 경로를 그대로 쓴다
const TABS = [
  { to: 'components', label: '컴포넌트 디자인' },
  { to: '/shopping', label: '쇼핑몰' },
  { to: 'messenger', label: '메신저' },
]

/**
 * /frontend 하위 모든 페이지의 레이아웃 역할.
 * 상단에 탭 네비게이션을 두고, 실제 탭 내용은 <Outlet />에 렌더링된다.
 */
function FrontendHome() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <header className="border-b border-neutral-200 bg-white px-6 py-4 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200">
            ← 메인으로
          </Link>

          <nav className="flex gap-2">
            {TABS.map((tab) => (
              <NavLink
                key={tab.to}
                to={tab.to}
                // NavLink는 현재 경로와 일치할 때 isActive를 true로 넘겨준다
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-violet-600 text-white'
                      : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800'
                  }`
                }
              >
                {tab.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  )
}

export default FrontendHome
