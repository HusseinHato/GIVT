import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import KampanyePreviewGuest from '@/Components/KampanyePreviewGuest';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Welcome(props) {
    // console.log(props);
    return (
        <Authenticated auth={props.auth}>
            <Head title="Home" />

            <div className="max-w-6xl mx-auto p-4 sm:p-8 grid grid-cols-1 gap-4 place-items-center">

                {
                    props.kampanyes.map((kampanye, index) => {
                        return <KampanyePreviewGuest key={index} kampanye={kampanye} />
                    })
                }
            </div>
        </Authenticated>
    );
}
