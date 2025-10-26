import { supabase } from '../config/supabase'

// Add or update user in leaderboard
export const upsertLeaderboardUser = async (userData) => {
  try {
    const { data, error } = await supabase
      .from('leaderboard_users')
      .upsert({
        username: userData.username,
        avatar: userData.avatar,
        coins: userData.coins,
        weekly_score: userData.weeklyScore,
        streak: userData.streak,
        hearts: userData.hearts,
        completed_lessons: userData.completedLessons?.length || 0,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'username'
      })
      .select()
    
    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error upserting leaderboard user:', error)
    return { success: false, error }
  }
}

// Get all users from leaderboard sorted by weekly score
export const getLeaderboard = async (limit = 50) => {
  try {
    const { data, error } = await supabase
      .from('leaderboard_users')
      .select('*')
      .order('weekly_score', { ascending: false })
      .limit(limit)
    
    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    return { success: false, error, data: [] }
  }
}

// Reset weekly scores for all users
export const resetWeeklyScores = async () => {
  try {
    const { error } = await supabase
      .from('leaderboard_users')
      .update({ weekly_score: 0 })
      .neq('id', 0) // Update all rows
    
    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Error resetting weekly scores:', error)
    return { success: false, error }
  }
}

// Delete all leaderboard users (hard reset)
export const clearLeaderboard = async () => {
  try {
    const { error } = await supabase
      .from('leaderboard_users')
      .delete()
      .neq('id', 0) // Delete all rows
    
    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Error clearing leaderboard:', error)
    return { success: false, error }
  }
}

// Check if username exists
export const checkUsernameExists = async (username) => {
  try {
    const { data, error } = await supabase
      .from('leaderboard_users')
      .select('username')
      .eq('username', username)
      .single()
    
    if (error && error.code !== 'PGRST116') throw error
    return { exists: !!data }
  } catch (error) {
    console.error('Error checking username:', error)
    return { exists: false }
  }
}
