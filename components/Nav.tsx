import Link from "next/link"
import Typewriter from 'typewriter-effect'
import navLink from "../constant/nav"
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
export const NavBar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const router = usePathname()
  return (
    <div className={`${theme === 'dark' ? ' bg-gray-900 ' : 'bg-white'} w-full  px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex fixed top-0 z-20 h-14 items-center justify-between`}>
      <div>
        <Link href="/">
          <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
            {`~${router}`}{' '}
            <Typewriter
              options={{
                strings: [],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {navLink.map((link) => (
            <Link
              key={link.title}
              href={link.href as string}
              className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch></ThemeSwitch>
        {/* <CommandPalette navigation={navigation} />
<DropMenu /> */}
        <MobileNav />
      </div>
    </div>
  )
}