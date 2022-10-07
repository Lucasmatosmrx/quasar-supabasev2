import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jahdjwkpdapsqqfbnllh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphaGRqd2twZGFwc3FxZmJubGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQzMDE3NDEsImV4cCI6MTk3OTg3Nzc0MX0.J58xP255ejs-YafzZePoLc9tso8tjLciIAy4r4q5Hlw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function useSupabase() {
  return { supabase };
}
