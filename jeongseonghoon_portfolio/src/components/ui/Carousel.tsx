import { useState } from 'react'

// 캐러셀에 표시할 슬라이드 데이터 (배경색 + 라벨만 있는 간단한 더미 슬라이드)
const SLIDES = [
  { color: 'bg-violet-500', label: '슬라이드 1' },
  { color: 'bg-sky-500', label: '슬라이드 2' },
  { color: 'bg-emerald-500', label: '슬라이드 3' },
]

/**
 * 이전/다음 버튼과 인디케이터로 실제 슬라이드가 넘어가는 캐러셀 컴포넌트
 */
function Carousel() {
  // 현재 보여지는 슬라이드의 인덱스
  const [index, setIndex] = useState(0)

  // 배열 끝/처음을 넘어가면 반대쪽으로 순환하도록 나머지 연산(%) 사용
  const goPrev = () => setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  const goNext = () => setIndex((prev) => (prev + 1) % SLIDES.length)

  return (
    <div className="w-full max-w-md">
      <div className="relative h-48 overflow-hidden rounded-xl">
        {/* translateX로 슬라이드 전체를 가로로 이동시켜 넘어가는 효과를 만든다 */}
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.label}
              className={`flex h-full w-full shrink-0 items-center justify-center text-lg font-semibold text-white ${slide.color}`}
            >
              {slide.label}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={goPrev}
          aria-label="이전 슬라이드"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-1 text-white hover:bg-black/60"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="다음 슬라이드"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-1 text-white hover:bg-black/60"
        >
          ›
        </button>
      </div>

      {/* 하단 인디케이터: 클릭하면 해당 슬라이드로 바로 이동 */}
      <div className="mt-3 flex justify-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.label}
            type="button"
            aria-label={`${i + 1}번째 슬라이드로 이동`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? 'w-5 bg-violet-600' : 'bg-neutral-300 dark:bg-neutral-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
