import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Button,
    IconButton,
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
  import { XMarkIcon } from "@heroicons/react/24/outline";
  import React from "react";
  import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
  import { Link, useRemember, router } from "@inertiajs/react";


    export default function SidebarAdmin({ showSideNav, setShowSideNav }) {

        const handleLogout = () => {
            router.post(route('admin.logout'));
          };

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
      <Card className={`
        ${showSideNav ? "translate-x-0" : "-translate-x-80"} fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl shadow-xl transition-transform duration-300 xl:translate-x-0 shadow-blue-gray-900/5 bg-gradient-to-br from-blue-gray-800 to-blue-gray-900`}>
        <div className="mb-2 p-4">
          <Typography variant="h5" color="white">
            Admin
          </Typography>
        </div>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={setShowSideNav}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
        <List className="space-y-2">
            <Link href={route("adminDashboard")} className="flex">
                <Button variant={route().current("adminDashboard") ? "gradient" : "text"  } color={route().current("adminDashboard") ? "blue" : "white"  } className="grow">
                    Home
                </Button>
            </Link>
            {/* <Button variant={route().current("adminNotifikasi") ? "gradient" : "text"  } color={route().current("adminDashboard") ? "blue" : "white"  } >
                Notifikasi
            </Button> */}
            <Link href={route("admin.kampanye.index")} className="flex">
                <Button variant={route().current("admin.kampanye.index") ? "gradient" : "text"  } color={route().current("admin.kampanye.index") ? "blue" : "white"} className="grow">
                    Kampanye
                </Button>
            </Link>
            {/* <Button variant={route().current("adminMaster") ? "gradient" : "text"  } color={route().current("adminDashboard") ? "blue" : "white"  }>
                Berita
            </Button> */}
            <Accordion
            open={open === 1}
            icon={
                <ChevronDownIcon
                strokeWidth={2.5}
                color="white"
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                />
            }
            >
            <ListItem className="p-0 bg-blue-gray-700 active:bg-blue-gray-700 hover:bg-blue-gray-700" selected={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                <Typography color="white" className="mr-auto font-normal">
                    Berita
                </Typography>
                {/* <Button variant={route().current("post.index") || route().current("post.create") ? "gradient" : "text"  } color={route().current("post.index") || route().current("post.create") ? "blue" : "white"  } className="grow">
                        Berita
                </Button> */}
                </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
                <List className="p-0">
                    <Link href={route("post.index")} className="flex">
                        <Button variant={route().current("post.index") ? "gradient" : "text"  } color={route().current("post.index") ? "blue" : "white"  } className="grow">
                            Index Berita
                        </Button>
                    </Link>
                    <Link href={route("post.create")} className="flex">
                        <Button variant={route().current("post.create") ? "gradient" : "text"  } color={route().current("post.create") ? "blue" : "white"  } className="grow">
                            Buat Berita
                        </Button>
                    </Link>
                </List>
            </AccordionBody>
            </Accordion>
            {/* <Button variant={route().current("adminKonfirmKampanye") ? "gradient" : "text"  } color={route().current("adminKonfirmKampanye") ? "blue" : "white"  }>
                Konfirmasi Kampanye
            </Button> */}
            <Link href={route("admin.donasi.index")} className="flex">
                <Button variant={route().current("adminTransaksi") ? "gradient" : "text"  } color={route().current("adminTransaksi") ? "blue" : "white"  } className="grow">
                    Transaksi
                </Button>
            </Link>
            <div className="flex">
                <Button onClick={handleLogout} variant={"gradient"} color="white" className="grow">
                    Logout
                </Button>
            </div>
        </List>
      </Card>
    );
  }
