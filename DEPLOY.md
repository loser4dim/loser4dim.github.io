# GitHub Pages へのデプロイ

## 公開設定

- 公開先: https://loser4dim.jp
- サイトURL: `astro.config.mjs` の `site`
- カスタムドメイン: `public/CNAME`
- GitHub の Settings → Pages → Build and deployment → Source は GitHub Actions を選択します。
- カスタムドメインは `loser4dim.jp` を設定し、DNS と証明書の準備後に Enforce HTTPS を有効にします。

## デプロイの流れ

`.github/workflows/deploy.yml` は `main` / `master` への push、または Actions 画面の Run workflow で実行します。

1. Node.js 26.12.1 と `package.json` で固定した pnpm を用意します。
2. CI ではロックファイルに従って依存関係をインストールします。
3. `pnpm audit --audit-level=low` を実行します。既知の脆弱性があれば公開を停止します。監査サービスの障害時にも停止するため、Actions のログを確認してください。
4. `pnpm run build` で静的ファイルを生成し、GitHub Pages 用の成果物をアップロードします。
5. ビルドに成功した場合にのみ Pages へデプロイします。

ローカルでの確認:

```sh
pnpm install --frozen-lockfile
pnpm audit --audit-level=low
pnpm build
pnpm preview
```

## 権限と保守

- ビルドのトークンは `contents: read` のみです。
- デプロイジョブだけに `pages: write` と `id-token: write` を与えます。
- checkout の認証情報は保存しません。
- GitHub Actions は検証したリリースのコミットSHAに固定します。更新時は公式リリースとSHAを照合します。
- Node.js は `.node-version`、`package.json` の `engines`、workflow の `node-version` を同時に更新してください。
- pnpm は `packageManager` を更新し、新しい版で `pnpm-lock.yaml` を再生成してください。

パッケージ更新時の例:

```sh
pnpm update --latest
pnpm audit
pnpm build
```

変更した設定と `pnpm-lock.yaml` は一緒にコミットします。push すると本番デプロイが始まるため、変更内容を確認してから実行してください。

## 今回の検証範囲

2026-10-28 時点で、Node.js 26.12.1 / pnpm 12.15.0 により326ページのビルドに成功し、依存関係の既知の脆弱性は0件でした。Node.js 26系は確認時点では Current リリースです。

依存関係の監査、ソース内の代表的な秘密鍵・トークン形式、実際に使う Astro ソースのHTML挿入・外部リンク・埋め込みを確認しました。Gitの履歴全体の秘密情報検査、侵入テスト、GitHub設定やDNS設定の実変更は実施していません。既知の脆弱性0件は完全な安全性を保証するものではありません。
