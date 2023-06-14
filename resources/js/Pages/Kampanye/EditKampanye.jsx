import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useState, useRef, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NumericFormat } from 'react-number-format';
import { FileUploader } from "react-drag-drop-files";
import { Editor } from '@tinymce/tinymce-react';
import { useEffect } from 'react';
import Select from 'react-select'

export default function Index({ auth, kampanye }) {

    // console.log(kampanye);
    // console.log(new Date(kampanye.tgl_mulai));

    const optionsDate = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    const ButtonTglMulai = forwardRef(({ value, onClick }, ref) => (
        <button type='button' className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out duration-150" onClick={onClick} ref={ref}>
          {value}
        </button>
    ));

    const [startDate] = useState(new Date(kampanye.tgl_berakhir));

    const { data, setData, post, processing, reset, errors, transform, progress } = useForm({
        deskripsi: kampanye.deskripsi,
        judul: kampanye.judul,
        target: kampanye.target,
        // tgl_mulai: new Date(),
        tgl_berakhir: startDate,
        gambar: '',
        kategori: kampanye.kategori
    });

    // console.log(data);

    const editorRef = useRef(null);

    transform((data) => ({
        ...data,
        tgl_berakhir: data.tgl_berakhir.toISOString().slice(0, 19).replace('T', ' '),
      }))

    const submit = (e) => {
        e.preventDefault();
        post(route('kampanye.update', kampanye), { onSuccess: () => reset() });
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

    const options = [
        { value: 'Pendidikan', label: 'Pendidikan' },
        { value: 'Kemanusiaan', label: 'Kemanusiaan' }
      ]

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Kampanye" />

            <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-lg">
                <form onSubmit={submit}>

                    <div>
                        <InputLabel forInput="gambarnow" value="Gambar Sekarang" />
                        <img src={"/storage/" + kampanye.gambar} id='gambarnow' className='w-full h-56 md:h-96 rounded-md object-fill'/>
                    </div>

                    <div>
                        <InputLabel forInput="judul" value="Judul Kampanye" />
                        <TextInput
                            placeholder = "Judul Kampanye ..."
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
                            forInput="deskkampanye"
                            value="Deskripsi Singkat Kampanye"
                            className="mt-4"
                        ></InputLabel>
                        {/* <textarea
                            value={data.deskripsi}
                            placeholder="Masukkan Deskripsi ..."
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1"
                            onChange={e => setData('deskripsi', e.target.value)}
                            id="deskkampanye"
                        ></textarea> */}

                        <Editor
                            id='deskkampanye'
                            tinymceScriptSrc={'../../tinymce/tinymce.min.js'}
                            onInit={(evt, editor) => editorRef.current = editor}
                            value={data.deskripsi}
                            onEditorChange={(newValue, editor) => setData('deskripsi', newValue)}
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
                            ],
                            }}
                        />
                        <InputError message={errors.deskripsi} className="mt-1" />
                    </div>

                    <div>
                        <InputLabel forInput="target" value="Target Dana" className="mt-4"/>
                        <div className="flex flex-wrap items-stretch w-full relative mt-1">
			                <div className="flex -mr-px">
				                <span className="flex items-center leading-normal bg-white rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">Rp</span>
			                </div>
                            <NumericFormat
                            name="target"
                            id="target"
                            thousandSeparator={true}
                            valueIsNumericString={true}
                            value={data.target}
                            onValueChange={(values) => {
                                setData('target', values.value)
                            }}
                            className="focus:border-red-500 focus:ring-red-500 rounded-l-none rounded-md shadow-sm"
                            // isFocused={true}
                            autoComplete="off"
                            placeholder = "Target Dana ..."
                            />
		                </div>
                        <InputError message={errors.target} className="mt-1" />
                    </div>

                    <div>
                    <InputLabel forInput="tgl_berakhir" value="Tanggal Berakhir Kampanye" className="mt-4" />
                        <DatePicker
                        id="tgl_berakhir"
                        selected={data.tgl_berakhir}
                        minDate={new Date()}
                        className='rounded max-w-sm w-full mt-1 '
                        autoComplete='off'
                        placeholderText="Pilih Tanggal"
                        startDate={data.tgl_berakhir}
                        customInput={<ButtonTglMulai />}
                        onChange={(date) => setData('tgl_berakhir', date)}
                        popperModifiers={[
                            {
                              name: 'arrow',
                              options: {
                                padding: ({ popper, reference }) => ({
                                  right: Math.min(popper.width, reference.width) - 24,
                                }),
                              },
                            },
                          ]} />
                    <InputError message={errors.tgl_mulai} className="mt-1" />
                    </div>

                    {/* <div>
                    <InputLabel forInput="tgl_berkahir" value="Durasi Kampanye (Dalam Hari)" className="mt-4"/>
                    <NumericFormat
                            name="tgl_berakhir"
                            id="tgl_berakhir"
                            thousandSeparator={true}
                            valueIsNumericString={true}
                            value={data.tgl_berakhir}
                            onValueChange={(values) => {
                                setData('tgl_berakhir', values.value)
                            }}
                            className="mt-1 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            // isFocused={true}
                            autoComplete="off"
                            placeholder = "Lama Kampanye ..."
                            isAllowed={(values) => {
                                const { value } = values;
                                return value < 1000;
                              }}
                            />
                    <InputError message={errors.tgl_berakhir} className="mt-1" />
                    </div> */}

                    <div>
                        <InputLabel
                        forInput="kategori"
                        value="Kategori Kampanye"
                        className="mt-4"
                        ></InputLabel>

                        <Select
                        options={options}
                        isSearchable={false}
                        onChange={(e) => setData('kategori', e.value)}
                        placeholder='Pilih Kategori ...'
                        defaultValue={{ value: kampanye.kategori, label: kampanye.kategori }}
                        />

                    <InputError message={errors.kategori} className="mt-1" />
                    </div>

                    <div>
                        <InputLabel
                        forInput="gambar"
                        value="Gambar Berita"
                        className="mt-4"
                        ></InputLabel>

                        <FileUploader
                        handleChange={(file) => {setData('gambar', file)}}
                        name="file"
                        types={["JPG", "PNG", "JPEG"]}
                        hoverTitle=" "

                        >
                            <div className='bg-white grid place-content-center h-48 rounded-lg border border-red-500'>
                                <div>
                                    <p>{data.gambar ? `File ${data.gambar.name}` : `Unggah / Tarik File Kesini`}</p>
                                </div>
                            </div>
                        </FileUploader>
                        {data.gambar ? <button type='button' className='border border-white bg-slate-400' onClick={() => {reset("gambar")}}>Clear</button> : null}
                        <InputError message={errors.gambar} className="mt-1" />

                        {data.gambar &&  <img src={preview} className='w-full h-56 md:h-96 rounded-md object-fill'/> }
                    </div>

                    {/* jam berakhir kampanye sama dengan jam saat kampanye dibuat */}

                    <PrimaryButton className="mt-4" disabled={processing}>Ubah Kampanye</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
