import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Kampanye from '@/Components/Kampanye';
import { Head } from '@inertiajs/react';
import CardLink from '@/Components/CardLink';
import KampanyePreview from '@/Components/KampanyePreview';

export default function Index({ auth, kampanyes, posts }) {

    console.log(kampanyes);

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Kampanye" />

                <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 place-items-center">
                    {(!kampanyes.length == 0) ? kampanyes.map((kampanye, index) => {
                        return <KampanyePreview key={index} kampanye={kampanye} />
                    }) :
                    <>
                        <p className='text-lg text-gray-800'>Belum Ada kampanye ...</p>

                        {!route().current("kampanye.diikuti") &&
                        <CardLink
                        href={route('kampanye.create')}
                        >
                            Buat Kampanye
                        </CardLink>
                        }
                    </>

                    }
                    <div>

                    </div>
                </div>


        </AuthenticatedLayout>
    );
}
