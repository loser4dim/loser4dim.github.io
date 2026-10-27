# loser4dim.jp

Astro / Tailwind CSS で構築した静的サイト。GitHub Pages に公開します。

## 開発環境

- Node.js 26.12.1（`.node-version` に固定）
- pnpm 12.15.0（`package.json` の `packageManager` に固定）

Node.js の対応する版と Corepack を用意した環境で実行します。

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

| コマンド | 用途 |
| --- | --- |
| `pnpm dev` | 開発サーバー（通常 http://localhost:4321） |
| `pnpm build` | 本番用ファイルを `dist/` に生成 |
| `pnpm preview` | 本番用ファイルをローカルで確認 |
| `pnpm audit` | 依存関係の既知の脆弱性を確認 |
| `pnpm outdated` | 依存パッケージの最新版との差分を確認 |

## 構成

- `src/pages/`: Astro のページ
- `src/content/events/`: イベント情報の Markdown
- `src/components/`: 共通部品
- `public/`: 公開用静的ファイル
- `.github/workflows/deploy.yml`: ビルド・デプロイ設定

`src/app/` などに以前の Next.js / React のソースが残っています。現在の Astro のページとしては使用しません。移行前のソースを使うには、別途依存関係や構成の復元が必要です。

公開手順と更新方法は [DEPLOY.md](DEPLOY.md) を参照してください。
