import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ method = 'get', as = 'a', href, active = false, children }) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? 'border-red-400 text-red-700  focus:text-red-800  focus:bg-red-100  focus:border-red-700 '
                    : 'border-transparent text-gray-900  hover:bg-white  hover:border-gray-300  focus:text-gray-800  focus:bg-gray-50  focus:border-gray-300'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
}
