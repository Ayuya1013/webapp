/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "var(--gray)",       // カスタムグレー
        purple: "var(--purple)",   // カスタムパープル
      },
      fontFamily: {
        // Zen Maru Gothic フォントサイズ別
        zen12b: "var(--zen-maru-gothic-12px-bold-font-family)",
        zen12r: "var(--zen-maru-gothic-12px-regular-font-family)",
        zen14b: "var(--zen-maru-gothic-14px-bold-font-family)",
        zen14r: "var(--zen-maru-gothic-14px-regular-font-family)",
        zen16b: "var(--zen-maru-gothic-16px-bold-font-family)",
        zen16r: "var(--zen-maru-gothic-16px-regular-font-family)",
        zen18b: "var(--zen-maru-gothic-18px-bold-font-family)",
        zen18r: "var(--zen-maru-gothic-18px-regular-font-family)",
        zen24b: "var(--zen-maru-gothic-24px-bold-font-family)",
        zen24r: "var(--zen-maru-gothic-24px-regular-font-family)",
        zen32b: "var(--zen-maru-gothic-32px-bold-font-family)",
        zen32r: "var(--zen-maru-gothic-32px-regular-font-family)",
        zen48b: "var(--zen-maru-gothic-48px-bold-font-family)",
        zen48r: "var(--zen-maru-gothic-48px-regular-font-family)",
        zen64b: "var(--zen-maru-gothic-64px-bold-font-family)",
        zen64r: "var(--zen-maru-gothic-64px-regular-font-family)",
      },
    },
  },
  plugins: [],
};