// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gbgahqrufbbkypjtiwdt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiZ2FocXJ1ZmJia3lwanRpd2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3Njk3OTgsImV4cCI6MjA1NDM0NTc5OH0.LQ5ZneZHVMM6tfCrvVkxOSiZy68-fMq2BY8eHeqtUWs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);