import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CardLink from '@/Components/CardLink';
import PostPreview from '@/Components/PostPreview';

export default function Index({ auth, posts }) {

    // console.log(posts);

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Berita" />

                <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 place-items-center">

                    {(!posts.length == 0) ? posts.map((post, index) => {
                        return <PostPreview key={index} post={post} />
                    }) :
                    <>
                        <p className='text-lg text-gray-800'>Belum Ada post ...</p>

                        <CardLink
                        href={route('post.create')}
                        >
                            Buat Post
                        </CardLink>
                    </>

                    }
                    <div>

                    </div>
                </div>


        </AuthenticatedLayout>
    );
}
