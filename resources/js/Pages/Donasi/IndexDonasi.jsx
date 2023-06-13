import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CardLink from '@/Components/CardLink';
import DonasiPreview from '@/Components/DonasiPreview';

export default function Index({ auth, donasis }) {

    console.log(donasis);

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Donasi" />

                <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 place-items-center">
                    {(!donasis.length == 0) ? donasis.map((donasi, index) => {
                        return <DonasiPreview key={index} donasi={donasi} />
                    }) :
                    <>
                        <p className='text-lg text-gray-800'>Belum Ada Donasi ...</p>
                    </>

                    }
                </div>


        </AuthenticatedLayout>
    );
}
