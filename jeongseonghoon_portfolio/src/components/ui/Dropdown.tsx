import { useEffect, useRef, useState } from 'react'

const OPTIONS = ['최신순', '인기순', '가격 낮은순', '가격 높은순']

/**
 * 클릭하면 열리고, 항목을 선택하거나 바깥을 클릭하면 닫히는 드롭다운 컴포넌트
 */
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(OPTIONS[0])
  // 드롭다운 영역 바깥 클릭을 감지하기 위해 컨테이너 DOM을 참조
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 클릭 이벤트가 컨테이너 바깥에서 발생했다면 드롭다운을 닫는다
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    // 컴포넌트가 사라질 때 이벤트 리스너도 반드시 정리한다 (메모리 누수 방지)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className="relative inline-block w-48 text-left">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-200"
      >
        {selected}
        <span className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-900">
          {OPTIONS.map((option) => (
            <li key={option}>
              <button
                type="button"
                onClick={() => {
                  setSelected(option)
                  setIsOpen(false)
                }}
                className={`block w-full px-4 py-2 text-left text-sm hover:bg-violet-50 dark:hover:bg-neutral-800 ${
                  option === selected
                    ? 'font-semibold text-violet-600'
                    : 'text-neutral-700 dark:text-neutral-200'
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
