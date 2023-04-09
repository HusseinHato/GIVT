import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import differenceInDays from 'date-fns/differenceInDays';


export default function Kampanye({ kampanye }) {
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
                <img src={"/storage/"+kampanye.gambar} alt=""/>
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
                            plugins: 'autoresize'
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
            </div>
        </div>
    );
}
