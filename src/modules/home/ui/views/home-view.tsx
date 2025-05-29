"use client"

import { useRouter } from "next/navigation"

import { authClient } from "@/lib/auth-client"

import { Button } from "@/components/ui/button"

export function HomeView() {
  const router = useRouter()
  const { data: session } = authClient.useSession()

  if (!session) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <h1>Home</h1>
      <h2>Logged in as {session.user.email}</h2>
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: { onSuccess: () => router.push("/sign-in") },
          })
        }
      >
        Sign out
      </Button>
    </div>
  )
}
