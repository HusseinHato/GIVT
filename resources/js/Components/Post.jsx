import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import differenceInDays from 'date-fns/differenceInDays';
import { Link } from '@inertiajs/react';
import Kampanye from './KampanyePreviewPost';


export default function Post({ post, show_url }) {

    console.log(post);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }


    return (
        <div className="max-w-4xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
            <div className="p-6 bg-white rounded-md shadow-lg">
                <img src={"/storage/"+post.gambar} alt="" className='w-full h-56 md:h-96 rounded-md object-fill'/>
                <h1 className="mt-4 text-6xl text-black">{post.judul}</h1>
                <p className="mt-2 text-md text-black">{new Date(post.created_at).toLocaleString("id-ID", options)}</p>
                <p className="mt-1 text-md text-black">Dibuat Oleh : {post.admin.name}</p>
                <div className='mt-4'>
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
                <p className="mt-4 text-lg text-black">Kampanye Terkait : </p>
                <Kampanye kampanye={post.kampanye} show_url={show_url}/>
            </div>
        </div>
    );
}
