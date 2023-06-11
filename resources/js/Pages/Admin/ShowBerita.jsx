import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import PostAdmin from "@/Components/PostAdmin";

function ShowBerita({ post, show_url }) {
        // console.log(route().current());

  return (
    <>
        <Head title="Lihat Berita" />

        <PostAdmin post={post} show_url={show_url} />
    </>
  );
}

ShowBerita.layout = page => <AdminLayout children={page} />

export default ShowBerita;
