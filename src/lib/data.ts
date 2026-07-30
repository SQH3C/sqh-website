export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  specs: Record<string, string>;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const productCategories = [
  'cpu', 'memory', 'storage', 'gpu', 'motherboard', 'psu', 'case', 'cooling', 'peripheral'
] as const;

export const products: Product[] = [
  {
    id: 'cpu-01',
    name: 'NexCore X9-7950X',
    category: 'cpu',
    image: 'https://placehold.co/400x300/0a0e27/00d4ff?text=CPU+X9-7950X',
    description: '16-Core / 32-Thread Desktop Processor',
    specs: {
      'Cores / Threads': '16 / 32',
      'Base Clock': '4.5 GHz',
      'Boost Clock': '5.7 GHz',
      'L3 Cache': '64 MB',
      'TDP': '170W',
      'Socket': 'AM5',
      'Process': '5nm',
    },
  },
  {
    id: 'cpu-02',
    name: 'NexCore i9-14900K',
    category: 'cpu',
    image: 'https://placehold.co/400x300/0a0e27/00d4ff?text=CPU+i9-14900K',
    description: '24-Core Hybrid Architecture Processor',
    specs: {
      'P-Cores / E-Cores': '8P + 16E',
      'Threads': '32',
      'Max Turbo': '6.0 GHz',
      'Smart Cache': '36 MB',
      'TDP': '125W (253W MTP)',
      'Socket': 'LGA 1700',
      'Process': 'Intel 7',
    },
  },
  {
    id: 'mem-01',
    name: 'NexCore Vengeance DDR5-6400',
    category: 'memory',
    image: 'https://placehold.co/400x300/0a0e27/6c5ce7?text=DDR5-6400',
    description: '32GB (2x16GB) High-Performance DDR5 Kit',
    specs: {
      'Capacity': '32GB (2x16GB)',
      'Speed': 'DDR5-6400',
      'Latency': 'CL32-39-39-102',
      'Voltage': '1.40V',
      'RGB': 'Yes - Customizable',
      'Heat Spreader': 'Aluminum Alloy',
      'XMP': '3.0 Supported',
    },
  },
  {
    id: 'mem-02',
    name: 'NexCore Trident DDR5-7200',
    category: 'memory',
    image: 'https://placehold.co/400x300/0a0e27/6c5ce7?text=DDR5-7200',
    description: '64GB (2x32GB) Extreme Performance DDR5',
    specs: {
      'Capacity': '64GB (2x32GB)',
      'Speed': 'DDR5-7200',
      'Latency': 'CL34-42-42-96',
      'Voltage': '1.45V',
      'RGB': 'Yes - ARGB',
      'Heat Spreader': 'Copper-Core Aluminum',
      'XMP': '3.0 Supported',
    },
  },
  {
    id: 'ssd-01',
    name: 'NexCore Phantom 4TB NVMe',
    category: 'storage',
    image: 'https://placehold.co/400x300/0a0e27/00d4ff?text=NVMe+4TB',
    description: 'PCIe Gen5 NVMe M.2 SSD',
    specs: {
      'Capacity': '4TB',
      'Interface': 'PCIe Gen5 x4',
      'Seq. Read': '12,400 MB/s',
      'Seq. Write': '11,800 MB/s',
      'Random Read': '1,600K IOPS',
      'NAND': '236-Layer TLC',
      'Endurance': '2,400 TBW',
    },
  },
  {
    id: 'gpu-01',
    name: 'NexCore RTX 5090 Founders',
    category: 'gpu',
    image: 'https://placehold.co/400x300/0a0e27/6c5ce7?text=RTX+5090',
    description: '32GB GDDR7 Flagship Graphics Card',
    specs: {
      'VRAM': '32GB GDDR7',
      'CUDA Cores': '21,760',
      'Base Clock': '2,010 MHz',
      'Boost Clock': '2,407 MHz',
      'Memory Bus': '512-bit',
      'TDP': '575W',
      'Outputs': '3x DP 2.1, 1x HDMI 2.1',
    },
  },
  {
    id: 'gpu-02',
    name: 'NexCore RX 9070 XT',
    category: 'gpu',
    image: 'https://placehold.co/400x300/0a0e27/6c5ce7?text=RX+9070XT',
    description: '16GB GDDR6 High-End Graphics Card',
    specs: {
      'VRAM': '16GB GDDR6',
      'Stream Processors': '6,144',
      'Game Clock': '2,070 MHz',
      'Boost Clock': '2,950 MHz',
      'Memory Bus': '256-bit',
      'TDP': '300W',
      'Outputs': '2x DP 2.1, 2x HDMI 2.1',
    },
  },
  {
    id: 'mb-01',
    name: 'NexCore X870E Taichi',
    category: 'motherboard',
    image: 'https://placehold.co/400x300/0a0e27/00d4ff?text=X870E+Board',
    description: 'AM5 E-ATX Enthusiast Motherboard',
    specs: {
      'Chipset': 'AMD X870E',
      'Socket': 'AM5',
      'Memory': '4x DDR5 (up to 8000+)',
      'PCIe': '1x PCIe 5.0 x16, 1x PCIe 4.0',
      'M.2 Slots': '4 (2x Gen5, 2x Gen4)',
      'Networking': 'WiFi 7 + 5GbE LAN',
      'Form Factor': 'E-ATX',
    },
  },
  {
    id: 'psu-01',
    name: 'NexCore Thor 1200W Platinum',
    category: 'psu',
    image: 'https://placehold.co/400x300/0a0e27/00d4ff?text=PSU+1200W',
    description: '1200W 80+ Platinum Fully Modular',
    specs: {
      'Wattage': '1200W',
      'Efficiency': '80+ Platinum',
      'Modular': 'Fully Modular',
      'Fan': '135mm FDB (Zero RPM Mode)',
      'Protection': 'OVP/UVP/SCP/OTP/OPP',
      'ATX': '3.0 / PCIe 5.0 Ready',
      'Warranty': '12 Years',
    },
  },
  {
    id: 'case-01',
    name: 'NexCore HyperView 7000X',
    category: 'case',
    image: 'https://placehold.co/400x300/0a0e27/6c5ce7?text=Case+7000X',
    description: 'Full-Tower Tempered Glass RGB Case',
    specs: {
      'Type': 'Full Tower',
      'Motherboard': 'E-ATX / ATX / mATX / ITX',
      'GPU Clearance': 'Up to 450mm',
      'CPU Cooler': 'Up to 190mm',
      'Fan Support': 'Up to 10x 120mm',
      'Radiator': 'Up to 420mm (front)',
      'Material': 'SPCC Steel + Tempered Glass',
    },
  },
  {
    id: 'cool-01',
    name: 'NexCore FrostArc 360 ARGB',
    category: 'cooling',
    image: 'https://placehold.co/400x300/0a0e27/00d4ff?text=AIO+360',
    description: '360mm AIO Liquid CPU Cooler',
    specs: {
      'Radiator': '360mm Aluminum',
      'Fans': '3x 120mm ARGB PWM',
      'Pump': 'Ceramic Bearing, 2800 RPM',
      'Noise': '≤ 30 dB(A)',
      'Socket': 'Intel/AMD Universal',
      'Tubing': 'Reinforced Rubber, 400mm',
      'RGB': 'ARGB + LCD Display',
    },
  },
  {
    id: 'peri-01',
    name: 'NexCore K95 Mechanical Keyboard',
    category: 'peripheral',
    image: 'https://placehold.co/400x300/0a0e27/6c5ce7?text=Keyboard+K95',
    description: 'Wireless Mechanical Gaming Keyboard',
    specs: {
      'Switches': 'Cherry MX Speed Silver',
      'Layout': 'Full-size (104 keys)',
      'Connectivity': 'USB-C / 2.4GHz / BT 5.0',
      'Battery': '4000mAh (up to 300hrs)',
      'Polling': '8000Hz (2.4GHz)',
      'Keycaps': 'Double-shot PBT',
      'RGB': 'Per-key ARGB',
    },
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 'n1',
    title: 'NexCore Launches Next-Gen DDR5-7200 Memory Series',
    excerpt: 'Our latest DDR5 memory modules achieve breakthrough speeds of 7200MHz with ultra-tight CL34 timings, setting new benchmarks for enthusiast computing.',
    date: '2025-01-15',
    category: 'Product Launch',
    image: 'https://placehold.co/600x400/0a0e27/00d4ff?text=DDR5+Launch',
  },
  {
    id: 'n2',
    title: 'Expanding Global Operations: New Warehouse in Rotterdam',
    excerpt: 'To better serve our European partners, NexCore has opened a 15,000 sqm distribution center in Rotterdam, reducing delivery times by 40%.',
    date: '2025-01-08',
    category: 'Company News',
    image: 'https://placehold.co/600x400/0a0e27/6c5ce7?text=Rotterdam+HQ',
  },
  {
    id: 'n3',
    title: 'PCIe Gen5 SSD Technology: What It Means for the Future',
    excerpt: 'An in-depth look at how PCIe Gen5 storage is revolutionizing data transfer speeds and what it means for next-generation computing platforms.',
    date: '2024-12-20',
    category: 'Industry Insights',
    image: 'https://placehold.co/600x400/0a0e27/00d4ff?text=PCIe+Gen5',
  },
  {
    id: 'n4',
    title: 'NexCore Wins "Best PC Component Brand 2024" Award',
    excerpt: 'We are honored to receive the Best PC Component Brand award at the annual Global Tech Excellence Awards, recognizing our commitment to quality.',
    date: '2024-12-10',
    category: 'Awards',
    image: 'https://placehold.co/600x400/0a0e27/6c5ce7?text=Award+2024',
  },
  {
    id: 'n5',
    title: 'Sustainability Report: Carbon Neutral Manufacturing by 2026',
    excerpt: 'NexCore announces ambitious sustainability goals, including transitioning to 100% renewable energy in all manufacturing facilities by 2026.',
    date: '2024-11-28',
    category: 'Company News',
    image: 'https://placehold.co/600x400/0a0e27/00d4ff?text=Sustainability',
  },
  {
    id: 'n6',
    title: 'The Rise of AI Workloads: How PC Hardware Is Adapting',
    excerpt: 'Exploring how the surge in AI computing demands is driving innovation in GPU architecture, memory bandwidth, and storage solutions.',
    date: '2024-11-15',
    category: 'Industry Insights',
    image: 'https://placehold.co/600x400/0a0e27/6c5ce7?text=AI+Hardware',
  },
];

