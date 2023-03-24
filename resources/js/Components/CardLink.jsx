import { Link } from '@inertiajs/react';

export default function CardLink({href, children}){
    return(
        <Link
        href={href}>
            <div className="rounded max-w-sm overflow-hidden shadow-md bg-gray-800 m-9">
                <div className='px-2 py-4'>
                    <div className='text-lg font-bold text-center text-gray-800 dark:text-gray-200'>
                        {children}
                    </div>
                </div>
            </div>
        </Link>
    );
}
