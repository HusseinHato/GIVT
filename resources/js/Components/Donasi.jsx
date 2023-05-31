import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import differenceInDays from 'date-fns/differenceInDays';
import { Link } from '@inertiajs/react';
import PrimaryButton from './PrimaryButton';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import Kampanye from './KampanyePreviewPost';


export default function Donasi({ donasi, kampanye, show_url }) {
    console.log(donasi);

    // const { auth } = usePage().props;

    // console.log(auth);

    useEffect(() => {
        // You can also change below url value to any script url you wish to load,
        // for example this is snap.js for Sandbox Env (Note: remove `.sandbox` from url if you want to use production version)
        const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';

        let scriptTag = document.createElement('script');
        scriptTag.src = midtransScriptUrl;

        // Optional: set script attribute, for example snap.js have data-client-key attribute
        // (change the value according to your client-key)
        const myMidtransClientKey = 'SB-Mid-client-irk0fOcXAPUjH88H';
        scriptTag.setAttribute('data-client-key', myMidtransClientKey);

        document.body.appendChild(scriptTag);

        return () => {
          document.body.removeChild(scriptTag);
        }
      }, []);

      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    //   console.log(snap);

    return (
        <div class="max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
            <div className="p-6 space-y-2 bg-white rounded-md">
                <p className='text-md text-black'>Kampanye Terkait : </p>
                <Kampanye kampanye={kampanye} show_url={show_url}/>
                <p className='text-md text-black'>Nama : {donasi.nama}</p>
                <p className='text-md text-black'>Jumlah Donasi : {donasi.jumlah}</p>
                <p className='text-md text-black'>Status : {donasi.status}</p>
                <p className='text-md text-black'>Tanggal Pemesanan : {new Date(donasi.created_at).toLocaleString("id-ID", options)}, {new Date(donasi.created_at).toLocaleTimeString("id-ID")}</p>
                {donasi.status === "Paid" &&
                    <p className='text-md text-black'>Tanggal Pembayaran : {new Date(donasi.updated_at).toLocaleString("id-ID", options)}, {new Date(donasi.updated_at).toLocaleTimeString("id-ID")}</p>
                }
                {donasi.doa &&
                    <p className='text-md text-black'>Doa : {donasi.doa}</p>
                }
                <PrimaryButton type='button'
                onClick={() => snap.pay(donasi.snaptoken, {
                    onSuccess: function(result){
                    /* You may add your own implementation here */
                    alert("payment success!"); console.log(result);
                    },
                    onPending: function(result){
                    /* You may add your own implementation here */
                    alert("wating your payment!"); console.log(result);
                    },
                    onError: function(result){
                    /* You may add your own implementation here */
                    alert("payment failed!"); console.log(result);
                    },
                    onClose: function(){
                    /* You may add your own implementation here */
                    alert('you closed the popup without finishing the payment');
                    }
                })}
                >
                    Bayar Sekarang
                </PrimaryButton>
            </div>
        </div>
    );
}
