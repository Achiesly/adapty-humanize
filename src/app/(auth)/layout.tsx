import Signup from "./signup/page"
import Login from "./login/page";


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="size-full flex flex-col items-center bg-gray-100">
      {!children && <Signup />}
      {!children && <Login />}

      {children && <div className="size-full flex flex-col items-center justify-center">{children}</div>}
    </div>
  );
}