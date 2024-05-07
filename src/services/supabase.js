import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://etvtfypxznytxhzmrkny.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0dnRmeXB4em55dHhoem1ya255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3NTA0NzQsImV4cCI6MjAzMDMyNjQ3NH0.eKNfBAVHUM92XFkawxX5PooRFY65SE48M8XRdpTL7Mw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
