import AdminLayout from "@/Layouts/AdminLayout";
import KampanyePreview from "@/Components/KampanyePreview";
import { Head } from "@inertiajs/react";

function IndexKampanye({ kampanyes }) {
  return (
    <>
        <Head title="Index Kampanye" />

        {(!kampanyes.length == 0) ? kampanyes.map((kampanye, index) => {
                return  <div className="mt-4" key={index}>
                            <KampanyePreview key={index} kampanye={kampanye} />
                        </div>
            }) :
            <>
                <p className='text-lg text-gray-800'>Belum Ada kampanye ...</p>
            </>
        }
    </>
  );
}

IndexKampanye.layout = page => <AdminLayout children={page} />

export default IndexKampanye;
