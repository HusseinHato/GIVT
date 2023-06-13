import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import DonasiAdmin from "@/Components/DonasiAdmin";

function ShowDonasi({ donasi, show_url, kampanye }) {
        // console.log(route().current());

  return (
    <>
        <Head title="Lihat Berita" />

        <DonasiAdmin donasi={donasi} show_url={show_url} kampanye={kampanye}/>
    </>
  );
}

ShowDonasi.layout = page => <AdminLayout children={page} />

export default ShowDonasi;
