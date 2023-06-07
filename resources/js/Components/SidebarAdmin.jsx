import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Button,
    IconButton
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

    export default function SidebarAdmin({ showSideNav, setShowSideNav }) {
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
            <Button variant={route().current("adminDashboard") ? "gradient" : "text"  } color={route().current("adminDashboard") ? "blue" : "white"  }>
                Home
            </Button>
            <Button variant={route().current("adminNotifikasi") ? "gradient" : "text"  } color={route().current("adminDashboard") ? "blue" : "white"  } >
                Notifikasi
            </Button>
            <Button variant={route().current("adminMaster") ? "gradient" : "text"  } color={route().current("adminDashboard") ? "blue" : "white"  }>
                Master
            </Button>
            <Button variant={route().current("adminMaster") ? "gradient" : "text"  } color={route().current("adminDashboard") ? "blue" : "white"  }>
                Berita
            </Button>
            <Button variant={route().current("adminKonfirmKampanye") ? "gradient" : "text"  } color={route().current("adminDashboard") ? "blue" : "white"  }>
                Konfirmasi Kampanye
            </Button>
            <Button variant={route().current("adminTransaksi") ? "gradient" : "text"  } color={route().current("adminDashboard") ? "blue" : "white"  }>
                Transaksi
            </Button>
        </List>
      </Card>
    );
  }
