import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        email: { label: "Почта", type: "email", placeholder: "example@mail.ru" },
        password: { label: "Пароль", type: "password", placeholder: "password_123" }
      },
      async authorize(credentials, req) {
        // const user = data.find((u:any) => credentials && u.email === credentials.email && u.password === credentials.password);
        const user = {
          id: "1",
          name: "Иванов Иван",
          email: "Artemaz347@yandex.ru",
        }

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {}


})

export { authOptions as GET, authOptions as POST }