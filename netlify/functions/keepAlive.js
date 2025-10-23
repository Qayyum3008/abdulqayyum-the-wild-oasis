import supabase from "../../src/services/supabase";

export async function handler() {
  try {
    // Just ping Supabase (optional)
    await supabase.from("settings").select("id").limit(1);

    // Log the ping time
    await supabase
      .from("keep_alive_logs")
      .insert([{ message: "Ping successful" }]);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "✅ Supabase keep-alive successful",
        time: new Date().toISOString(),
      }),
    };
  } catch (error) {
    await supabase
      .from("keep_alive_logs")
      .insert([{ message: `❌ Ping failed: ${error.message}` }]);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
