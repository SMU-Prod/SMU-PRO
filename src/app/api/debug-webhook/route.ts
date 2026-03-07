// TEMPORARY DEBUG ROUTE — DELETE AFTER FIXING WEBHOOK
export async function GET() {
  const checks = {
    CLERK_WEBHOOK_SECRET: !!process.env.CLERK_WEBHOOK_SECRET,
    NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    CLERK_WEBHOOK_SECRET_preview: process.env.CLERK_WEBHOOK_SECRET?.slice(0, 8) + "...",
    SUPABASE_URL_preview: process.env.NEXT_PUBLIC_SUPABASE_URL?.slice(0, 20) + "...",
    SERVICE_KEY_preview: process.env.SUPABASE_SERVICE_ROLE_KEY?.slice(0, 10) + "...",
  };

  // Test Supabase connection
  let supabaseTest = "not tested";
  try {
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );
    const { data, error } = await supabase.from("users").select("id").limit(1);
    supabaseTest = error ? `ERROR: ${JSON.stringify(error)}` : `OK (${data?.length} rows)`;
  } catch (e: unknown) {
    supabaseTest = `EXCEPTION: ${e instanceof Error ? e.message : String(e)}`;
  }

  return Response.json({ ...checks, supabaseTest }, { status: 200 });
}