export const timelineData: TimelineItem[] = [
  { year: '2008', title: 'Founded', description: 'NexCore Technology established in Shenzhen, China, starting with memory module manufacturing.' },
  { year: '2011', title: 'First Export', description: 'Began international operations, exporting to Southeast Asian and Middle Eastern markets.' },
  { year: '2014', title: 'Product Line Expansion', description: 'Expanded into SSDs and graphics cards, becoming a full-range PC component manufacturer.' },
  { year: '2016', title: 'Global Reach', description: 'Reached 50+ countries, opened regional offices in Dubai and Los Angeles.' },
  { year: '2019', title: 'R&D Breakthrough', description: 'Established advanced R&D center, filed 200+ patents in thermal management and power delivery.' },
  { year: '2022', title: '100+ Countries', description: 'Surpassed 100 countries served, launched PCIe Gen4 product line.' },
  { year: '2024', title: 'Industry Leader', description: 'Awarded "Best PC Component Brand", launched PCIe Gen5 and DDR5-7200 series.' },
  { year: '2025', title: 'Next Frontier', description: 'Opening European distribution hub, preparing next-gen AI computing hardware solutions.' },
];

export const certifications = [
  { name: 'ISO 9001:2015', desc: 'Quality Management System' },
  { name: 'ISO 14001:2015', desc: 'Environmental Management' },
  { name: 'CE', desc: 'European Conformity' },
  { name: 'FCC', desc: 'Federal Communications Commission' },
  { name: 'RoHS', desc: 'Restriction of Hazardous Substances' },
  { name: 'UL', desc: 'Underwriters Laboratories' },
];
