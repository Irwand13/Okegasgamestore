import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export type Profile = {
  id: string;
  username: string;
  full_name: string;
  avatar_url: string | null;
  phone: string | null;
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
  status: 'pending' | 'paid' | 'processing' | 'completed' | 'failed';
  created_at: string;
};