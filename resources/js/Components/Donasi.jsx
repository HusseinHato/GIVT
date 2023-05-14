import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import differenceInDays from 'date-fns/differenceInDays';
import BeritaTerkait from '@/Components/BeritaTerkait';
import { Link } from '@inertiajs/react';
import PrimaryButton from './PrimaryButton';
import { usePage } from '@inertiajs/react';


export default function donasi({ donasi }) {
    console.log(donasi);

    const { auth } = usePage().props;

    // console.log(auth);

    return (
        <div className="p-6 flex space-x-2">

        </div>
    );
}
