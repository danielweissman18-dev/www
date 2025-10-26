-- ✅ Copy this entire SQL code and run it in Supabase SQL Editor

-- Create leaderboard_users table
create table if not exists leaderboard_users (
  id uuid default uuid_generate_v4() primary key,
  username text unique not null,
  avatar text not null default '👤',
  coins integer default 0,
  weekly_score integer default 0,
  streak integer default 0,
  hearts integer default 5,
  completed_lessons integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create index for faster queries
create index if not exists idx_weekly_score on leaderboard_users(weekly_score desc);
create index if not exists idx_username on leaderboard_users(username);

-- Enable Row Level Security (RLS)
alter table leaderboard_users enable row level security;

-- Drop existing policy if it exists
drop policy if exists "Enable all operations for everyone" on leaderboard_users;

-- Create policy to allow all operations (since it's a class app)
create policy "Enable all operations for everyone"
  on leaderboard_users
  for all
  using (true)
  with check (true);
