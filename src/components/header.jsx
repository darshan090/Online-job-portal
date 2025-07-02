import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react';
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react';

const Header = () => {
  
  const [show,setShow] = useState(false);
  const [search,setSearch] = useSearchParams()
  useEffect(()=>{
    if(search.get(('sign-in'))){
        setShow(true)
    }
  },[search])
  const handleOverlayClick = (e) => {
    if(e.target === e.currentTarget){
        setShow(false)
        setSearch({})
    }
  }

  return (
    <>
        <nav className='py-4 flex justify-between items-center'>
            <Link>
                <img src="/logo (2).png" alt="" className='h-20' />
            </Link>
            <div className='flex gap-8'>
            <SignedOut>
                <Button variant="outline" onClick = {()=>setShow(true)}>Login</Button>
                    </SignedOut>
                <SignedIn>
                <Link to='/post-job'>
                {/* add a condition here */}
                    <Button variant='destructive' className='rounded-full'>
                        <PenBox size={20} className='mr-2'/>
                        Post a job
                    </Button>
                </Link>
                <UserButton appearance={{
                    elements:{
                        avatarBox:'w-10 h-10'
                    }
                }}>
                    <UserButton.MenuItems>
                        <UserButton.Link
                            label='My-jobs'
                            labelIcon = {<BriefcaseBusiness size={15}/>}
                            href='/my-jobs'
                        />
                        <UserButton.Link
                            label='Saved-jobs'
                            labelIcon = {<Heart size={15}/>}
                            href='/saved-jobs'
                        />
                    </UserButton.MenuItems>
                </UserButton>
            </SignedIn>
            </div>
        </nav>
        {show && <div className='fixed inset-0 flex items-center justify-center bg-black/50'
        onClick={handleOverlayClick}
        >
            <SignIn 
                signUpFallbackRedirectUrl='/onboarding'
                fallbackRedirectUrl='/onboarding'
            />  
        </div>}
    </>
  )
}

export default Header