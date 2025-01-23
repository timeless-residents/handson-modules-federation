# Module Federation Demo

最小限のModule Federation構成のデモプロジェクトです。

## 概要

- Host App (Port: 3000)
- Remote App (Port: 3001) 
- RemoteのButtonコンポーネントをHostで使用

## 実行方法

Remote:
```bash
cd remote
npm install
npm start
```

Host:
```bash
cd host
npm install
npm start
```

## ブラウザで確認

- Host: http://localhost:3000
- Remote: http://localhost:3001
