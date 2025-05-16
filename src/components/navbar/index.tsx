import { cva } from "class-variance-authority";
import { Logo } from "../logo";
import { NavigationMenu } from "../navigationMenu";
import { AccessControls } from "./accessControls";
const container = cva(
    "flex justify-around items-center px-8 py-4 bg-[#001f65] border-b- border-[#001f65]",
);

export function Navbar() {
    return (
        <div className={container()}>
            <Logo />
            <NavigationMenu />
            <AccessControls />
        </div>
    );
}
//-[#0a1a2f] via-[#1e3a5c] to-[#0f2027] t
