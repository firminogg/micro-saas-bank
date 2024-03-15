'use client'

import { signOut } from "next-auth/react"
import { Button } from "./ui/button"

interface SignOutButtonProps {
  children: React.ReactNode
}

export const SignOutButton = ({ children }: SignOutButtonProps) => {
  return (
    <Button>
      <button onClick={() => signOut()}>{children}</button>
    </Button>
  )
}