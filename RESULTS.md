# 更新・セキュリティ確認結果

確認日: 2026-10-28（日本時間）
対象: D:\Program\loser4dim.github.io

## 更新内容

| 項目 | 更新前 | 更新後 |
| --- | --- | --- |
| Astro | ^7.3.5 | ^7.4.2 |
| Simple Icons | ^1.2.98 | ^1.2.101 |
| pnpm | 11.22.0 | 12.15.0 |
| Node.js | PC: 26.8.1 / 要件: >=22.12.0 | プロジェクト指定・検証: 26.12.1 |
| Tailwind CSS / Vite連携 | 4.3.3 | 4.3.3（最新版） |
| astro-icon | 1.2.0 | 1.2.0（最新版） |
| sharp | 0.35.5 | 0.35.5（最新版） |

Node.js は公式サイトから26.12.1をダウンロードし、公式SHA256との一致を確認した作業用ランタイムで検証しました。PC全体にインストールされたNode.jsは変更していません。

## 検証

- 更新前: 既知の脆弱性11件（高4、中6、低1）。対象はVite、source-map-js、zod、undici。
- 更新後: pnpm audit の既知の脆弱性0件。
- pnpm outdated: 更新対象の表示なし。
- pnpm install --frozen-lockfile: 成功。
- pnpm build: 成功、静的326ページと画像15点を生成。
- astro-icon: 任意の src/icons フォルダがない警告あり。ビルドは成功。
- 秘密鍵・代表的なGitHub/AWS/APIトークン形式のファイル走査: 該当なし。履歴全体の検査は未実施。
- 実際に使用するAstroソース内のHTML直接挿入、リンク、埋め込みを確認。旧Next.js/Reactソースが残っているためREADMEに明記。
- イベント情報内にHTTPの外部リンクが5箇所残っています。リンク先のHTTPS対応を保証できないため書き換えていません。

## GitHub Pages

GitHub上のdeploy.ymlがローカルと一致することと、直近3回のActions実行成功を確認しました。
最新の実行: https://github.com/loser4dim/loser4dim.github.io/actions/runs/37281578030

修正内容:
- actions/checkout v7.0.1、withastro/action v6.1.4、actions/deploy-pages v5.0.1 の公式リリースのコミットSHAに固定。
- Node.jsを26.12.1に固定。
- Pages書き込み権限とOIDC権限をデプロイジョブだけに限定。
- checkoutの認証情報の保存を無効化。
- 監査に成功した場合のみビルド・公開し、実行タイムアウトを設定。
- actionlintによる設定検査に成功。actionlint 1.7.12はUbuntu 26.04を未収録のため、そのラベル警告のみ除外。actions/runner-images公式READMEと既存の成功実行から対応を確認。
- README.mdを実際の構成に合わせ、DEPLOY.mdを追加。

今回の修正版workflowをGitHub上で実行したわけではありません。push・本番公開は未実施です。

## 適用状態

この一式は作業用コピーで検証した変更ファイルです。元プロジェクトへの適用は編集許可が必要です。

検証元: npm公式レジストリ、nodejs.org、各GitHub Actionの公式リリース、GitHub Actions実行履歴。
