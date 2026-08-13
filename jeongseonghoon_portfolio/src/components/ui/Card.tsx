interface CardProps {
  title: string
  description: string
  emoji: string
}

/**
 * 마우스를 올리면 살짝 떠오르는 호버 인터랙션을 가진 카드 컴포넌트
 */
function Card({ title, description, emoji }: CardProps) {
  return (
    <div
      className="group cursor-pointer rounded-2xl border border-neutral-200 bg-white p-5
                 shadow-sm transition-all duration-200
                 hover:-translate-y-1 hover:shadow-lg
                 dark:border-neutral-700 dark:bg-neutral-900"
    >
      <div className="mb-3 text-3xl transition-transform duration-200 group-hover:scale-110">
        {emoji}
      </div>
      <h3 className="mb-1 text-base font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
    </div>
  )
}

export default Card
