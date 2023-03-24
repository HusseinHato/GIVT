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

            <CardLink
                href={route('kampanye.index')}
            >
                Buat Kampanye
            </CardLink>

        </AuthenticatedLayout>
    );
}
