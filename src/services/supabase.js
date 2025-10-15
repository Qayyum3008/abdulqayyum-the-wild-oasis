import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jazzdclfcruokwuarweq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphenpkY2xmY3J1b2t3dWFyd2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NTE2MzUsImV4cCI6MjA3NTEyNzYzNX0.ioZNWYZW1qkIz1Fqk9A_0MTK-JUc7kDV5Y-3vVWtsmc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;