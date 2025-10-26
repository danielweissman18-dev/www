# Supabase Setup Instructions

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for a free account (no credit card required)
3. Click "New Project"
4. Fill in:
   - **Name**: ZakuyotChain (or any name you prefer)
   - **Database Password**: Choose a strong password (save it!)
   - **Region**: Choose closest to you
   - **Pricing Plan**: Free tier is perfect

## Step 2: Create the Database Table

1. In your Supabase project, go to **SQL Editor** (left sidebar)
2. Click "New Query"
3. Copy and paste this SQL code:

```sql
-- Create leaderboard_users table
create table leaderboard_users (
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
create index idx_weekly_score on leaderboard_users(weekly_score desc);
create index idx_username on leaderboard_users(username);

-- Enable Row Level Security (RLS)
alter table leaderboard_users enable row level security;

-- Create policy to allow all operations (since it's a class app)
create policy "Enable all operations for everyone"
  on leaderboard_users
  for all
  using (true)
  with check (true);
```

4. Click "Run" (or press F5)
5. You should see "Success. No rows returned"

## Step 3: Get Your API Credentials

1. Go to **Project Settings** (gear icon in left sidebar)
2. Click **API** in the left menu
3. You'll see two important values:
   - **Project URL**: Something like `https://xxxxx.supabase.co`
   - **anon/public key**: A long string starting with `eyJ...`

## Step 4: Add Credentials to Your App

### Option A: Using Environment Variables (Recommended)

1. Create a file named `.env` in the root of your project (same folder as package.json)
2. Add these lines (replace with your actual values):

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

3. Save the file

### Option B: Direct in Code

1. Open `src/config/supabase.js`
2. Replace:
   ```javascript
   const supabaseUrl = 'YOUR_SUPABASE_URL'
   const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'
   ```
   
   With your actual values:
   ```javascript
   const supabaseUrl = 'https://xxxxx.supabase.co'
   const supabaseAnonKey = 'eyJ...'
   ```

## Step 5: Change Teacher PIN (Optional)

1. Open `src/config/supabase.js`
2. Find this line:
   ```javascript
   export const TEACHER_PIN = '2468'
   ```
3. Change `'2468'` to your preferred PIN (4-6 digits recommended)

## Step 6: Test It!

1. Restart your development server (stop and run `npm run dev` again)
2. Open the app and register a new user
3. Check your Supabase project → **Table Editor** → **leaderboard_users**
4. You should see the new user appear!

## Features You Now Have:

✅ **Shared Leaderboard** - All students see the same rankings
✅ **Automatic Registration** - Each student is added when they sign up
✅ **Real-time Updates** - Scores update across all devices
✅ **Teacher Reset** - Reset button in leaderboard (requires PIN)
✅ **Weekly Competition** - Track weekly scores separately

## Teacher Controls:

1. Go to the Leaderboard page
2. Scroll to the bottom
3. Click "🔒 איפוס לידרבורד (מורה בלבד)"
4. Enter the teacher PIN (default: 2468)
5. Choose:
   - **איפוס ציוני שבוע** - Reset weekly scores to 0 (keeps users)
   - **מחיקה מלאה** - Delete all users (fresh start)

## Troubleshooting:

**"Invalid API key"**
- Double-check your Supabase URL and anon key
- Make sure there are no extra spaces

**"Network error"**
- Check your internet connection
- Verify the Supabase project is running (green status in dashboard)

**Users not appearing**
- Check the Table Editor in Supabase to verify the table exists
- Look at browser console for error messages

## Free Tier Limits:

- **500 MB database** - Enough for thousands of students
- **5 GB bandwidth/month** - Perfect for classroom use
- **50,000 monthly active users** - Way more than you need!

The free tier is more than enough for a classroom! 🎉
