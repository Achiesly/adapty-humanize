import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc";
import { cva } from "class-variance-authority";
import { signIn } from "@/auth";

 
export default function Login() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
      }}
    >
    <Card className="w-[400px] bg-white mb-4">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
        Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="m@example.com"
          className="w-full px-3 py-2 border rounded-md"
        />
        </div>
        <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 border rounded-md"
        />
        <div className="text-right">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot your password?
          </a>
        </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
        Sign In
        </Button>
      </CardFooter>
    </Card>
    </form>
  )
}