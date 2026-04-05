'use client'

import { User } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "../stores/AuthStore";

const ProfileBtn = () => {
  const email = useAuthStore((state:any) => state.email);

  return (
    <button className="primary">
      <Link href={{
      pathname: "/profile",
      query: {email: email}
      }}>
        <User size={24} />
      </Link>
    </button>
  )
}

export default ProfileBtn