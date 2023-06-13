import AdminLayout from "@/Layouts/AdminLayout";
import { Head, router} from "@inertiajs/react";
import KampanyeAdmin from "@/Components/KampanyeAdmin";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import { Fragment, useState } from "react";
import DonasiKampanye from "@/Components/DonasiKampanye";



function ShowBerita({ show_url, kampanye, posts, dana_terkumpul, donasis }) {
        // console.log(route().current());

    const [confirmOpen, setConfirmOpen] = useState(false);

    // console.log(confirmOpen);

    function onConfirm (e) {
        e.preventDefault()
        router.patch(route('admin.kampanye.konfirmasi', kampanye), {terverifikasi: true}, { onSuccess: () => {setConfirmOpen(false)}, });
    }

    const handleOpen = () => setConfirmOpen(!confirmOpen);

    router.on('finish', (event) => {
        setConfirmOpen(false)
    })

  return (
    <>
        <Head title="Lihat Berita" />

        <Fragment>
            <Dialog open={confirmOpen} handler={handleOpen}>
                <DialogHeader>Konfirmasi Verifikasi ?</DialogHeader>
                <DialogBody divider className="text-gray-800">
                Apakah Anda yakin akan memverifikasi <span className="font-black">{kampanye.judul} ?</span>
                </DialogBody>
                <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={(e) => onConfirm(e)}>
                    <span>Confirm</span>
                </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>

        <KampanyeAdmin kampanye={kampanye} dana_terkumpul={dana_terkumpul}/>

        {!kampanye.terverifikasi &&
            <div className='flex justify-center mb-6'>
                <Button onClick={handleOpen} color="green">Verifikasi Kampanye</Button>
            </div>
        }

        <div className="max-w-3xl px-4 pb-12 sm:px-6 lg:px-8 mx-auto">
                <p className='text-lg text-black mb-2'>Donasi : </p>
                {(!donasis.length == 0) ? donasis.map((donasi, index) => {
                    return <DonasiKampanye key={index} donasi={donasi} />
                }) :
                <>
                    <p className='text-lg text-gray-800'>Belum Ada Donasi ...</p>
                </>
                }
        </div>
    </>
  );
}

ShowBerita.layout = page => <AdminLayout children={page} />

export default ShowBerita;
