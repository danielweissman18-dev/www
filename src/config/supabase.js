import { createClient } from '@supabase/supabase-js'

// Supabase configuration
// INSTRUCTIONS: Replace these with your actual Supabase credentials
// 1. Go to https://supabase.com and create a free account
// 2. Create a new project
// 3. Go to Project Settings > API
// 4. Copy the Project URL and anon/public key below

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Teacher PIN for leaderboard reset (change this to your preferred PIN)
export const TEACHER_PIN = '2468'
