# p5
## セットアップ
- p5.jsの公式サイトからライブラリをダウンロードするか、CDN (Content Delivery Network) リンクを使用してp5.jsを追加。
### p5.jsのCDNリンクを使用してライブラリを読み込む手順
1. HTMLファイルを開く（例：index.html）。
2. <head> セクションの中に、p5.jsのCDNリンクを <script> タグとして追加。
```html
<!-- p5.js CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
```
- 必要に応じて、p5.jsの追加のライブラリや機能（例：p5.sound）もCDNリンクを使用して読み込むことができる。
3. <body> セクションには、p5.jsのスケッチ（通常は setup と draw 関数など）を書くための外部JavaScriptファイルへのリンクを追加。
```html
<script src="path_to_your_sketch.js"></script>
```
- ローカルでライブラリを使用する場合、ダウンロードしたp5.jsのファイルをプロジェクトのディレクトリに移動。
### Live Serverの使用:
- VSCodeの拡張機能「Live Server」をインストールして使用すると、ローカルでリアルタイムに変更をプレビューしながら開発することができる。
