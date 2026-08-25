import { Package, RotateCcw, Shield, Truck } from 'lucide-react'

const FEATURES = [
  { icon: Truck, label: '무료 배송', desc: '5만원 이상' },
  { icon: RotateCcw, label: '무료 반품', desc: '30일 이내' },
  { icon: Shield, label: '안전 결제', desc: 'SSL 보안' },
  { icon: Package, label: '빠른 배송', desc: '당일 출고' },
]

/**
 * 히어로 배너 아래에 놓이는 배송/반품/결제/배송 안내 4칸 서비스 소개 바
 */
function ServiceFeatures() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {FEATURES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-3 py-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-900">
                <Icon size={17} />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-800">{label}</p>
                <p className="text-xs text-neutral-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceFeatures
