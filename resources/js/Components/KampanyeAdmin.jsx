import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import differenceInDays from 'date-fns/differenceInDays';
import PostPreview from '@/Components/PostPreview'
import { Link } from '@inertiajs/react';
import PrimaryButton from './PrimaryButton';
import { usePage } from '@inertiajs/react';


export default function KampanyeAdmin({ kampanye, posts, dana_terkumpul }) {
    console.log(kampanye);
    console.log(posts);

    const { auth } = usePage().props;

    // console.log(auth);

    const numberFormat = (value) =>
        new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(value);

    const days = differenceInDays(
        new Date(kampanye.tgl_berakhir),
        new Date()
    )

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    return (
    <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="p-6 bg-white rounded-md">
        <img src={"/storage/"+kampanye.gambar} alt="" className='w-full h-48 md:h-96 rounded-md object-fill'/>
                <h1 className="mt-4 text-6xl text-black">{kampanye.judul}</h1>
                <p className="mt-4 text-lg text-black">Gambar Header :</p>
                <p className="mt-4 text-lg text-black">Deskripsi : </p>
                <div>
                    <Editor
                        tinymceScriptSrc={'../../tinymce/tinymce.min.js'}
                        initialValue={kampanye.deskripsi}
                        disabled = {true}
                        init={{
                            toolbar: false,
                            statusbar: false,
                            menubar: false,
                            readonly: true,
                            plugins: 'autoresize',
                            content_css: 'default'
                         }}
                    />
                </div>
                <div className='clear-both'></div>
                <p className="mt-4 text-lg text-black">Target : {numberFormat(kampanye.target)}</p>
                <p className="mt-4 text-lg text-black">Dana Terkumpul : {numberFormat(dana_terkumpul)}</p>
                <div className="h-1 w-full bg-neutral-200 rounded-md">
                        <div className="h-1 bg-blue-700 rounded-md" style={{ width: (((dana_terkumpul/kampanye.target)*100) < 100) ? (dana_terkumpul/kampanye.target)*100 +'%' : 100 +'%'}} ></div>
                </div>
                <p className="mt-4 text-lg text-black">Tgl Mulai : {new Date(kampanye.tgl_mulai).toLocaleString("id-ID", options)}</p>
                <p className="mt-4 text-lg text-black">Tgl Berakhir : {new Date(kampanye.tgl_berakhir).toLocaleString("id-ID", options)}</p>
                <p className="mt-4 text-lg text-black">Sisa Hari : {(days > 0) ? days + " Hari" : 'Selesai'}</p>
                <p className="mt-4 text-lg text-black">Terverifikasi : {(kampanye.terverifikasi)? 'Sudah diverifikasi' : 'Belum terverifikasi'}</p>
                <p className="mt-4 text-lg text-black">Kategori : {kampanye.kategori}</p>
        </div>
    </div>
    );
}

