import Donasi from '@/Components/Donasi';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ auth, donasi, kampanye, show_url }) {

    console.log(kampanye);

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Donasi" />

                <Donasi donasi={donasi} kampanye={kampanye} show_url={show_url} />

        </AuthenticatedLayout>
    );
}
