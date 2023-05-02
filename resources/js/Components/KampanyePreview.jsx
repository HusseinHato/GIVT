import React from 'react';
import { Link } from '@inertiajs/react';
import differenceInDays from 'date-fns/differenceInDays';
// import { Editor } from '@tinymce/tinymce-react';


export default function Kampanye({ kampanye }) {
    const numberFormat = (value) =>
        new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(value);

    // console.log(new Date(kampanye.tgl_berkahir));

    const days = differenceInDays(
        new Date(kampanye.tgl_berkahir),
        new Date()
    )

    // console.log(kampanye.show_url)

    return (
        <div className="flex flex-col justify-center">
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
            <div className="w-full md:w-1/3 bg-white grid place-items-center">
                <img src={"/storage/"+kampanye.gambar} alt="gambar" className="rounded-xl" />
            </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">{kampanye.judul}</h3>
                    <p className="text-xl font-black text-gray-800">
                    Kategori : {kampanye.kategori}
                    </p>
                    <p className="md:text-lg text-gray-500 text-base">Target : {numberFormat(kampanye.target)}</p>
                    <p className="md:text-lg text-gray-500 text-base">Lama Kampanye : {days} hari</p>
                    <p className="text-xl font-black text-gray-800">
                    Status : {(kampanye.terverifikasi)? 'Sudah diverifikasi' : 'Belum terverifikasi'}
                    </p>
                    <Link href={kampanye.show_url}>
                        <button type='button' className='inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 '>
                            Selengkapnya
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
