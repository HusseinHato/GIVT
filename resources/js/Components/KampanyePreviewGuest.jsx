import React from 'react';
import { Link } from '@inertiajs/react';
import differenceInDays from 'date-fns/differenceInDays';
// import { Editor } from '@tinymce/tinymce-react';
import PrimaryButton from './PrimaryButton';


export default function Kampanye({ kampanye }) {
    const numberFormat = (value) =>
        new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(value);

    // console.log(new Date(kampanye.tgl_berkahir));

    const days = differenceInDays(
        new Date(kampanye.tgl_berakhir),
        new Date()
    )

    // console.log(days);

    // console.log(kampanye.show_url)

    return (
        // <div className="flex flex-col justify-center">
        //     <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-md shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
        //         <div className="w-full md:w-1/3 bg-white grid place-items-center">
        //             <img src={"/storage/"+kampanye.gambar} alt="gambar" className="rounded-md"/>
        //         </div>
        //         <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        //             <h3 className="font-black text-gray-800 md:text-3xl text-xl">{kampanye.judul}</h3>
        //             <p className="text-xl font-black text-gray-800">
        //             Kategori : {kampanye.kategori}
        //             </p>
        //             <p className="md:text-lg text-gray-500 text-base">Dana Terkumpul : {numberFormat(kampanye.dana_terkumpul)}</p>
        //             <p className="md:text-lg text-gray-500 text-base">Target : {numberFormat(kampanye.target)}</p>
        //             <div className="h-1 w-full bg-neutral-200 rounded-md">
        //                 <div className="h-1 bg-blue-700 rounded-md" style={{ width: (((kampanye.dana_terkumpul/kampanye.target)*100) < 100) ? (kampanye.dana_terkumpul/kampanye.target)*100 +'%' : 100 +'%'}} ></div>
        //             </div>
        //             <p className="md:text-lg text-gray-500 text-base">Sisa Hari : {(days > 0) ? days + " Hari" : 'Selesai'}</p>
        //             <Link href={kampanye.show_url}>
        //                 <button type='button' className='inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 '>
        //                     Selengkapnya
        //                 </button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>

        <div className="container mx-auto">
            <div className='rounded-md shadow-lg bg-white'>
                <div className="space-y-4 md:grid md:grid-cols-3 md:items-start md:gap-2 md:space-y-0 rounded-md">
                    <div className="">
                        <img className="h-72 w-full rounded-md" src={"/storage/"+kampanye.gambar} alt="Featured Photo"></img>
                    </div>
                    <div className="sm:col-span-2">
                        <div className="p-4">
                            <h4 className="text-2xl leading-6 font-bold font-sans">{kampanye.judul}</h4>
                            <p className="mt-4 text-md font-normal text-skin-base leading-5">
                                Kategori : {kampanye.kategori}
                            </p>
                            <p className="mt-4 text-md font-normal text-skin-base leading-5">
                                Dana Terkumpul : {numberFormat(kampanye.dana_terkumpul)}
                            </p>
                            <p className="mt-4 text-md font-normal text-skin-base leading-5">
                                Target : {numberFormat(kampanye.target)}
                            </p>
                            <div className="mt-2 h-1 w-full bg-gray-200 rounded-md">
                                <div className="h-1 bg-red-700 rounded-md" style={{ width: (((kampanye.dana_terkumpul/kampanye.target)*100) < 100) ? (kampanye.dana_terkumpul/kampanye.target)*100 +'%' : 100 +'%'}} ></div>
                            </div>
                            <p className="mt-4 text-md font-normal text-skin-base leading-5">
                                Sisa Hari : {(days > 0) ? days + " Hari" : 'Selesai'}
                            </p>
                            <Link href={kampanye.show_url}>
                                {/* <button type='button' className='mt-2 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 '>
                                    Selengkapnya
                                </button> */}
                                <PrimaryButton className='mt-2'>
                                    Selengkapnya
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


