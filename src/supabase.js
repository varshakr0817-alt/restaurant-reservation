import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fuwbeqspuvyhiehavfpn.supabase.co";
const supabaseKey = "sb_publishable_mrNRqXcKl8jHXL-iR95DbA_-yDd3_Zm";

export const supabase = createClient(supabaseUrl, supabaseKey);