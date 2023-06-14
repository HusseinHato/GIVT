import { Link, Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import KampanyePreviewGuest from '@/Components/KampanyePreviewGuest';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import CardBeritaHome from '@/Components/CardBeritaHome';
import { Typography } from '@material-tailwind/react';

export default function Welcome(props) {
    // console.log(props);
    return (
        <Authenticated auth={props.auth}>
            <Head title="Home" />

            <div className="max-w-6xl mx-auto mb-4 grid grid-cols-1 gap-4 place-items-center">
                <img src="/storage/mainhero.png" className='w-full rounded-md shadow-lg' />
            </div>

            <div className="max-w-6xl mx-auto mb-4 mt-12 grid grid-cols-1 gap-4 place-items-center">
                <h2 className='text-4xl font-serif font-extrabold text-blue-900'>
                    Kategori
                </h2>
            </div>

            <div className="max-w-6xl mx-auto p-4 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                <Link href={route('kampanye.pendidikan')} className='flex flex-col flex-nowrap items-center justify-center w-full bg-white rounded-md shadow-lg h-48'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24">
                        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                    </svg>
                    <h2 className='text-4xl font-sans font-semibold text-gray-900'>
                        Pendidikan
                    </h2>
                </Link>

                <Link href={route('kampanye.kemanusiaan')} className='flex flex-col flex-nowrap items-center justify-center w-full bg-white rounded-md shadow-lg h-48'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24">
                        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                    </svg>

                    <h2 className='text-4xl font-sans font-semibold text-gray-900'>
                        Kemanusiaan
                    </h2>
                </Link>
            </div>

            <div className="max-w-6xl mx-auto mb-4 mt-4 grid grid-cols-1 gap-4 place-items-center">
                <h2 className='text-4xl font-serif font-extrabold text-blue-900'>
                    Berita Pilihan
                </h2>
            </div>

            <div className="max-w-6xl mx-auto p-4 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">

                {
                    props.posts.map((post, index) => {
                        return <CardBeritaHome key={index} post={post} />
                    })
                }
            </div>

            <div className="max-w-6xl mx-auto mb-4 mt-4 grid grid-cols-1 gap-4 place-items-center">
                <h2 className='text-4xl font-serif font-extrabold text-blue-900'>
                    Kampanye Pilihan
                </h2>
            </div>

            <div className="max-w-6xl mx-auto p-4 sm:p-8 grid grid-cols-1 gap-4 place-items-center">
                {
                    props.kampanyes.map((kampanye, index) => {
                        return <KampanyePreviewGuest key={index} kampanye={kampanye} />
                    })
                }
            </div>

            {/* <div className="max-w-6xl mx-auto mb-4 mt-4 grid grid-cols-1 gap-4 place-items-center">
                <h2 className='text-4xl font-serif font-extrabold text-blue-900'>
                    Doa Pilihan
                </h2>
            </div>

            <div className="max-w-6xl mx-auto p-4 sm:p-8 grid grid-cols-1 gap-4 place-items-center">

            </div> */}


        </Authenticated>
    );
}
