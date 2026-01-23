import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://volqbrgoiuipqumftlwn.supabase.co'
const supabasePublishableKey = 'sb_publishable_rH50pJAvd2Lpqf0qqk5gPA_Bwa8zgIO'

export const supabase = createClient(supabaseUrl, supabasePublishableKey)
