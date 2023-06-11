import AdminLayout from "@/Layouts/AdminLayout";
import EditPost from "@/Pages/Post/EditPost";
import { Head } from "@inertiajs/react";

function EditBerita({ kampanyes, berita }) {
  return (
    <>
        <Head title="Edit Berita" />
        <EditPost kampanyes={kampanyes} berita={berita}/>
    </>
  );
}

EditBerita.layout = page => <AdminLayout children={page} />

export default EditBerita;
