import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import StatisticsCard from "@/Components/StatisticCard";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

function Dashboard({ jmlhuser, jmlhkamp, totaldonasi, userFreq, userMost }) {

    console.log(userFreq);
    console.log(userMost);

    const numberFormat = (value) =>
    new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
}).format(value);

  return (
    <>
        <Head title="Home" />

        <div className="mt-12">
            <div className="mb-12 grid gap-y-10 gap-x-6 lg:grid-cols-2 xl:grid-cols-3">
                <StatisticsCard
                    color={"blue"}
                    icon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                        <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
                        <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                    </svg>
                  }
                    title={"Total Donasi"}
                    value={numberFormat(totaldonasi)}
                />

                <StatisticsCard
                    color={"pink"}
                    icon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>
                  }
                    title={"Jumlah User"}
                    value={jmlhuser}
                />

                <StatisticsCard
                    color={"green"}
                    icon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                        </svg>
                    </svg>
                  }
                    title={"Jumlah Kampanye"}
                    value={jmlhkamp}
                />

            </div>

            <div className="mb-4 grid grid-cols-1 gap-6">
                <Card className="overflow-hidden xl:col-span-2">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 flex items-center justify-between p-6"
                    >
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Top 5 User Dengan Frekuensi Donasi Tertinggi
                            </Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                        <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                            {["Nama", "Frekuensi"].map(
                                (el) => (
                                <th
                                    key={el}
                                    className="border-b border-blue-gray-50 py-3 px-6 text-left"
                                >
                                    <Typography
                                    variant="small"
                                    className="text-[11px] font-medium uppercase text-blue-gray-400"
                                    >
                                    {el}
                                    </Typography>
                                </th>
                                )
                            )}
                            </tr>
                        </thead>
                        <tbody>
                            {userFreq.map(
                            ({ name,  donasis_count}, key) => {
                                const className = `py-3 px-5 ${
                                key === userFreq.length - 1
                                    ? ""
                                    : "border-b border-blue-gray-50"
                                }`;

                                return (
                                <tr key={name}>
                                    <td className={className}>
                                    <div className="flex items-center gap-4">
                                        <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-bold"
                                        >
                                        {name}
                                        </Typography>
                                    </div>
                                    </td>
                                    <td className={className}>
                                    <Typography
                                        variant="small"
                                        className="text-xs font-medium text-blue-gray-600"
                                    >
                                        {donasis_count}
                                    </Typography>
                                    </td>
                                </tr>
                                );
                            }
                            )}
                        </tbody>
                        </table>
                    </CardBody>
                </Card>
            </div>

            <div className="mb-4 grid grid-cols-1 gap-6">
                <Card className="overflow-hidden xl:col-span-2">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 flex items-center justify-between p-6"
                    >
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Top 5 User Dengan Jumlah Donasi Tertinggi
                            </Typography>
                        </div>
                    </CardHeader>
                    <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                        <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                            {["Nama", "Jumlah"].map(
                                (el) => (
                                <th
                                    key={el}
                                    className="border-b border-blue-gray-50 py-3 px-6 text-left"
                                >
                                    <Typography
                                    variant="small"
                                    className="text-[11px] font-medium uppercase text-blue-gray-400"
                                    >
                                    {el}
                                    </Typography>
                                </th>
                                )
                            )}
                            </tr>
                        </thead>
                        <tbody>
                            {userMost.map(
                            ({ name,  donasis_sum_jumlah}, key) => {
                                const className = `py-3 px-5 ${
                                key === userMost.length - 1
                                    ? ""
                                    : "border-b border-blue-gray-50"
                                }`;

                                return (
                                <tr key={name}>
                                    <td className={className}>
                                    <div className="flex items-center gap-4">
                                        <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-bold"
                                        >
                                        {name}
                                        </Typography>
                                    </div>
                                    </td>
                                    <td className={className}>
                                    <Typography
                                        variant="small"
                                        className="text-xs font-medium text-blue-gray-600"
                                    >
                                        {donasis_sum_jumlah ? numberFormat(donasis_sum_jumlah) : numberFormat(0)}
                                    </Typography>
                                    </td>
                                </tr>
                                );
                            }
                            )}
                        </tbody>
                        </table>
                    </CardBody>
                </Card>
            </div>
        </div>
    </>
  );
}

Dashboard.layout = page => <AdminLayout children={page} />

export default Dashboard;
