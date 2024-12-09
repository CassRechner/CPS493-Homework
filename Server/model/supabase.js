require("dotenv").config()
const { createClient } = require("@supabase/supabase-js")
/**
 * @typedef {import('../../Client/src/models/supabase').Database } DatabaseReal
 * @typedef {import('@supabase/supabase-js').SupabaseClient<DatabaseReal>} ClientReal
 */

module.exports = {
    /**
     * @returns {ClientReal}
     */
    getConnection() {
        return createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_SECRET_KEY
        )
    },
}