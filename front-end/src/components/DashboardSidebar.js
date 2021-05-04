import PropTypes from 'prop-types';
import { Box, Divider, Drawer, Hidden, List } from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  Users as UsersIcon,
} from 'react-feather';
import NavItem from './NavItem';

const items = [
  {
    id: 1111,
    href: '/',
    icon: BarChartIcon,
    title: 'HOME',
  },
  {
    id: 1112,
    href: '/competitions',
    icon: UsersIcon,
    title: 'LIST OF COMPETITIONS',
  },
  // {
  //   id: 1113,
  //   href: "/competitions/worldCupCZE",
  //   icon: ShoppingBagIcon,
  //   title: "worldCupCZE",
  // },
  // {
  //   id: 1114,
  //   href: "/competitions/worldCupCZE/menPurscuir",
  //   icon: UserIcon,
  //   title: "menPurscuir",
  // },
  // {
  //   id: 1115,
  //   href: "/competitions/worldCupCZE/womenPurscuir",
  //   icon: SettingsIcon,
  //   title: "womenPurscuir",
  // },
  // {
  //   id: 1116,
  //   href: "/competitions/worldCupCZE/menSprint",
  //   icon: ShoppingBagIcon,
  //   title: "menSprint",
  // },
  // {
  //   id: 1117,
  //   href: "/competitions/worldCupCZE/womenSprint",
  //   icon: UserIcon,
  //   title: "womenSprint",
  // },
  // {
  //   id: 1118,
  //   href: "/competitions/worldCupCZE/mixedRelay",
  //   icon: SettingsIcon,
  //   title: "mixedRelay",
  // },
  // {
  //   id: 1119,
  //   href: "/competitions/worldCupCZE/mixedRelaySingle",
  //   icon: ShoppingBagIcon,
  //   title: "mixedRelaySingle",
  // },
  // {
  //   id: 1120,
  //   href: "/competitions/worldCupSWE",
  //   icon: UserIcon,
  //   title: "worldCupSWE",
  // },
  // {
  //   id: 1121,
  //   href: "/competitions/worldCupSWE/menPurscuir",
  //   icon: SettingsIcon,
  //   title: "menPurscuir",
  // },
  // {
  //   id: 1122,
  //   href: "/competitions/worldCupSWE/womenPurscuir",
  //   icon: UserIcon,
  //   title: "womenPurscuir",
  // },
  // {
  //   id: 1123,
  //   href: "/competitions/worldCupSWE/menSprint",
  //   icon: SettingsIcon,
  //   title: "menSprint",
  // },
  // {
  //   id: 1124,
  //   href: "/competitions/worldCupSWE/womenSprint",
  //   icon: UserIcon,
  //   title: "womenSprint",
  // },
  // {
  //   id: 1125,
  //   href: "/competitions/worldCupSWE/menMassStart",
  //   icon: SettingsIcon,
  //   title: "menMassStart",
  // },
  // {
  //   id: 1126,
  //   href: "/competitions/worldCupSWE/womenMassStart",
  //   icon: UserIcon,
  //   title: "womenMassStart",
  // },
  {
    id: 1127,
    href: '/sportsmans',
    icon: SettingsIcon,
    title: 'LIST OF ATHLETS',
  },

  // {
  //   id: 1128,
  //   href: "/sportsmans/menList",
  //   icon: LockIcon,
  //   title: "menList",
  // },
  // {
  //   id: 1129,
  //   href: "/sportsmans/womenList",
  //   icon: UserPlusIcon,
  //   title: "womenList",
  // },
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.id}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor='left'
          onClose={onMobileClose}
          open={openMobile}
          variant='temporary'
          PaperProps={{
            sx: {
              width: 256,
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor='left'
          open
          variant='persistent'
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)',
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default DashboardSidebar;
