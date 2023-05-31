import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Post from '@/Components/Post';
import { Head } from '@inertiajs/react';

export default function Index({ auth, post, show_url }) {

    console.log(post);

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Berita" />

            <Post post={post} show_url={show_url} />

        </AuthenticatedLayout>
    );
}
