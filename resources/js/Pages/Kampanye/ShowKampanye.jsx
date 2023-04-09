import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Kampanye from '@/Components/Kampanye';
import { Head } from '@inertiajs/react';

export default function Index({ auth, kampanye }) {

    console.log(kampanye);

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Kampanye" />

            <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 place-items-center">
                <Kampanye kampanye={kampanye} />
            </div>

        </AuthenticatedLayout>
    );
}
