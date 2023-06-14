import AdminLayout from "@/Layouts/AdminLayout";
import CardLink from "@/Components/CardLink";
import PostPreviewAdmin from "@/Components/PostPreviewAdmin";
import { Head } from "@inertiajs/react";
import { useState, Fragment } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Alert
  } from "@material-tailwind/react";
import { router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

function LihatBerita({ posts }) {
    // console.log(route().current());
    // console.log(posts);

    const [beritaId, setBeritaId] = useState(null);
    const [confirmOpen, setConfirmOpen] = useState(false);

    console.log(beritaId);
    // console.log(confirmOpen);

    function onConfirm (e) {
        e.preventDefault()
        router.delete(`/admin/post/delete/${beritaId.id}`, { onSuccess: () => {setConfirmOpen(false)}, });
    }

    const handleOpen = () => setConfirmOpen(!confirmOpen);

    router.on('finish', (event) => {
        setConfirmOpen(false)
    })

    const [open, setOpen] = useState(true);

    const { flash } = usePage().props

    console.log(flash.message);

  return (
    <>
        <Head title="Index Berita" />

        {flash.message &&
            <Fragment>
                <Alert open={open} onClose={() => setOpen(false)} color="green">
                    {flash.message}
                </Alert>
            </Fragment>
        }

        <Fragment>
            <Dialog open={confirmOpen} handler={handleOpen}>
                <DialogHeader>Konfirmasi Hapus ?</DialogHeader>
                <DialogBody divider className="text-gray-800">
                Apakah Anda yakin akan menghapus <span className="font-black">{beritaId?.judul}</span> ?, Data yang telah dihapus tidak dapat dikembalikan lagi !
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

        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 place-items-center">
        {(!posts.length == 0) ? posts.map((post, index) => {
            return  <div className="grid grid-cols-1 lg:grid-cols-8" key={index}>
                        <div className="col-span-7">
                            <PostPreviewAdmin key={index} post={post} />
                        </div>
                        <Button onClick={()=> {
                            setBeritaId(post);
                            setConfirmOpen(true);
                        }} variant="gradient" color="red">
                            Delete
                        </Button>
                    </div>

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
