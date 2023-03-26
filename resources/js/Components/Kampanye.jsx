import React from 'react';

export default function Kampanye({ kampanye }) {
    const numberFormat = (value) =>
        new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(value);

    return (
        <div className="p-6 flex space-x-2">
            <div className="flex-1">
                <p className="text-lg text-gray-900">Judul : {kampanye.judul}</p>
                <p className="mt-4 text-lg text-gray-900">Deskripsi : {kampanye.deskripsi}</p>
                <p className="mt-4 text-lg text-gray-900">Target : {numberFormat(kampanye.target)}</p>
                <p className="mt-4 text-lg text-gray-900">Tgl Mulai : {new Date(kampanye.tgl_mulai).toLocaleString()}</p>
                <p className="mt-4 text-lg text-gray-900">Tgl Berakhir : {new Date(kampanye.tgl_berakhir).toLocaleString()}</p>
                <p className="mt-4 text-lg text-gray-900">Terverifikasi : {(kampanye.terverifikasi)? 'Sudah diverifikasi' : 'Belum terverifikasi'}</p>
            </div>
        </div>
    );
}
