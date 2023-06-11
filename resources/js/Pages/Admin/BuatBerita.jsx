import AdminLayout from "@/Layouts/AdminLayout";
import CreatePost from "@/Pages/Post/CreatePost";
import { Head } from "@inertiajs/react";

function BuatBerita({ kampanyes }) {
    // console.log(route().current())
  return (
    <>
        <Head title="Buat Berita" />
        <CreatePost kampanyes={kampanyes}/>
    </>
  );
}

BuatBerita.layout = page => <AdminLayout children={page} />

export default BuatBerita;
