import React, { HTMLAttributes, HTMLProps } from 'react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useState, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FileUploader } from "react-drag-drop-files";
import { Editor } from '@tinymce/tinymce-react';
import { useEffect, Fragment, useMemo, useCallback } from 'react';
import TableBerita from '@/Components/TableBerita';
import CardLink from '@/Components/CardLink';
// import { router } from '@inertiajs/react'


export default function Index({ kampanyes, berita }) {

  // const [selectedRow, setSelectedRow] = React.useState(null);

    const { data, setData, post, processing, reset, errors, transform, progress } = useForm({
        body: berita.body,
        judul: berita.judul,
        gambar: '',
        kampanye_id: '',
        _method: 'post',
    });

    console.log(data);

    // console.log(data);
    // console.log(kampanyes);

    const editorRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();
        post(route('post.update', berita));
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

    const [preview, setPreview] = useState();
    console.log(preview);

    useEffect(() => {
        if (!data.gambar) {
            setPreview(null)
            return
        }

        const objectUrl = URL.createObjectURL(data.gambar)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [data.gambar]);

    const [judulKampanye, setJudulKampanye] = useState();

    const gridRef = useRef();

    const onSelectionChanged = useCallback(() => {
        const selectedRows = gridRef.current.api.getSelectedRows();
        if(selectedRows[0]){
            setJudulKampanye(selectedRows[0].judul);
        }
    }, []);

    const onRowClicked = (e) => {
        const selectedRows = gridRef.current.api.getSelectedRows();
        if(selectedRows[0]){
            setData('kampanye_id', selectedRows[0].id);
        }
    }

    const resetSelect = () => {
        gridRef.current.api.deselectAll();
        reset('kampanye_id');
    }

    return (
        <>

            <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
                {
                    (!kampanyes.length == 0) ?
                    <>
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel forInput="gambarnow" value="Gambar Berita" />
                                <img src={"/storage/" + berita.gambar} id='gambarnow' className='w-full h-56 md:h-96 rounded-md object-fill'/>
                            </div>

                            <div>
                                <InputLabel forInput="judul" value="Judul Berita" className="mt-4"/>
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
                                    tinymceScriptSrc={'../../../tinymce/tinymce.min.js'}
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
                                            <p>{data.gambar ? `File ${data.gambar.name}` : `Klik untuk Unggah / Tarik File Kesini`}</p>
                                        </div>
                                    </div>
                                </FileUploader>
                                {data.gambar ? <button type='button' className='border border-white bg-slate-400' onClick={() => {reset('gambar')}}>Clear</button> : null}
                                <InputError message={errors.gambar} className="mt-1" />

                                {data.gambar &&  <img src={preview} className='w-full h-56 md:h-96 rounded-md object-fill'/>}
                            </div>

                            <div className='mt-4'>
                                <p className='text-black'>Kampanye Sekarang : {berita.kampanye.judul}</p>
                            </div>

                            <InputLabel
                                forInput="kampanye"
                                value="Pilih Kampanye"
                                className="mt-4"
                            ></InputLabel>

                            <div>
                                <TableBerita
                                    rowData={kampanyes}
                                    onSelectionChanged={onSelectionChanged}
                                    gridRef={gridRef}
                                    onRowClicked={onRowClicked}
                                />
                            </div>
                            <InputError message={errors.kampanye_id} className="mt-1" />

                            {data.kampanye_id &&
                                <div className='mt-4'>
                                    <p className='text-black'>Kampanye Akan diubah menjadi : {judulKampanye}</p>
                                    <PrimaryButton onClick={() => resetSelect()} type='button'>
                                        Reset Selection
                                    </PrimaryButton>
                                </div>
                            }

                            <PrimaryButton className="mt-4" disabled={processing}>Ubah Berita</PrimaryButton>
                        </form>
                    </> :
                    <>
                        <div className='text-center'>
                            <p className='text-lg text-gray-800 mb-4'>Belum Ada kampanye ...</p>
                        </div>
                    </>
                }
            </div>
        </>
    );
}
