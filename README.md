# readme

このプロジェクトはSNSを作る(ダミー)をDDDとかクリーンアーキテクチャかつlaravelでバックエンドの実装してみよう！！的な物です。

## 起動

**自身の環境では `firebase-tools` `npm@latest` `vite@latest` はグローバルインストールしてあります**

### ローカル

docker（またはdocker-compose）でupしてあげれば起動します。
中身的には、 `npm install` と `npm run dev` を行っています。
node_modulesがgit管理下にはないので、 `docker-compose run --rm node sh -c 'npm install` など必要な場合もあるかもしれないです。
また、package.jsonに記載していますが、 `npm run storybook` などのコマンドも用意しています。

### ステージング環境
考慮していません。
### プロダクション環境
考慮していません。

## SNSログイン

[firebase](https://console.firebase.google.com/?hl=ja)の機能（パスワードの管理とかアカウントの整合とか）を使いつつ、アプリケーションサーバーでjwtとかtokenとか発行、受け取ることで承認としたいと思います。

### firebaseについて

firebaseのAuthenticationを利用するには、事前にfirebaseのコンソールにログインして、プロジェクトの作成等しておく必要がありマス。

大雑把な書き方になりますが、参考にしたのは下記です。

* [【完全版】ReactのFirebase Authentication(認証)を基礎からマスターする](https://reffect.co.jp/react/react-firebase-auth)
* [React×Firebaseでちゃんと開発するときの環境構築手順と解説](https://zenn.dev/tentel/articles/488dd8765fb059)
* [[React + Firebase Authentication]（後編）
  ワンクリックログイン機能とルーティングの設定](https://tech-lab.sios.jp/archives/31117)
  * 前編も見た方がイイかも
* [React（TypeScript）× Firebaseで新規登録機能を実装した](https://qiita.com/takahashi-yoji/items/a2a97b90a5b5e7cfc224)
* 