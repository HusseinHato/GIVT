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
import { usePage } from '@inertiajs/react';
import Checkbox from '@/Components/Checkbox';

export default function Index({ auth, kampanye }) {

    const { data, setData, post, processing, reset, errors, transform, progress } = useForm({
        jumlah: '',
        nama: auth.user.name,
        doa: '',
        kampanye_id: kampanye.id
    });

    console.log(data);

    // const onHandleChange = (event) => {
    //     setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    // };

    const submit = (e) => {
        e.preventDefault();
        post(route('donasi.store'), { onSuccess: () => reset() });
    };

    const [anonim, setAnonim] = useState(false);
    console.log(anonim);

    useEffect(() => {
        if (anonim) {
            setData('nama', 'Orang Baik')
        } else {
            setData('nama', auth.user.name)
        }
    }, [anonim]);

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Donasi" />

            <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-md shadow-lg">
                <form onSubmit={submit}>

                <div>
                    <InputLabel forInput="jumlah" value="Jumlah Donasi"/>
                        <div className="flex flex-wrap items-stretch w-full relative mt-1">
			                <div className="flex -mr-px">
				                <span className="flex items-center leading-normal bg-white rounded rounded-r-none border border-r-0 border-gray-900 px-3 whitespace-no-wrap text-black text-sm">Rp</span>
			                </div>
                            <div className='grow'>
                                <NumericFormat
                                name="jumlah"
                                id="jumlah"
                                thousandSeparator={true}
                                valueIsNumericString={true}
                                value={data.jumlah}
                                onValueChange={(values) => {
                                    setData('jumlah', values.value)
                                }}
                                className="border-gray-900 focus:border-red-500 focus:ring-red-500 rounded-l-none rounded-md shadow-sm w-full"
                                // isFocused={true}
                                autoComplete="off"
                                placeholder = "Jumlah Donasi ..."
                                />
                            </div>
		                </div>
                        <InputError message={errors.jumlah} className="mt-1" />
                    </div>


                    <div>
                        <InputLabel forInput="nama" value="Nama Donatur" className="mt-4"/>
                        <p className='mt-1 text-gray-900 text-2xl'>
                            {auth.user.name}
                        </p>
                        <p className='mt-1 text-gray-900 text-sm'>
                            {auth.user.email}
                        </p>
                        <div className="block mt-3">
                            <label className="flex items-center">
                                <Checkbox name="anonim" value={data.anonim}
                                handleChange={() => {
                                    setAnonim(!anonim);
                                  }}
                                />
                                <span className="ml-2 text-lg text-gray-900">Donasi Secara Anonim</span>
                            </label>
                        </div>
                    </div>

                    <div>
                    <InputLabel
                            forInput="doa"
                            value="Doa (Opsional)"
                            className="mt-4"
                        ></InputLabel>
                        <textarea
                            value={data.doa}
                            placeholder="Masukkan Doa ..."
                            className="block w-full h-36 border-gray-300 focus:border-red-500 focus:ring focus:ring-red-400 focus:ring-opacity-50 rounded-md shadow-sm mt-1 resize-none"
                            onChange={e => setData('doa', e.target.value)}
                            id="doa"
                        ></textarea>
                        <InputError message={errors.doa} className="mt-1" />
                    </div>

                    <PrimaryButton className="mt-4" disabled={processing}>Checkout</PrimaryButton>
                </form>
            </div>

        </AuthenticatedLayout>
    );
}
