import { useState } from 'react'

/**
 * 버튼 클릭 시 열리고, 배경 클릭이나 닫기 버튼으로 닫히는 모달 컴포넌트
 */
function Modal() {
  // 모달이 열려있는지 여부만 관리하면 되는 간단한 state
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
      >
        모달 열기
      </button>

      {isOpen && (
        // 반투명 배경(오버레이) 클릭 시 닫히도록 onClick을 배경에 건다
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* 모달 내부 클릭은 닫힘으로 이어지지 않도록 이벤트 전파를 막는다 */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl dark:bg-neutral-900"
          >
            <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              모달 창입니다
            </h3>
            <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
              배경을 클릭하거나 닫기 버튼을 누르면 모달이 사라집니다.
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
