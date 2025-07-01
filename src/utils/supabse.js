import { createClient } from '@supabase/supabase-js';

const supabaseurl = import.meta.env.VITE_SUPABASE_URL;
const supabasekey = import.meta.env.VITE_SUPABASE_ANON_KEY;


const supabaseclient = async(supabaseAccessToken) => {
	const supabase = createClient(supabasekey,supabaseurl,{
		global:{
			headers:{
				Authorization:`Bearer ${supabaseAccessToken}`
			}
		}
	})
	return supabase;

}
export default supabaseclient;