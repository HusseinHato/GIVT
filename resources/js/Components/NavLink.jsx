import { Link } from '@inertiajs/react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-red-500 text-md font-medium leading-5 text-[#2b5c7b] focus:outline-none focus:border-red-500 transition duration-150 ease-in-out'
                    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-md font-medium leading-5 text-[#2b5c7b] hover:text-gray-900 hover:border-red-500 focus:outline-none focus:text-gray-900 focus:border-red-500 transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
    );
}
