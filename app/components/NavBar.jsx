import Image from "next/image"
import Link from "next/link"
import Logo from "./site-logo.png"

function NavBar() {
    return (
        <nav>
            <Image
                src={Logo}
                alt={"site-logo"}
                width={70}
                quality={100}
                placeholder="blur"
            />
            <h1 h1 > Abdo HelpDesk</h1>
            {/* <div> */}
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
            {/* </div> */}
        </nav >
    )
}

export default NavBar
