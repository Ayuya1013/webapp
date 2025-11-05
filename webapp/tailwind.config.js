// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-800": "#5b21b6",
        white: "#ffffff"
      },
      spacing: {
        // カスタムサイズを追加（キー名は任意）
        18: "4.5rem",   // gap-18 => 4.5rem
        20: "5rem",     // gap-20 => 5rem
        24: "6rem",     // gap-24 => 6rem
        // 既存の gap-4/gap-8/gap-16 はデフォルトにあるので無理に追加する必要はない
      }
    }
  },
  // 動的にクラス名を組み立てていてビルド時に検出されない場合は safelist を使う
  plugins: [],
}
