import Kampanye from '@/Components/Kampanye';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PemilikKampanye from '@/Components/PemilikKampanye';
import DonasiKampanye from '@/Components/DonasiKampanye';

export default function Index({ auth, kampanye, posts, dana_terkumpul, donasis }) {

    // console.log(kampanye);
    // console.log(auth);
    // console.log(donasis);

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Kampanye" />

            {auth.user && auth.user.id == kampanye.user_id ?
                <PemilikKampanye kampanye={kampanye} posts={posts} dana_terkumpul={dana_terkumpul}/>
             :
                <Kampanye kampanye={kampanye} posts={posts} dana_terkumpul={dana_terkumpul}/>
             }

            <div class="max-w-3xl px-4 pb-12 sm:px-6 lg:px-8 mx-auto">
                <p className='text-lg text-black mb-2'>Donasi : </p>
                {(!donasis.length == 0) ? donasis.map((donasi, index) => {
                    return <DonasiKampanye key={index} donasi={donasi} />
                }) :
                <>
                    <p className='text-lg text-gray-800'>Belum Ada Donasi ...</p>
                </>

                }
            </div>

        </AuthenticatedLayout>
    );
}
