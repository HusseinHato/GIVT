import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import differenceInDays from 'date-fns/differenceInDays';
import { Link } from '@inertiajs/react';
import PrimaryButton from './PrimaryButton';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import Kampanye from './KampanyePreviewPost';


export default function Donasi({ donasi, kampanye, show_url }) {
    // console.log(donasi);

    // const { auth } = usePage().props;

    // console.log(auth);

      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    //   console.log(snap);

    return (
        <div class="max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
            <div className="p-6 space-y-2 bg-white rounded-md">
                <p className='text-md text-black'>Kampanye Terkait : </p>
                <Kampanye kampanye={kampanye} show_url={show_url}/>
                <p className='text-md text-black'>Nama : {donasi.nama}</p>
                <p className='text-md text-black'>Jumlah Donasi : {donasi.jumlah}</p>
                <p className='text-md text-black'>Status : {donasi.status}</p>
                <p className='text-md text-black'>Tanggal Pemesanan : {new Date(donasi.created_at).toLocaleString("id-ID", options)}, {new Date(donasi.created_at).toLocaleTimeString("id-ID")}</p>
                {donasi.status === "Paid" &&
                    <p className='text-md text-black'>Tanggal Pembayaran : {new Date(donasi.updated_at).toLocaleString("id-ID", options)}, {new Date(donasi.updated_at).toLocaleTimeString("id-ID")}</p>
                }
                {donasi.doa &&
                    <p className='text-md text-black'>Doa : {donasi.doa}</p>
                }
            </div>
        </div>
    );
}
