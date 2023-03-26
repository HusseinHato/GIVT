import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CardLink from '@/Components/CardLink';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <CardLink
                href={route('kampanye.index')}
            >
                Lihat Kampanye
            </CardLink>

            <CardLink
                href={route('kampanye.create')}
            >
                Buat Kampanye
            </CardLink>
            </div>

        </AuthenticatedLayout>
    );
}
