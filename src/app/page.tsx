"use client"

import { authClient } from "@/lib/auth-client"

import { Button } from "@/components/ui/button"

export default function Home() {
  const { data: session } = authClient.useSession()
  if (session) {
    return (
      <main className="p-5">
        <h1 className="text-3xl font-bold">Meet AI</h1>
        <div>
          <h2>{session.user?.name}</h2>
          <p>{session.user?.email}</p>
        </div>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </main>
    )
  }
  return (
    <main className="p-5">
      <h1 className="text-3xl font-bold">Meet AI</h1>
      <Button>Hello World</Button>
      <div></div>
    </main>
  )
}
