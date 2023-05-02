import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import differenceInDays from 'date-fns/differenceInDays';
import BeritaTerkait from '@/Components/BeritaTerkait';
import { Link } from '@inertiajs/react';


export default function Kampanye({ kampanye }) {
    console.log(kampanye);

    const numberFormat = (value) =>
        new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(value);

    const days = differenceInDays(
        new Date(kampanye.tgl_berakhir),
        new Date()
    )

    return (
        <div className="p-6 flex space-x-2">
            <div className="flex-1">
                <h1 className="text-6xl text-white">{kampanye.judul}</h1>
                <p className="mt-4 text-lg text-white">Gambar Header :</p>
                <img src={"/storage/"+kampanye.gambar} alt="" className='w-100 h-96'/>
                <p className="mt-4 text-lg text-white">Deskripsi : </p>
                <div>
                    <Editor
                        tinymceScriptSrc={'../tinymce/tinymce.min.js'}
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
                <p className="mt-4 text-lg text-white">Target : {numberFormat(kampanye.target)}</p>
                <p className="mt-4 text-lg text-white">Dana Terkumpul : {numberFormat(kampanye.dana_terkumpul)}</p>
                <p className="mt-4 text-lg text-white">Tgl Mulai : {new Date(kampanye.tgl_mulai).toLocaleString()}</p>
                <p className="mt-4 text-lg text-white">Tgl Berakhir : {new Date(kampanye.tgl_berakhir).toLocaleString()}</p>
                <p className="mt-4 text-lg text-white">Lama Kampanye : {days} hari</p>
                <p className="mt-4 text-lg text-white">Terverifikasi : {(kampanye.terverifikasi)? 'Sudah diverifikasi' : 'Belum terverifikasi'}</p>
                <p className="mt-4 text-lg text-white">Kategori : {kampanye.kategori}</p>
                <p className="mt-4 mb-4 text-lg text-white">Berita Terkait : </p>
                {!kampanye.posts.length == 0 ?
                    <>
                        {kampanye.posts.slice(0, 2).map((post, index) => {
                            // console.log(post)
                            return <BeritaTerkait key={index} post={post}/>
                        })}

                        <Link href={route('kampanye.showbt', kampanye)}>
                            <button type='button' className='inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 '>
                                Berita Terkait Lainnya ...
                            </button>
                        </Link>

                    </>
                    : <p className='mt-4 text-lg text-white'>Belum Ada Berita Terkait Kampanye ...</p>
                }
            </div>
        </div>
    );
}
