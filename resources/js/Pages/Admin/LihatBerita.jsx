import AdminLayout from "@/Layouts/AdminLayout";
import CardLink from "@/Components/CardLink";
import PostPreviewAdmin from "@/Components/PostPreviewAdmin";
import { Head } from "@inertiajs/react";

function LihatBerita({ posts }) {
    // console.log(route().current());
  return (
    <>
        <Head title="Index Berita" />
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 place-items-center">
        {(!posts.length == 0) ? posts.map((post, index) => {
            return <PostPreviewAdmin key={index} post={post} />
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
        </div>
    </>
  );
}

LihatBerita.layout = page => <AdminLayout children={page} />

export default LihatBerita;
