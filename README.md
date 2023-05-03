# readme

このプロジェクトはSNSを作る(ダミー)をDDDとかクリーンアーキテクチャかつlaravelでバックエンドの実装してみよう！！的な物です。

## 起動

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