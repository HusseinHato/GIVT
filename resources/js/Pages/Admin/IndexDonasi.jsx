import AdminLayout from "@/Layouts/AdminLayout";
import DonasiPreview from "@/Components/DonasiPreview";
import { Head } from "@inertiajs/react";

function IndexDonasi({ donasis }) {
  return (
    <>
        <Head title="Index Donasi" />

        {(!donasis.length == 0) ? donasis.map((donasi, index) => {
                return  <div className="mt-4">
                            <DonasiPreview key={index} donasi={donasi} />
                        </div>
            }) :
            <>
                <p className='text-lg text-gray-800 mt-4'>Belum Ada Donasi ...</p>
            </>
        }
    </>
  );
}

IndexDonasi.layout = page => <AdminLayout children={page} />

export default IndexDonasi;
