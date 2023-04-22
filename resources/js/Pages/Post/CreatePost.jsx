import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useState, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FileUploader } from "react-drag-drop-files";
import { Editor } from '@tinymce/tinymce-react';
import { useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import {
    Column,
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    Table,
    useReactTable,
  } from '@tanstack/react-table'

export default function Index({ auth, kampanyes }) {
    const { data, setData, post, processing, reset, errors, transform, progress } = useForm({
        body: '<p>Masukan Isi Berita.</p>',
        judul: '',
        gambar: '',
        id_kampanye: ''
    });

    console.log(data);
    console.log(kampanyes);

    const editorRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();
        post(route('post.store'), { onSuccess: () => reset() });
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const handleFilePicker = (callback, value, meta) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        input.onchange = () => {
          const file = input.files[0];

          const reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = () => {
            const id = 'blobid' + (new Date()).getTime();
            const blobCache = editorRef.current.editorUpload.blobCache;
            const base64 = reader.result.split(',')[1];
            const blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);
            callback(blobInfo.blobUri(), { title: file.name });
          };
        };

        input.click();
    };

    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!data.gambar) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(data.gambar)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [data.gambar]);

    let [isOpen, setIsOpen] = useState(false);

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Berita" />

            <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div>
                        <InputLabel forInput="judul" value="Judul Berita" />
                        <TextInput
                            placeholder = "Judul Berita ..."
                            id="judul"
                            name="judul"
                            value={data.judul}
                            className="mt-1 block w-full"
                            autoComplete="off"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <InputError message={errors.judul} className="mt-1" />
                    </div>

                    {/* Deskripsi Kampanye */}
                    <div>
                        <InputLabel
                            forInput="isiberita"
                            value="Isi Berita"
                            className="mt-4"
                        ></InputLabel>

                        <Editor
                            id='isiberita'
                            tinymceScriptSrc={'../tinymce/tinymce.min.js'}
                            onInit={(evt, editor) => editorRef.current = editor}
                            value={data.body}
                            onEditorChange={(newValue, editor) => setData('body', newValue)}
                            image_uploadtab= {true}
                            init={{
                                setup: (editor) => {
                                    editor.on('init change', () => {
                                      editor.save();
                                    });
                                  },
                            content_css: 'default',
                            height: 800,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount', 'preview', 'visualblocks'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                ' alignjustify | bullist numlist outdent indent | image | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                            image_title: true,
                            automatic_uploads: true,
                            images_upload_url: '/upload',
                            file_picker_types: 'image',
                            file_picker_callback: handleFilePicker,
                            image_dimensions: false,
                            image_class_list: [
                                {title: 'Responsive', value: 'img-responsive'}
                            ]
                            }}
                        />
                        <InputError message={errors.body} className="mt-1" />
                    </div>

                    <div>
                        <InputLabel
                        forInput="gambar"
                        value="Gambar Berita"
                        className="mt-4"
                        ></InputLabel>

                        <FileUploader
                        id='gambar'
                        handleChange={(file) => {setData('gambar', file)}}
                        name="file"
                        types={["JPG", "PNG", "JPEG"]}
                        hoverTitle=" "

                        >
                            <div className='bg-white grid place-content-center h-48 rounded-lg'>
                                <div>
                                    <p>{data.gambar ? `File ${data.gambar.name}` : `Unggah / Tarik File Kesini`}</p>
                                </div>
                            </div>
                        </FileUploader>
                        {data.gambar ? <button type='button' className='border border-white bg-slate-400' onClick={() => {reset("gambar")}}>Clear</button> : null}
                        <InputError message={errors.gambar} className="mt-1" />

                        {data.gambar &&  <img src={preview} /> }
                    </div>

                    <div>
                    <InputLabel
                        forInput="kampanye"
                        value="Kampanye"
                        className="mt-4"
                    ></InputLabel>

                    <PrimaryButton
                        type='button'
                        onClick={() => setIsOpen(true)}
                    >
                        Pilih Kampanye
                    </PrimaryButton>

                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true"/>
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Pilih Kampanye
                                </Dialog.Title>
                                {/* KONTEN */}
                                <div className="mt-2">
                                    
                                </div>

                                <div className="mt-4">
                                    <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={() => setIsOpen(false)}
                                    >
                                    Pilih
                                    </button>
                                </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            </div>
                        </div>
                        </Dialog>
                    </Transition>
                    </div>

                    <PrimaryButton className="mt-4" disabled={processing}>Buat Berita</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
