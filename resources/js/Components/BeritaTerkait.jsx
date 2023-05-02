import React from 'react';
import { Link } from '@inertiajs/react';
// import route from 'vendor/tightenco/ziggy/src/js';
// import { Editor } from '@tinymce/tinymce-react';


export default function Post({ post }) {

    // console.log(new Date(post.created_at).toLocaleString());

    return (
        <div className="flex flex-col justify-center mb-4">
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
            <div className="w-full md:w-1/3 bg-white grid place-items-center">
                <img src={"/storage/"+post.gambar} alt="gambar" className="rounded-xl" />
            </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">{post.judul}</h3>
                    <p className="text-xl font-black text-gray-800">
                    Tanggal Dibuat : {new Date(post.created_at).toLocaleString()}
                    </p>
                    <Link href={route('post.show', post)}>
                        <button type='button' className='inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 '>
                            Selengkapnya
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}



{/* <div
className="block w-80 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700">
    <h5
        className="mb-2 text-xl font-medium leading-tight text-gray-800 dark:text-gray-50">
        {kampanye.judul}
    </h5>
    <p className="mb-4 text-base text-gray-600 dark:text-gray-200">
        Target : {numberFormat(kampanye.target)}
    </p>
    <p className="mb-4 text-base text-gray-600 dark:text-gray-200">
        Lama Kampanye : {days} hari
    </p>
    <p className="mb-4 text-base text-gray-600 dark:text-gray-200">
        Status : {(kampanye.terverifikasi)? 'Sudah diverifikasi' : 'Belum terverifikasi'}
    </p>
    <Link href={kampanye.show_url}>
        <button type='button' className='inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 '>
            Selengkapnya
        </button>
    </Link>
</div> */}
