// Product Types and Interfaces
export type GameType = 'R6S' | 'FN' | 'BO6' | 'SW' | 'UB';
export type ProductType = 'Internal' | 'External';
export type MediaType = 'image' | 'video';

// SellAuth Store Configuration
export const storeConfig = {
  shopId: 112143,
  storeUrl: 'https://haven-services.mysellauth.com',
  productId: 151373, // Base product ID
};

export interface ProductMedia {
  type: MediaType;
  url: string;
  alt: string;
  thumbnailUrl?: string; // For videos, this will be the preview image
  youtubeId?: string; // For YouTube videos
}

export interface ProductFeature {
  icon?: string;
  title: string;
  items: string[];
}

export interface ProductSubscription {
  name: string;
  price: number;
  duration: string;
  variantId: number;
}

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  game: GameType;
  price: number;
  media: ProductMedia[];
  status: 'Undetected' | 'Updating' | 'Detected' | 'Never';
  description?: string;
  subscriptions: ProductSubscription[];
  features: ProductFeature[];
  compatibility: string[];
}

// Product Data
export const products: Product[] = [
  {
    id: '151373',
    name: 'Haven Private',
    type: 'External',
    game: 'FN',
    price: 2.99,
    image: 'https://cdn.discordapp.com/attachments/1292223862976680086/1358161404997144606/IMG_2973.png?ex=67f2d5e0&is=67f18460&hm=22c4f3be537ae68e5450a8df2f0eeb3d5448f5834a6bd89a3e59d9224a486847&',
    media: [
      {
        type: 'image',
        url: 'https://cdn.discordapp.com/attachments/1292223862976680086/1358161404997144606/IMG_2973.png?ex=67f2d5e0&is=67f18460&hm=22c4f3be537ae68e5450a8df2f0eeb3d5448f5834a6bd89a3e59d9224a486847&',
        alt: 'Have Private External Main View'
      },
      {
        type: 'image',
        url: 'https://cdn.discordapp.com/attachments/1292223862976680086/1358162010147127489/IMG_2974.png?ex=67f2d670&is=67f184f0&hm=0dc3ae3659131b69f542fcd501d11df36a7c6a8627e1ec7ec27a65dfd674094a&',
        alt: 'HAven Private Menu'
      }
    ],
    status: 'Undetected',
    description: 'Advanced external cheat for Fortnite',
    subscriptions: [
      {
        name: 'Day Key',
        price: 4.99,
        duration: '1 Day',
        variantId: 84952
      },
      {
        name: 'Week Key',
        price: 9.99,
        duration: '1 Week',
        variantId: 84960
      },
      {
        name: 'Month Key',
        price: 34.99,
        duration: '1 Month',
        variantId: 84961
      }
    ],
    compatibility: [
      'Windows 10 & 11 (Versions 2004 and newer, Home and Pro recommended)',
      'All CPU Compatible',
      'All GPU Compatible'
    ],
    features: [
      {
        title: 'Aimbot',
        items: [
          'Enable Aimbot',
          'Aim at Shoot',
          'Aim at Scope',
          'Visible Check',
          'Aimbot Input Types (Relative, Absolute)',
          'Adjustable Speed (0-100%)',
          'Recoil Compensation',
          'Draw FOV',
          'Gamepad Support (Xbox only)',
          'Prediction',
          'Configurable FOV (0-15)',
          'Ignore Knocked Targets',
          'Target Switch Delay',
          'Unique Hitbox System',
          'Dual Aim Key Support'
        ]
      },
      {
        title: 'Visuals',
        items: [
          'Enable Player ESP',
          'Enemy Only',
          'Box ESP',
          'Out-of-View (OOF) Indicators',
          'Health Bar / Shield Display',
          'Skeleton ESP (Adjustable Thickness)',
          'Glow (Fill and Thickness Options)',
          'Visibility Check',
          'Glow Types (Default, Textured, Thermal, Noisy)'
        ]
      }
    ]
  },
  {
    id: '283989',
    name: 'Haven Temp Spoofer',
    type: 'External',
    game: 'UB',
    price: 8.99,
    image: 'https://cdn.discordapp.com/attachments/1251753763094532228/1359670586997215272/IMG_2997.png?ex=67f9a4e9&is=67f85369&hm=ec3cfc7e2e290869066b0bd4d64a50bde3b8ee3da4d38766f50af09b4ee1f68b&',
    media: [
      {
        type: 'image',
        url: 'https://cdn.discordapp.com/attachments/1251753763094532228/1359670586997215272/IMG_2997.png?ex=67f9a4e9&is=67f85369&hm=ec3cfc7e2e290869066b0bd4d64a50bde3b8ee3da4d38766f50af09b4ee1f68b&',
        alt: 'Have Private External Main View'
      },
      {
        type: 'image',
        url: 'https://cdn.discordapp.com/attachments/1251753763094532228/1359670587340882172/IMG_2996.png?ex=67f9a4e9&is=67f85369&hm=e730bdab33e1a1c8a04cc66bcd326bf142ac3e6293b39826a9a87fcb8bed9219&',
        alt: 'Product Demo Video'
      }
    ],
    status: 'Undetected',
    description: 'Advanced Unban Solution ',
    subscriptions: [
      {
        name: '3 Day Key',
        price: 8.99,
        duration: '1 Day',
        variantId: 379663
      },
      {
        name: 'Week Key',
        price: 14.99,
        duration: '1 Week',
        variantId: 379664
      },
      {
        name: 'Month Key',
        price: 24.99,
        duration: '1 Month',
        variantId: 379665
      },
      {
        name: 'Lifetime Key',
        price: 34.99,
        duration: 'Lifetime',
        variantId: 379666
      }
    ],
    compatibility: [
      'Windows 10 & 11 (Versions 2004 and newer, Home and Pro recommended)',
      'All CPU Compatible',
      'All GPU Compatible'
    ],
     features: [
      {
        title: 'Functions',
        items: [
         'Disk Spoofs',
          'Inbuilt Cleaner',
          'Inbuilt Serial Checker',
          'User Friendly'
        ]
      }
    ]
  }
];

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
