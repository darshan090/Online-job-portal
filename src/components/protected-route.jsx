import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();

  if (!isLoaded) {
    // Optionally, show a loader here
    return null;
  }

  if (!isSignedIn) {
    return <Navigate to='/?sign-in=true' />;
  }

  // Redirect to onboarding if user has no role and is not already on onboarding
  if (user && !user.unsafeMetadata?.role && pathname !== '/onboarding') {
    return <Navigate to='/onboarding' />;
  }

  return children;
}

export default ProtectedRoute;