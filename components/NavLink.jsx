import Link from "next/link"

const NavLink = ({ href, title, func }) => {
  return (
    <Link
      href={href}
      className='block py-2 pl-3 pr-4 text-grey sm:text-xl rounded md:p-0 hover:text-white'
      onClick={func}
    >
      {title}
    </Link>
  )
}

export default NavLink