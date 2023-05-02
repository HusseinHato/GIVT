import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import differenceInDays from 'date-fns/differenceInDays';
import { Link } from '@inertiajs/react';


export default function Post({ post }) {


    return (
        <div className="p-6 flex space-x-2">
            <div className="flex-1">
                <h1 className="text-6xl text-white">{post.judul}</h1>
                <p className="mt-4 text-lg text-white">Gambar Header :</p>
                <img src={"/storage/"+post.gambar} alt="" className='w-100 h-96'/>
                <p className="mt-4 text-lg text-white">Isi : </p>
                <div>
                    <Editor
                        tinymceScriptSrc={'../tinymce/tinymce.min.js'}
                        initialValue={post.body}
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
                <p className="mt-4 text-lg text-white">Dibuat Tanggal : {new Date(post.created_at).toLocaleString()}</p>
                <p className="mt-4 text-lg text-white">Dibuat Oleh : {post.user.name}</p>
                <p className="mt-4 text-lg text-white">Kampanye Terkait : </p>
                <Link href={route('kampanye.show', post.kampanye)}>
                    <button type='button' className='inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 '>
                        Selengkapnya
                    </button>
                </Link>
            </div>
        </div>
    );
}
