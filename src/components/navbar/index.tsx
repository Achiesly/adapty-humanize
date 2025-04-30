import { cva } from "class-variance-authority";
import { Logo } from "../logo";
import { NavigationMenu } from "../navigationMenu";
import { AccessControls } from "./accessControls";
const container = cva("flex justify-around items-center px-8 py-4");

export function Navbar() {

    return <div className={container()}>
        <Logo />
        <NavigationMenu />
        <AccessControls />

    </div>

}