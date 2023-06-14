import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import PostPreview from '@/Components/PostPreview';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Index({auth, posts}) {
    // console.log(props);
    return (
        <Authenticated auth={auth}
        // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Semua Berita</h2>}
        >
            <Head title="Index All" />

            <div className="max-w-6xl mx-auto p-4 sm:p-8 grid grid-cols-1 gap-4 place-items-center">

                {
                    posts.map((post, index) => {
                        return <PostPreview key={index} post={post} />
                    })
                }
            </div>
        </Authenticated>
    );
}
