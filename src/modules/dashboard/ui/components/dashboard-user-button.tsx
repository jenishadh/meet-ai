"use client"

import { useRouter } from "next/navigation"
import { ChevronDownIcon, CreditCardIcon, LogOutIcon } from "lucide-react"

import { authClient } from "@/lib/auth-client"
import { useIsMobile } from "@/hooks/use-mobile"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import GeneratedAvatar from "@/components/generated-avatar"

export function DashboardUserButton() {
  const router = useRouter()
  const { data, isPending } = authClient.useSession()
  const isMobile = useIsMobile()

  const onLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in")
        },
      },
    })
  }

  if (isPending || !data?.user) {
    return null
  }

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger className="border-border/10 flex w-full items-center justify-between gap-x-2 overflow-hidden rounded-lg border bg-white/5 p-3 hover:bg-white/10">
          {data.user.image ? (
            <Avatar>
              <AvatarImage src={data.user.image} />
            </Avatar>
          ) : (
            <GeneratedAvatar
              seed={data.user.name}
              variant="initials"
              className="mr-3 size-9"
            />
          )}
          <div className="flex min-w-0 flex-1 flex-col gap-0.5 overflow-hidden text-left">
            <p className="w-full truncate text-sm">{data.user.name}</p>
            <p className="w-full truncate text-xs">{data.user.email}</p>
          </div>
          <ChevronDownIcon className="size-5 shrink-0" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{data.user.name}</DrawerTitle>
            <DrawerDescription>{data.user.email}</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button variant="outline" onClick={() => {}}>
              Billing
              <CreditCardIcon className="size-4 text-black" />
            </Button>
            <Button variant="outline" onClick={onLogout}>
              Logout
              <LogOutIcon className="size-4 text-black" />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-border/10 flex w-full items-center justify-between gap-x-2 overflow-hidden rounded-lg border bg-white/5 p-3 hover:bg-white/10">
        {data.user.image ? (
          <Avatar>
            <AvatarImage src={data.user.image} />
          </Avatar>
        ) : (
          <GeneratedAvatar
            seed={data.user.name}
            variant="initials"
            className="mr-3 size-9"
          />
        )}
        <div className="flex min-w-0 flex-1 flex-col gap-0.5 overflow-hidden text-left">
          <p className="w-full truncate text-sm">{data.user.name}</p>
          <p className="w-full truncate text-xs">{data.user.email}</p>
        </div>
        <ChevronDownIcon className="size-5 shrink-0" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right" className="w-72">
        <DropdownMenuLabel>
          <div className="flex flex-col gap-1">
            <span className="truncate font-medium">{data.user.name}</span>
            <span className="font-font-normal text-muted-foreground truncate text-sm">
              {data.user.email}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex cursor-pointer items-center justify-between">
          Billing
          <CreditCardIcon className="size-4" />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={onLogout}
          className="flex cursor-pointer items-center justify-between"
        >
          Logout
          <LogOutIcon className="size-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
