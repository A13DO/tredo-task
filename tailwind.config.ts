import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        main: '#092D47',
        secondary: '#666666',
        secondary_strong: '#404040',
        strong_color: '#231F20',
        light: {
          base: '#FFFFFF',
          muted: '#F8F9FA',
        },
        lines_color: '#E6E6E6',
      },
      spacing: {
        sidebar: '238px',
        'header-h': '72px',
        'input-h': '40px',
        'icon-box': '40px',
        'search-w': '288px',
        // global
        sm: '8px',
        md: '10px',
        lg: '12px',
        '2lg': '13.5px',
        xl: '16px',
        xxl: '20px',
        '2xl': '24px',
        '2_8xl': '28px',
        '3xl': '32px',
      },
      fontSize: {
        sm: ['14px', { fontWeight: '400' }],
        md: ['14px', { fontWeight: '500' }],
        lg: ['16px', { fontWeight: '500' }],
        '2xl': ['24px', { fontWeight: '500' }],
        page_title: ['28px', { lineHeight: '48px', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
