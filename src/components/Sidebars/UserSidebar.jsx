import { FaHome, FaUser, FaShareAlt, FaMoneyBill, FaBell } from 'react-icons/fa';
import Sidebar from './Sidebar';

const items = [
  { label: 'Dashboard', icon: <FaHome />, to: '/dashboard' },
  { label: 'Referral', icon: <FaShareAlt />, to: '/referrals/activity' },
  {
    label: 'Payment',
    icon: <FaMoneyBill />,
    subItems: [
      { label: 'Asset', to: '/payments/asset' },
      { label: 'Deposit', to: '/payments/deposit' },
      { label: 'Withdraw', to: '/payments/withdraw' },
    ],
  },
  { label: 'Profile', icon: <FaUser />, to: '/settings' },
  { label: 'Notification', icon: <FaBell />, to: '/notifications' },
];

const UserSidebar = (props) => <Sidebar items={items} {...props} />;

export default UserSidebar;
