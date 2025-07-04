import { getJobs } from '@/apis/apiJobs'
import { useSession } from '@clerk/clerk-react'
import React, { useEffect } from 'react'

const Joblisting = () => {

  const {session} = useSession()

  const fetchJobs = async() => {
    const supabaseAccessToken = await session.getToken({
      template:"supabase"
    })
    const data = await getJobs(supabaseAccessToken)
    console.log(data)
  }

  useEffect(()=>{
    fetchJobs()
  },[])

  return (
    <div>job-listing</div>
  )
}

export default Joblisting