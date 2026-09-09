export const site = {
  name: 'Enes Mobilya',
  slogan: 'Eskisini Yeniliyor, Evinize Değer Katıyoruz.',
  phoneDisplay: '0536 509 81 90',
  phoneTel: '+905365098190',
  whatsapp: '905365098190',
  email: 'info@enesmobilya.com.tr',
  address: 'Gaziosmanpaşa, Sarı Cami Sk. 74/b, 42020 Karatay/Konya',
  hours: 'Pazartesi - Cumartesi 08:30 - 19:30 · Pazar kapalı',
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: 'mira-takim',
    name: 'Mira Koltuk Takımı',
    description: 'Mira model koltuk takımı.',
    price: 89000,
    image: '/products/mira.png',
  },
  {
    id: 'mira-kanepe',
    name: 'Mira Kanepe',
    description: 'Mira model kanepe.',
    price: 35000,
    image: '/products/mira.png',
  },
  {
    id: 'mira-berjer',
    name: 'Mira Berjer',
    description: 'Mira model berjer.',
    price: 13800,
    image: '/products/mira.png',
  },

  {
    id: 'damla-takim',
    name: 'Damla Koltuk Takımı',
    description: 'Damla model koltuk takımı.',
    price: 89000,
    image: '/products/damla.png',
  },
  {
    id: 'damla-kanepe',
    name: 'Damla Kanepe',
    description: 'Damla model kanepe.',
    price: 35000,
    image: '/products/damla.png',
  },
  {
    id: 'damla-berjer',
    name: 'Damla Berjer',
    description: 'Damla model berjer.',
    price: 13800,
    image: '/products/damla.png',
  },

  {
    id: 'atlantik-takim',
    name: 'Atlantik Koltuk Takımı',
    description: 'Atlantik model koltuk takımı.',
    price: 88000,
    image: '/products/atlantik.png',
  },
  {
    id: 'atlantik-kanepe',
    name: 'Atlantik Kanepe',
    description: 'Atlantik model kanepe.',
    price: 34000,
    image: '/products/atlantik.png',
  },
  {
    id: 'atlantik-berjer',
    name: 'Atlantik Berjer',
    description: 'Atlantik model berjer.',
    price: 13800,
    image: '/products/atlantik.png',
  },

  {
    id: 'zenhart-takim',
    name: 'Zenhart Koltuk Takımı',
    description: 'Zenhart model koltuk takımı.',
    price: 92000,
    image: '/products/zenhart.png',
  },
  {
    id: 'zenhart-kanepe',
    name: 'Zenhart Kanepe',
    description: 'Zenhart model kanepe.',
    price: 36000,
    image: '/products/zenhart.png',
  },
  {
    id: 'zenhart-berjer',
    name: 'Zenhart Berjer',
    description: 'Zenhart model berjer.',
    price: 13800,
    image: '/products/zenhart.png',
  },

  {
    id: 'bohem-takim',
    name: 'Bohem Koltuk Takımı',
    description: 'Bohem model koltuk takımı.',
    price: 84000,
    image: '/products/bohem.png',
  },
  {
    id: 'bohem-kanepe',
    name: 'Bohem Kanepe',
    description: 'Bohem model kanepe.',
    price: 33500,
    image: '/products/bohem.png',
  },
  {
    id: 'bohem-berjer',
    name: 'Bohem Berjer',
    description: 'Bohem model berjer.',
    price: 12650,
    image: '/products/bohem.png',
  },

  {
    id: 'porto-takim',
    name: 'Porto Koltuk Takımı',
    description: 'Porto model koltuk takımı.',
    price: 89000,
image: "/products/19CF6132-93C0-4796-A195-41B8FA1EF1CC.png",
  },
  {
    id: 'porto-kanepe',
    name: 'Porto Kanepe',
    description: 'Porto model kanepe.',
    price: 35000,
image: '/products/294C8DAA-EE44-4A34-8C28-AE563A80F651.png',
  },
  {
    id: 'porto-berjer',
    name: 'Porto Berjer',
    description: 'Porto model berjer.',
    price: 13800,
image: '/products/88159513-4F0D-4E8B-AA95-15FC8E267CF1.png',
  },
]

export type Deal = {
  id: string
  name: string
  description: string
  oldPrice?: number
  price: number
  image: string
  sold?: boolean
}

