'use client'

import { LogIn, User } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const ProfileBtn = () => {
  const { data:session } = useSession();

  return (
    <button className="primary">
      {session ? <Link href={{
        pathname: "/profile",
        query: {email: session.user?.email}
      }}><User size={24} /></Link> : <LogIn  onClick={() => signIn()}/>}
    </button>
  )
}

export default ProfileBtn