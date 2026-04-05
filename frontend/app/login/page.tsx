'use client'

import { useRef } from "react";
import { useAuthStore } from "../stores/AuthStore";
import { useRouter } from "next/navigation";

const page = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const login = useAuthStore((state:any) => state.login);
  const router = useRouter();

  const handleSubmit = (e:SubmitEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    login(form.email.value, form.password.value);
    router.replace("/")
  }

  return (
    <main className="flex items-center justify-center h-[85dvh]">
      <form className="m-auto w-fit flex flex-col gap-1 p-1 border rounded" ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="authEmail">Почта</label>
        <input type="email" id="authEmail" name="email" placeholder="example@mail.com" />
        <label htmlFor="authPassword">Пароль</label>
        <input type="password" id="authPassword" name="password" placeholder="password123" />
        <input type="submit" />
      </form>
    </main>
  )
}

export default page