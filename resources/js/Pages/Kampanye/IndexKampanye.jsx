import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Kampanye from '@/Components/Kampanye';
import { Head } from '@inertiajs/react';
import CardLink from '@/Components/CardLink';

export default function Index({ auth, kampanyes }) {

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Kampanye" />

                <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y mx-4">
                    {kampanyes.map(kampanye =>
                        <Kampanye key={kampanye.id} kampanye={kampanye} />
                    )}
                </div>

                <CardLink
                href={route('kampanye.create')}
                >
                    Buat Kampanye
                </CardLink>

                </div>

        </AuthenticatedLayout>
    );
}
