import React from 'react';
import { Link } from '@inertiajs/react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
// import { Editor } from '@tinymce/tinymce-react';


export default function PostPreview({ post }) {

    // console.log(new Date(post.created_at).toLocaleString());

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    return (
        // <div className="flex flex-col justify-center">
        // <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
        //     <div className="w-full md:w-1/3 bg-white grid place-items-center">
        //         <img src={"/storage/"+post.gambar} alt="gambar" className="rounded-xl" />
        //     </div>
        //         <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        //             <h3 className="font-black text-gray-800 md:text-3xl text-xl">{post.judul}</h3>
        //             <p className="md:text-lg text-gray-500 text-base">{post.excerpt}</p>
        //             <p className="text-xl font-black text-gray-800">
        //             Tanggal Dibuat : {new Date(post.created_at).toLocaleString()}
        //             </p>
        //             <Link href={post.show_url}>
        //                 <button type='button' className='inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 '>
        //                     Selengkapnya
        //                 </button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>

        <div className="container mx-auto">
            <div style={{ backgroundColor: 'rgb(245 245 245)' }} className='rounded-md'>
                <div className="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-2 lg:space-y-0 rounded-md">
                    <div className="">
                        <img className="h-52 lg:min-w-full w-96 lg:h-48 rounded-md" src={"/storage/"+post.gambar} alt="Featured Photo"></img>
                    </div>
                    <div className="sm:col-span-2">
                        <div className="p-4">
                            <h4 className="text-2xl leading-6 font-bold font-sans">{post.judul}</h4>
                            <p className="mt-4 text-md font-normal text-skin-base leading-5">
                                {post.excerpt}
                            </p>
                            <p className="mt-4 text-sm font-normal text-skin-base leading-5">
                            {new Date(post.created_at).toLocaleString("id-ID", options)}
                            </p>
                            <Link href={post.show_url}>
                                <button type='button' className='inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 '>
                                    Selengkapnya
                                </button>
                            </Link>
                            <Link href={post.edit_url}>
                                <button type='button' className='inline-block rounded bg-yellow-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black hover:bg-yellow-800 focus:ring focus:ring-yellow-900 ms-2'>
                                    Edit
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


