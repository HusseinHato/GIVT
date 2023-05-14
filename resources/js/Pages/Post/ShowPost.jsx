import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Post from '@/Components/Post';
import { Head } from '@inertiajs/react';

export default function Index({ auth, post }) {

    console.log(post);

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Berita" />

            <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 place-items-center">
                <Post post={post} />
            </div>

        </AuthenticatedLayout>
    );
}
