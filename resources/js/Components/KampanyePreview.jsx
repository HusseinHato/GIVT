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

    console.log(new Date(kampanye.tgl_berkahir));

    const days = differenceInDays(
        new Date(kampanye.tgl_berkahir),
        new Date()
    )

    return (
        <div
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
        </div>
    );
}
