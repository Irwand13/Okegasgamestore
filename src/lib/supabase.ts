import { createClient } from '@supabase/supabase-js';

// Debug: cek apakah environment variables terbaca
console.log('=== SUPABASE DEBUG ===');
console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL ? '✅ ADA' : '❌ TIDAK ADA');
console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ ADA' : '❌ TIDAK ADA');

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables!');
  console.error('VITE_SUPABASE_URL:', supabaseUrl);
  console.error('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'hidden' : 'missing');
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  username: string;
  full_name: string;
  balance: number;
  created_at: string;
};

export type Order = {
  id: string;
  user_id: string;
  game_name: string;
  game_id: string;
  server_id: string | null;
  nominal_amount: number;
  nominal_bonus: number;
  price: number;
  payment_method: string;
  total_price: number;
  status: string;
  created_at: string;
};