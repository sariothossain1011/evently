import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems";

const MobileNav = () => {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className=" align-middle">
                    <FaBars size={28} />
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                <Link href="/" className=" w-36">
                    <Image src='/assets/images/logo.png' width={128} height={38} alt="loto image" />
                </Link>
                <Separator />
                <NavItems/>

                </SheetContent>
            </Sheet>

        </nav>
    )
}

export default MobileNav