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

export default function Signup() {
        const SignupWithGoogle = async () => {
                "use server"
                console.log ("signupWithGoogle") ;
                await signIn("google", { callbackUrl: "/" });
        }

    return (
        <div className="flex flex-col items-center justify-center">
            <Card className="w-[460px] h-full bg-white mb-4">
                <form action={SignupWithGoogle}>
            <CardHeader>
                <CardTitle className="text-gray-800 mb-1 items-center justify-center text-2xl text-center">Sign Up</CardTitle>
                <CardDescription className="text-sm text-gray-700 items-center justify-center text-center">
                Create an account to continue</CardDescription>
                
            </CardHeader>

                <CardContent>
                    <div className="grid w-full items-center gap-4"></div>
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="firstName">First Name</Label>
                        <input
                            type="text"
                            id="firstName"
                            className="border border-gray-300 rounded-md p-2"
                            placeholder="Sly"
                                required
                        />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="lastName">Last Name</Label>
                        <input
                            type="text"
                            id="lastName"
                            className="border border-gray-200 rounded-md p-2"
                            placeholder="Katter"
                            required
                        />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-200 rounded-md p-2"
                            placeholder="sly@example.com"
                                required
                        />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <input
                            type="password"
                            id="password"
                            className="border border-gray-200 rounded-md p-2"
                            placeholder="Password"
                            minLength={8}
                            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                            title="Password must be at least 8 characters long and include uppercase, lowercase, numbers, and symbols."
                            required
                        />
                        
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 items-center mb-4">
                    <Button
                        type="submit"
                        className="bg-gray-900 text-white w-full hover:bg-gray-800 transition-transform cursor-pointer mt-6"
                    >
                        Create an Account
                    </Button>
                </CardFooter>

            <CardFooter className="flex flex-col space-y-4 items-center mb-2">
                <Button
                    onClick={SignupWithGoogle}
                    className="bg-white cursor-pointer text-black w-full hover:bg-gray-50 transition-transform border border-gray-300 rounded-md p-2 flex items-center justify-center gap-x-2"
                >
                    <FcGoogle className="text-lx" />
                    Sign Up with Google
                </Button>
                <p className="text-sm text-gray-600 text-center mt-3">
                    Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a>
                </p>
            </CardFooter>
                </form>
            </Card>
        </div>
    );
}
