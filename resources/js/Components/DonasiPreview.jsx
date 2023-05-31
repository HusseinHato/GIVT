import React from 'react';
import { Link } from '@inertiajs/react';
import differenceInDays from 'date-fns/differenceInDays';
// import { Editor } from '@tinymce/tinymce-react';


export default function Donasi({ donasi }) {
    const numberFormat = (value) =>
        new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(value);

    // console.log(new Date(kampanye.tgl_berkahir));

    console.log(donasi);

    // console.log(kampanye.show_url)

    return (
        <div className="container mx-auto">
        <div style={{ backgroundColor: 'rgb(245 245 245)' }} className='rounded-md'>
            <div className="space-y-4 md:grid md:grid-cols-3 md:items-start md:gap-2 md:space-y-0 rounded-md">
                <div className="">
                    <img className="h-72 w-full rounded-md" src={"/storage/"+donasi.gambar} alt="Featured Photo"></img>
                </div>
                <div className="sm:col-span-2">
                    <div className="p-4">
                        <h4 className="text-2xl leading-6 font-bold font-sans">{donasi.judul}</h4>
                        <p className="mt-4 text-md font-normal text-skin-base leading-5">
                            Kategori : {donasi.kategori}
                        </p>
                        <p className="mt-4 text-md font-normal text-skin-base leading-5">
                            Jumlah Donasi : {numberFormat(donasi.jumlah)}
                        </p>
                        <p className="mt-4 text-md font-normal text-skin-base leading-5">
                            Status : {donasi.status}
                        </p>
                        <Link href={donasi.show_url}>
                            <button type='button' className='inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 mt-4'>
                                Selengkapnya
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
