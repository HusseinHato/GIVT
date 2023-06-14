import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import KampanyePreviewGuest from '@/Components/KampanyePreviewGuest';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Index({auth, kampanyes}) {
    // console.log(props);
    return (
        <Authenticated auth={auth}
        // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Semua Kampanye</h2>}
        >
            <Head title="Index All" />

            <div className="max-w-6xl mx-auto p-4 sm:p-8 grid grid-cols-1 gap-4 place-items-center">

                {
                    kampanyes.map((kampanye, index) => {
                        return <KampanyePreviewGuest key={index} kampanye={kampanye} />
                    })
                }
            </div>
        </Authenticated>
    );
}
