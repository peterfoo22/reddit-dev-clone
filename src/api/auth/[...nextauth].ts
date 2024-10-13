// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';


// Fake database (for simplicity)
const users = [
  {
    id: 1,
    email: 'user@example.com',
    password: bcrypt.hashSync('password123', 10), // hashed password
  },
];

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const user = users.find((u) => u.email === credentials.email);
        if (user && bcrypt.compareSync(credentials.password as string, user.password as string)) {
          return { id: user.id.toString(), email: user.email }; // Convert id to string
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      return session; // Ensure the session object is returned
    },
  },
});
