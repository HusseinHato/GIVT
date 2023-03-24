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
import { addDays } from 'date-fns';

export default function Index({ auth }) {

    const [startDate] = useState(new Date());

    const { data, setData, post, processing, reset, errors, transform } = useForm({
        deskripsi: '',
        judul: '',
        target: '',
        tgl_mulai: startDate,
        tgl_berakhir: 1
    });

    transform((data) => ({
        ...data,
        tgl_mulai: data.tgl_mulai.toISOString().slice(0, 19).replace('T', ' '),
        tgl_berakhir: addDays(data.tgl_mulai, data.tgl_berakhir).toISOString().slice(0, 19).replace('T', ' ')
      }))

    const submit = (e) => {
        e.preventDefault();
        post(route('kampanye.store'), { onSuccess: () => reset() });
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const handleHari = (event) => {
        let value = event.target.value
        value = Math.max(1, Math.min(300, Number(event.target.value)))

        setData('tgl_berakhir', value);
    }

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Kampanye" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div>
                        <InputLabel forInput="judul" value="Judul Kampanye" />
                        <TextInput
                            id="judul"
                            name="judul"
                            value={data.judul}
                            className="mt-1 mb-4 block w-full"
                            autoComplete="judul"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                        <InputError message={errors.judul} className="mt-2" />
                    </div>

                    {/* Deskripsi Kampanye */}
                    <div>
                        <InputLabel
                            forInput="deskkampanye"
                            value="Deskripsi Singkat Kampanye"
                        ></InputLabel>
                        <textarea
                            value={data.deskripsi}
                            placeholder="Masukkan Deskripsi ..."
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 mb-4"
                            onChange={e => setData('deskripsi', e.target.value)}
                            id="deskkampanye"
                        ></textarea>
                        <InputError message={errors.message} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel forInput="target" value="Target Dana" />
                        <TextInput
                            id="target"
                            name="target"
                            value={data.target}
                            className="mt-1 block w-full mb-4"
                            autoComplete="target"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                        <InputError message={errors.target} className="mt-2" />
                    </div>

                    <div>
                    <InputLabel forInput="tgl_mulai" value="Tanggal Mulai Kampanye" />
                        <DatePicker
                        id="tgl_mulai"
                        selected={data.tgl_mulai}
                        minDate={new Date()}
                        className='rounded max-w-sm w-full mt-1 mb-4'
                        autoComplete='off'
                        placeholderText="Pilih Tanggal"
                        startDate={data.tgl_mulai}
                        selectsStart
                        onChange={(date) => setData('tgl_mulai', date)} />
                    <InputError message={errors.tgl_mulai} className="mt-2" />

                    <InputLabel forInput="tgl_berkahir" value="Durasi Kampanye (Dalam Hari)" />
                    <TextInput
                            id="tgl_berakhir"
                            name="tgl_berakhir"
                            value={data.tgl_berakhir}
                            className="mt-1 mb-4 block w-full"
                            type="number"
                            autoComplete="off"
                            isFocused={true}
                            handleChange={handleHari}
                            required
                        />
                    <InputError message={errors.tgl_berakhir} className="mt-2" />
                    </div>

                    {/* jam berakhir kampanye sama dengan jam saat kampanye dibuat */}

                    <PrimaryButton className="mt-4" disabled={processing}>Buat Kampanye</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
