import supabaseclient from "@/utils/supabse";

export async function getJobs(token){
    const supabase = await supabaseclient(token)

    let query = supabase.from("jobs").select("*")

    const { data, error } = await query
    if(error){
        console.error("Error fetching jobs: ", error);
        return null
    }
    return data
}