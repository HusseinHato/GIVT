import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CardLink from '@/Components/CardLink';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 place-items-center">
            <CardLink
                href={route('kampanye.index')}
            >
                Lihat Kampanye Saya
            </CardLink>

            <CardLink
                href={route('kampanye.create')}
            >
                Buat Kampanye
            </CardLink>

            <CardLink
                href={route('donasi.index')}
            >
                Lihat Riwayat Transaksi
            </CardLink>

            <CardLink
                href={route('kampanye.diikuti')}
            >
                Lihat Kampanye yang diikuti
            </CardLink>
            </div>

        </AuthenticatedLayout>
    );
}
