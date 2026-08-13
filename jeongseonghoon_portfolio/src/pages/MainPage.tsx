import { useState } from 'react'
import { Link } from 'react-router-dom'

type Side = 'frontend' | 'backend' | null

/**
 * 포트폴리오 첫 화면. 화면을 좌/우로 나눠 Frontend / Backend 영역을 보여주고,
 * 마우스를 올린 쪽이 넓어지는 스플릿 스크린 인터랙션을 구현한다.
 */
function MainPage() {
  // 현재 마우스가 올라가 있는 영역을 기록 -> 이 값에 따라 각 영역의 너비 비율을 바꾼다
  const [hovered, setHovered] = useState<Side>(null)

  // hovered 상태에 따라 각 영역이 차지할 flex-grow 비율을 계산하는 함수
  const getFlexClass = (side: Side) => {
    if (hovered === null) return 'flex-1' // 아무것도 호버하지 않으면 절반씩
    return hovered === side ? 'flex-[1.4]' : 'flex-[0.6]' // 호버한 쪽을 더 넓게
  }

  return (
    <div className="flex h-screen w-screen flex-col md:flex-row">
      {/* Frontend 영역 */}
      <Link
        to="/frontend"
        onMouseEnter={() => setHovered('frontend')}
        onMouseLeave={() => setHovered(null)}
        className={`group relative flex items-center justify-center overflow-hidden
                    bg-neutral-900 text-white transition-[flex-grow] duration-500 ease-out
                    ${getFlexClass('frontend')}`}
      >
        <div className="text-center">
          <p className="mb-2 text-sm tracking-[0.3em] text-neutral-400 uppercase">Client Side</p>
          <h2 className="text-4xl font-bold transition-transform duration-300 group-hover:scale-110 md:text-6xl">
            Frontend
          </h2>
          <p className="mt-4 text-sm text-neutral-400">React · TypeScript · TailwindCSS</p>
        </div>
      </Link>

      {/* Backend 영역 */}
      <Link
        to="/backend"
        onMouseEnter={() => setHovered('backend')}
        onMouseLeave={() => setHovered(null)}
        className={`group relative flex items-center justify-center overflow-hidden
                    bg-violet-700 text-white transition-[flex-grow] duration-500 ease-out
                    ${getFlexClass('backend')}`}
      >
        <div className="text-center">
          <p className="mb-2 text-sm tracking-[0.3em] text-violet-200 uppercase">Server Side</p>
          <h2 className="text-4xl font-bold transition-transform duration-300 group-hover:scale-110 md:text-6xl">
            Backend
          </h2>
          <p className="mt-4 text-sm text-violet-200">FastAPI · Supabase</p>
        </div>
      </Link>
    </div>
  )
}

export default MainPage
