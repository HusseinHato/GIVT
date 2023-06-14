import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, router } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { Input, Button, Typography } from '@material-tailwind/react';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const [search, setSearch] = useState("");
    // console.log(search);
    const onChange = ({ target }) => setSearch(target.value);

    function onConfirm (e) {
        e.preventDefault()
        router.post(route('kampanye.cari'), {search: search});
    }

    return (
        <div className="min-h-screen bg-blue-100/50">
            <nav className=" bg-blue-100 border-b border-blue-100 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 md:flex">
                                <NavLink href={route('hal.utama')} active={route().current('hal.utama')}>
                                    Home
                                </NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('kampanye.semua')} active={route().current('kampanye.semua')}>
                                    Kampanye
                                </NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('post.semua')} active={route().current('post.semua')}>
                                    Berita
                                </NavLink>
                            </div>

                            {auth.user &&
                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                            </div>
                            }
                        </div>

                        {auth.user ?
                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-900 bg-blue-100/50 hover:text-gray-900 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                Menu

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                        :
                        <div className='hidden sm:flex sm:items-center sm:ml-6'>
                            <Link href={route('login')} className="text-sm text-gray-700 underline">
                                <SecondaryButton>
                                    Log in
                                </SecondaryButton>
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 underline"
                            >
                                <PrimaryButton type='button'>
                                    Register
                                </PrimaryButton>
                            </Link>
                        </div>
                        }


                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:text-blue-900 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className='hidden sm:flex items-center max-w-md mb-4'>
                        <div className="relative flex w-full max-w-[24rem]">
                            <Input
                                color='deep-orange'
                                type="text"
                                label="Cari Kampanye"
                                value={search}
                                onChange={onChange}
                                className="pr-20 focus:ring-0"
                                containerProps={{
                                className: "min-w-0",
                                }}
                            />
                            <Button
                                size="sm"
                                color={search ? "deep-orange" : "blue-gray"}
                                disabled={!search}
                                className="!absolute right-1 top-1 rounded"
                                onClick={(e) => onConfirm(e)}
                            >
                                Cari
                            </Button>
                        </div>
                    </div>

                </div>


                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                    {auth.user &&
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    }

                        <ResponsiveNavLink href={route('kampanye.semua')} active={route().current('kampanye.semua')}>
                            Kampanye
                        </ResponsiveNavLink>

                        <ResponsiveNavLink href={route('post.semua')} active={route().current('post.semua')}>
                            Berita
                        </ResponsiveNavLink>

                        <div className="relative flex w-full max-w-[24rem]">
                            <Input
                                color='deep-orange'
                                type="text"
                                label="Cari Kampanye"
                                value={search}
                                onChange={onChange}
                                className="pr-20 focus:ring-0"
                                containerProps={{
                                className: "min-w-0 max-w-xs ms-4 mt-2",
                                }}
                            />
                            <Button
                                size="sm"
                                color={search ? "deep-orange" : "blue-gray"}
                                disabled={!search}
                                className="ms-2 right-1 top-1 rounded mt-2"
                                onClick={(e) => onConfirm(e)}
                            >
                                Cari
                            </Button>
                        </div>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">

                        <div className="mt-3 space-y-1">
                            {auth.user ?
                                <>
                                    <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                                    <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                        Log Out
                                    </ResponsiveNavLink>
                                </>
                            :
                                <>
                                    <ResponsiveNavLink href={route('login')}>Login</ResponsiveNavLink>
                                    <ResponsiveNavLink href={route('register')}>Register</ResponsiveNavLink>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-blue-100 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>

            {/* <footer className="w-full bg-gray-800 p-8 border-t-4 border-red-500">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
                    <Typography color="white" className="text-center font-normal">
                        &copy; 2023 GIVT
                    </Typography>
                </div>
            </footer> */}
        </div>
    );
}
