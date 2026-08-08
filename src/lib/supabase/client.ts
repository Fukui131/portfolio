import { createBrowserClient } from "@supabase/ssr";

import type { Database } from "@/types/database";

function getSupabaseConfig() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error("Supabase environment variables are not configured.");
  }

  return { supabasePublishableKey, supabaseUrl };
}

export function createClient() {
  const { supabasePublishableKey, supabaseUrl } = getSupabaseConfig();

  return createBrowserClient<Database>(supabaseUrl, supabasePublishableKey);
}
