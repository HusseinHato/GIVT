import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert
} from "@material-tailwind/react";
// import { Link } from "@inertiajs/react";
import { Head, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState, Fragment } from 'react';
import InputError from '@/Components/InputError';

export default function SignIn() {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    // console.log(data);

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('adminLoginPost'));
    };

    const [open, setOpen] = useState(true);

    // console.log(status);

    const { flash } = usePage().props

    // console.log(flash);

  return (
    <>
    <Head title="Login" />

      <div className="absolute inset-0 z-0 h-full w-full bg-black/20" />
      <div className="container mx-auto p-4">
                {flash.message &&
                    <Fragment>
                        <Alert open={open} onClose={() => setOpen(false)} color="red">
                            {flash.message}
                        </Alert>
                    </Fragment>
                }
        <form>
            <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
            <CardHeader
                variant="gradient"
                color="blue"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h3" color="white">
                Admin Log In
                </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
                <Input onChange={(e) => onHandleChange(e)} className="focus:ring-0" type="email" label="Email" size="lg" name="email"/>
                <InputError message={errors.email} className="mt-2" />
                <Input onChange={(e) => onHandleChange(e)} className="focus:ring-0" type="password" label="Password" size="lg" name="password"/>
                <InputError message={errors.password} className="mt-2" />
            </CardBody>
            <CardFooter className="pt-0">
                <Button type="submit" onClick={(e) => submit(e)} variant="gradient" fullWidth>
                Log In
                </Button>
            </CardFooter>
            </Card>
        </form>
      </div>
    </>
  );
}
