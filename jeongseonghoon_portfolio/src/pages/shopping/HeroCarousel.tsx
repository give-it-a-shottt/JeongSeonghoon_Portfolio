import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HERO_BANNERS } from '../../data/products'

/**
 * 홈 화면 상단의 자동 재생 배너 캐러셀. 4.5초마다 다음 배너로 자동 전환되고,
 * 화살표/도트 클릭으로도 직접 이동할 수 있다
 */
function HeroCarousel() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % HERO_BANNERS.length)
    }, 4500)
    // 컴포넌트가 사라지면 타이머도 반드시 정리한다
    return () => clearInterval(timer)
  }, [])

  const goPrev = () => setSlide((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length)
  const goNext = () => setSlide((prev) => (prev + 1) % HERO_BANNERS.length)

  return (
    <section className="relative h-[380px] overflow-hidden">
      {HERO_BANNERS.map((banner, i) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === slide ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <img src={banner.image} alt={banner.title} className="h-full w-full object-cover" />
          {/* 배너마다 다른 브랜드 색상으로 좌측이 진한 그라데이션 오버레이를 얹는다 */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, ${banner.color}F0 0%, ${banner.color}88 45%, transparent 100%)`,
            }}
          />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-8 md:px-12">
              <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
                Special Offer
              </p>
              <h2 className="mb-3 text-3xl leading-tight font-black text-white md:text-4xl">
                {banner.title}
              </h2>
              <p className="mb-6 text-sm text-white/90 md:text-base">{banner.subtitle}</p>
              <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-black text-primary-900 transition-all hover:bg-neutral-50 active:scale-95">
                {banner.cta}
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goPrev}
        aria-label="이전 배너"
        className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={goNext}
        aria-label="다음 배너"
        className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {HERO_BANNERS.map((banner, i) => (
          <button
            key={banner.id}
            onClick={() => setSlide(i)}
            aria-label={`${i + 1}번째 배너로 이동`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === slide ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
