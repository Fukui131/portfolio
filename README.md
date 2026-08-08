# Portfolio

Next.js App Router と Supabase を使うポートフォリオサイトです。

## Development

```bash
npm run dev
```

`.env.local` に Supabase Dashboard の Project URL と Publishable Key を設定してから開発します。

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

管理者権限を持つキーや DB 接続文字列はソースコードへ記述しません。
