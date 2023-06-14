import { Link } from "@inertiajs/react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    CardHeader
  } from "@material-tailwind/react";
  import PrimaryButton from "./PrimaryButton";

  export default function CardBeritaHome({ post }) {

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    return (
      <Card className="mt-6 w-96">
        <CardHeader color="deep-orange">
            <img className="h-48 w-full rounded-md" src={"/storage/"+post.gambar} alt="Featured Photo"></img>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {post.judul}
          </Typography>
          <Typography>
            {post.excerpt}
          </Typography>
          <Typography>
            {new Date(post.created_at).toLocaleString("id-ID", options)}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Link href={post.show_url}>
            {/* <button type='button' className='inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-blue-700 focus:ring focus:ring-blue-300 '>
                Selengkapnya
            </button> */}
            <PrimaryButton className='mt-2'>
                Selengkapnya
            </PrimaryButton>
        </Link>
        </CardFooter>
      </Card>
    );
  }
