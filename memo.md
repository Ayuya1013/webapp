# 簡単なメモ

## 環境構築
TailwindCSS の環境をReact上に作成する方法．
Reactでは賢い人がライブラリのように便利な関数をつくっておいてくれていて
誰でも使用可能．今回TailwindCSSの環境をインストールする．
 - tailwind.config.js の設定
 tailwind.configは どのフォルダとその配下が，tailwindCssで記述されているか指定するためのファイルであり，今回src配下のjs,ts,jsx,tsx拡張子のすべてのファイル．
```js
 module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
 ```
 である．
  - postcss.config.cjsの設定．
postcss.config.cjsはreact，vite環境でtailwindCssを使用するのに必要なファイル．このファイル内容に従って，tailwind記述を通常記述に変換しReact側に渡している．
  Node.js では、JavaScript ファイルの扱い方が変わることがあります。  
そのルールは `package.json` の中にある `"type": "module"` という設定によって決まります。

```json
{
  "type": "module"
}
```
この設定があると、すべての .js ファイルは「Webサイトのプログラム（ES Modules）」として扱われます。 つまり、設定ファイルとして使いたい postcss.config.js も「Web用のコード」として認識されてしまいます。
ファイル名を .cjs にすると、Node.js は「これは設定ファイル（CommonJS）だな」と認識してくれます．
``` cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

 - src/index.cssの編集
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
を追加．

 - 起動
```bash
 npm run dev
```
 - App.tsxにtailwindクラスを適用
 ``` tsx
 function App() {
  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-yellow-800">
        Tailwind CSS 動いてるよ！
      </h1>
    </div>
  );
}
```