export const deals: Deal[] = [
  {
    id: 'ikinci-el-koltuk',
    name: 'İkinci El 3+2 Koltuk Takımı',
    description: 'Az kullanılmış, bakımlı keten kumaş koltuk takımı.',
    oldPrice: 14500,
    price: 8900,
    image: '/deals/ikinci-el-koltuk.png',
  },
  {
    id: 'ikinci-el-yemek-masasi',
    name: 'İkinci El Yemek Masası (4 Sandalye)',
    description: 'Masif ahşap yemek masası ve dört sandalye, sağlam yapı.',
    oldPrice: 7200,
    price: 4250,
    image: '/deals/ikinci-el-yemek-masasi.png',
  },
  {
    id: 'ikinci-el-tv-unitesi',
    name: 'İkinci El TV Ünitesi',
    description: 'Ceviz renkli modern TV ünitesi, temiz durumda.',
    price: 2300,
    image: '/deals/ikinci-el-tv-unitesi.png',
  },
  {
    id: 'ikinci-el-gardirop',
    name: 'İkinci El Sürgülü Gardırop',
    description: 'Beyaz sürgülü kapaklı gardırop, geniş iç hacim.',
    oldPrice: 6500,
    price: 3900,
    image: '/deals/ikinci-el-gardirop.png',
    sold: true,
  },
]

export const services = [
  {
    title: 'Mobilya Yenileme',
    description:
      'Eskiyen mobilyalarınızı sıfır görünümüne kavuşturuyor, ömrünü uzatıyoruz.',
  },
  {
    title: 'Koltuk Döşeme',
    description:
      'Kumaş seçiminden dikime kadar profesyonel koltuk döşeme hizmeti.',
  },
  {
    title: 'Sünger Değişimi',
    description:
      'Çöken süngerleri yenileyerek koltuklarınıza eski rahatlığını geri veriyoruz.',
  },
  {
    title: 'Köşe Takımı Dönüşümü',
    description:
      'Köşe takımınızı isteğinize göre yeni forma ve ölçüye dönüştürüyoruz.',
  },
  {
    title: 'Özel Ölçü İşleri',
    description:
      'Mekânınıza özel ölçülerde üretim ve döşeme çözümleri sunuyoruz.',
  },
]

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Ücretsiz keşif ve fiyat teklifi veriyor musunuz?',
    answer:
      'Evet. Konya içinde adresinize gelerek ücretsiz keşif yapıyor, işin kapsamına göre net fiyat teklifi sunuyoruz. Dilerseniz fotoğraf göndererek WhatsApp üzerinden de ön fiyat alabilirsiniz.',
  },
  {
    question: 'Koltuk döşeme veya yenileme işi ne kadar sürüyor?',
    answer:
      'Standart bir koltuk takımı döşemesi genellikle 3-5 iş günü içinde tamamlanır. Süre; kumaş seçimi, sünger değişimi ve işin yoğunluğuna göre değişebilir. Kesin süreyi keşif sonrası paylaşıyoruz.',
  },
  {
    question: 'Eski mobilyamı yenilemek mi yoksa yenisini almak mı daha mantıklı?',
    answer:
      'Sağlam iskeletli mobilyalarda yenileme, sıfır almaya göre çoğu zaman daha ekonomiktir ve alıştığınız konforu korur. Keşif sırasında mobilyanızın durumunu değerlendirip size en uygun seçeneği dürüstçe öneriyoruz.',
  },
  {
    question: 'Kumaş ve renk seçeneklerini nasıl görebilirim?',
    answer:
      'Atölyemizde geniş bir kumaş ve renk kataloğu bulunuyor. Keşif sırasında örnekleri yerinde görebilir, mekânınıza en uygun dokuyu birlikte seçebiliriz.',
  },
  {
    question: 'İkinci el ve fırsat ürünleri garantili mi?',
    answer:
      'Fırsat ve ikinci el ürünlerimiz atölyemizde kontrol edilip bakımı yapıldıktan sonra satışa sunulur. Ürünün durumu ve detayları hakkında WhatsApp’tan net bilgi veriyoruz.',
  },
  {
    question: 'Teslimat ve nakliye yapıyor musunuz?',
    answer:
      'Konya içinde teslimat ve montaj desteği sağlıyoruz. Nakliye koşullarını ürün ve adrese göre keşif sırasında netleştiriyoruz.',
  },
]

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(value)
}
