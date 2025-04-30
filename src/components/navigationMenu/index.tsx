import appConfig from "@/config/app"
import { cva } from "class-variance-authority"

const container = cva("flex gap-x-3")

const item = cva("text-black font-semibold text-sl")

export function NavigationMenu(){
    return <ul className={container()}>
        {appConfig.NavigationMenu.map((menuItem, idx) => (
            <a className={item()} href={menuItem.url} key={idx}>
                {menuItem.item}
            </a>
        ))}
    </ul>
}