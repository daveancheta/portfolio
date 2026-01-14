import Link from "next/link"
import { ModeToggle } from "../mode-toggle"
import { HyperText } from "../ui/hyper-text"

function Header() {
    return (
        <header className='wrapper font-bold -tracking-wide sm:text-5xl text-2xl
    backdrop-blur shadow-accent'>
            <div className="flex gap-2 items-center justify-between">
                <Link className="" href='/'>
                    <HyperText className="cursor-none">HDA</HyperText>
                </Link>
                <div className="text-lg">
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header