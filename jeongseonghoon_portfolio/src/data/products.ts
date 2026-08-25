// 쇼핑몰 탭에서 사용할 더미 상품 데이터
// src/shooping_exp (Figma Make로 만든 "SHOPHUB" 참고 디자인)의 데이터를 그대로 옮겨왔다
// 4단계(FastAPI + Supabase 연동)에서는 이 배열 대신 실제 API 응답으로 교체될 예정
export interface Product {
  id: string
  name: string
  price: number
  originalPrice: number
  discount: number
  category: string
  rating: number
  reviews: number
  badge?: 'BEST' | 'NEW' | 'HOT' | 'SALE'
  image: string
  // 참고 디자인에는 없던 필드. 상품 상세 페이지에서 보여주기 위해 새로 추가했다
  description: string
}

export const CATEGORIES = [
  '전체',
  '패션',
  '뷰티',
  '전자기기',
  '식품',
  '가구',
  '스포츠',
  '도서',
] as const

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '오버핏 기모 후드집업',
    price: 45000,
    originalPrice: 68000,
    discount: 34,
    category: '패션',
    rating: 4.8,
    reviews: 1243,
    badge: 'BEST',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format',
    description: '안감이 두꺼운 기모 원단으로 만들어 겨울에도 따뜻하게 입을 수 있는 후드집업입니다.',
  },
  {
    id: '2',
    name: '슬림핏 데님 팬츠',
    price: 62000,
    originalPrice: 89000,
    discount: 30,
    category: '패션',
    rating: 4.6,
    reviews: 892,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1542219550-37153d387c27?w=400&h=400&fit=crop&auto=format',
    description: '신축성 있는 데님 소재로 활동하기 편안한 슬림핏 팬츠입니다.',
  },
  {
    id: '3',
    name: '히알루론산 토너 세럼 세트',
    price: 38000,
    originalPrice: 52000,
    discount: 27,
    category: '뷰티',
    rating: 4.9,
    reviews: 2156,
    badge: 'BEST',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&auto=format',
    description: '히알루론산이 함유되어 피부에 수분을 채워주는 토너와 세럼 세트입니다.',
  },
  {
    id: '4',
    name: '노이즈캔슬링 무선 이어폰',
    price: 89000,
    originalPrice: 129000,
    discount: 31,
    category: '전자기기',
    rating: 4.7,
    reviews: 3421,
    badge: 'HOT',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format',
    description: '주변 소음을 차단하는 노이즈캔슬링 기능을 갖춘 무선 이어폰입니다.',
  },
  {
    id: '5',
    name: '유기농 그래놀라 세트',
    price: 15900,
    originalPrice: 22000,
    discount: 28,
    category: '식품',
    rating: 4.5,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=400&h=400&fit=crop&auto=format',
    description: '유기농 곡물과 견과류로 만든 건강한 아침 대용 그래놀라 세트입니다.',
  },
  {
    id: '6',
    name: '미니멀 LED 무드등',
    price: 52000,
    originalPrice: 75000,
    discount: 31,
    category: '가구',
    rating: 4.4,
    reviews: 445,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
    description: '은은한 조명으로 방 분위기를 바꿔주는 미니멀 디자인의 LED 무드등입니다.',
  },
  {
    id: '7',
    name: '경량 쿠션 러닝화',
    price: 128000,
    originalPrice: 178000,
    discount: 28,
    category: '스포츠',
    rating: 4.8,
    reviews: 1876,
    badge: 'BEST',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format',
    description: '가벼운 착화감과 쿠션감을 동시에 갖춘 러닝화입니다.',
  },
  {
    id: '8',
    name: '2024 베스트셀러 소설 4종',
    price: 52800,
    originalPrice: 66000,
    discount: 20,
    category: '도서',
    rating: 4.7,
    reviews: 324,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop&auto=format',
    description: '2024년 화제가 된 베스트셀러 소설을 모은 4권 세트입니다.',
  },
  {
    id: '9',
    name: '울혼방 케이블 니트',
    price: 35000,
    originalPrice: 55000,
    discount: 36,
    category: '패션',
    rating: 4.5,
    reviews: 567,
    badge: 'SALE',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&auto=format',
    description: '울이 혼방된 포근한 소재의 케이블 패턴 니트입니다.',
  },
  {
    id: '10',
    name: '선크림 SPF50+ PA++++',
    price: 22000,
    originalPrice: 32000,
    discount: 31,
    category: '뷰티',
    rating: 4.8,
    reviews: 4521,
    badge: 'BEST',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop&auto=format',
    description: '높은 자외선 차단 지수로 야외 활동 시에도 안심할 수 있는 선크림입니다.',
  },
  {
    id: '11',
    name: '스마트워치 GPS 심박계',
    price: 189000,
    originalPrice: 258000,
    discount: 27,
    category: '전자기기',
    rating: 4.6,
    reviews: 1123,
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format',
    description: 'GPS와 심박수 측정 기능을 갖춘 다기능 스마트워치입니다.',
  },
  {
    id: '12',
    name: '웨이 프로틴 2kg',
    price: 45000,
    originalPrice: 65000,
    discount: 31,
    category: '스포츠',
    rating: 4.5,
    reviews: 789,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop&auto=format',
    description: '운동 후 근육 회복을 돕는 고단백 웨이 프로틴입니다.',
  },
]

export const HERO_BANNERS = [
  {
    id: 1,
    title: '2024 F/W 컬렉션',
    subtitle: '올 가을, 가장 세련된 스타일을 만나보세요',
    cta: '지금 쇼핑하기',
    color: '#014274',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=500&fit=crop&auto=format',
  },
  {
    id: 2,
    title: '테크 세일 UP TO 40%',
    subtitle: '최신 전자기기를 특별한 가격에 만나보세요',
    cta: '할인 보러가기',
    color: '#0052CC',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=500&fit=crop&auto=format',
  },
  {
    id: 3,
    title: '뷰티 위크 특가',
    subtitle: 'K-뷰티 인기 상품 최대 50% 할인',
    cta: '뷰티 보러가기',
    color: '#5B21B6',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=500&fit=crop&auto=format',
  },
]

export const QUICK_CATS = [
  { icon: '👗', label: '패션', cat: '패션' },
  { icon: '💄', label: '뷰티', cat: '뷰티' },
  { icon: '📱', label: '전자기기', cat: '전자기기' },
  { icon: '🥗', label: '식품', cat: '식품' },
  { icon: '🛋️', label: '가구', cat: '가구' },
  { icon: '⚽', label: '스포츠', cat: '스포츠' },
  { icon: '📚', label: '도서', cat: '도서' },
  { icon: '🎁', label: '선물', cat: '전체' },
]

export const BADGE_COLORS: Record<string, string> = {
  BEST: 'bg-accent-500 text-white',
  NEW: 'bg-[#8D34FF] text-white',
  HOT: 'bg-red-500 text-white',
  SALE: 'bg-orange-500 text-white',
}

// id로 상품을 찾는 헬퍼 함수. 없으면 undefined를 반환한다
export function findProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id)
}

// 숫자 가격을 "89,000원" 형태의 문자열로 변환하는 헬퍼
export function formatPrice(price: number): string {
  return `${price.toLocaleString('ko-KR')}원`
}
