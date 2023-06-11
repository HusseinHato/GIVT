import SidebarAdmin from "@/Components/SidebarAdmin";
import NavbarAdmin from "@/Components/NavbarAdmin";
import { useState } from "react";
import { usePage } from "@inertiajs/react";

export default function AdminLayout({ children }){
    const [showSideNav, setShowSideNav] = useState(true);

    // const { auth } = usePage().props
    // console.log(showSideNav);

    // console.log(auth);


    return (
        <div className="min-h-screen bg-blue-gray-50/50">
            <SidebarAdmin showSideNav={showSideNav} setShowSideNav={() => setShowSideNav(!showSideNav)}/>
            <div className="p-4 xl:ml-80 z-0">
                <NavbarAdmin setShowSideNav={() => setShowSideNav(!showSideNav)}/>
                <main>
                    {children}
                </main>
            </div>
        </div>

    );
}
