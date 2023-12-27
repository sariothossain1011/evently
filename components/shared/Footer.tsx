import Link from "next/link"
import Image from "next/image"
const Footer = () => {
    return (
        <footer className=" border-t">
            <div className="flex-center wrapper flex-between flex flex-col gap-5 p-5 text-center md:flex-row">
                <Link href='/'>
                <Image src='/assets/images/logo.png' width={128} height={38} alt="loto image" />
                </Link>
                <p>&copy; 2023 Evently. All Rights reserved by Sariot Hossain</p>
            </div>
        </footer>
    )
}

export default Footer
