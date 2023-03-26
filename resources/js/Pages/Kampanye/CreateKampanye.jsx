import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NumericFormat } from 'react-number-format';
// import { addDays } from 'date-fns';

export default function Index({ auth }) {

    const [startDate] = useState(new Date());

    const { data, setData, post, processing, reset, errors, transform } = useForm({
        deskripsi: '',
        judul: '',
        target: '',
        tgl_mulai: startDate,
        tgl_berakhir: '1'
    });

    console.log(data);

    transform((data) => ({
        ...data,
        tgl_mulai: data.tgl_mulai.toISOString().slice(0, 19).replace('T', ' '),
        // target: data.target.replace(/\D/g, ''),
        // tgl_berakhir: addDays(data.tgl_mulai, data.tgl_berakhir).toISOString().slice(0, 19).replace('T', ' ')
      }))

    const submit = (e) => {
        e.preventDefault();
        post(route('kampanye.store'), { onSuccess: () => reset() });
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const handleInputNumber = (event) => {
        // let value = event.target.value.replace(/\D/g, '');

        setData(event.target.name, event.target.value);
    }

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Kampanye" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
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
                        <textarea
                            value={data.deskripsi}
                            placeholder="Masukkan Deskripsi ..."
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1"
                            onChange={e => setData('deskripsi', e.target.value)}
                            id="deskkampanye"
                        ></textarea>
                        <InputError message={errors.message} className="mt-1" />
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
                            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-l-none rounded-md shadow-sm w-80"
                            isFocused={true}
                            autoComplete="off"
                            placeholder = "Target Dana ..."
                            />
		                </div>
                        <InputError message={errors.target} className="mt-1" />
                    </div>

                    <div>
                    <InputLabel forInput="tgl_mulai" value="Tanggal Mulai Kampanye" className="mt-4" />
                        <DatePicker
                        id="tgl_mulai"
                        selected={data.tgl_mulai}
                        minDate={new Date()}
                        className='rounded max-w-sm w-96 mt-1'
                        autoComplete='off'
                        placeholderText="Pilih Tanggal"
                        startDate={data.tgl_mulai}
                        selectsStart
                        onChange={(date) => setData('tgl_mulai', date)} />
                    <InputError message={errors.tgl_mulai} className="mt-1" />

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
                            className="mt-1 w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                            isFocused={true}
                            autoComplete="off"
                            placeholder = "Lama Kampanye ..."
                            isAllowed={(values) => {
                                const { floatValue } = values;
                                return floatValue < 1000;
                              }}
                            />
                    <InputError message={errors.tgl_berakhir} className="mt-1" />
                    </div>

                    {/* jam berakhir kampanye sama dengan jam saat kampanye dibuat */}

                    <PrimaryButton className="mt-4" disabled={processing}>Buat Kampanye</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
