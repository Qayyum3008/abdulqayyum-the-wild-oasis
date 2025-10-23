// netlify/functions/keep-alive.js
import supabase from "../../src/services/supabase";

export async function handler() {
  try {
    // Perform a lightweight query
    await supabase.from("settings").select("id").limit(1);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "✅ Supabase keep-alive successful",
        time: new Date().toISOString(),
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
}
