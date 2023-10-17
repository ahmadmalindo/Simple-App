import { useRouter, Slot } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
  
  const router = useRouter()

  let token: string | null = null

  useEffect(() => {
    if (token === null) {
      return router.replace("(auth)/login")
    }
    else {
      return router.replace("(tabs)")
    }
  }, [token])
  
  return <Slot/>

}
