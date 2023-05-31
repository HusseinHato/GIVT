
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";

  export default function DonasiKampanye({donasi}) {

    const numberFormat = (value) =>
    new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
    }).format(value);

    return (
      <Card className="w-full mb-2">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {donasi.nama}
          </Typography>
          <Typography>
            Jumlah : {numberFormat(donasi.jumlah)}
          </Typography>
          {donasi.doa &&
            <Typography variant="h6">
                Doa : {donasi.doa}s
            </Typography>
          }
        </CardBody>
      </Card>
    );
  }
