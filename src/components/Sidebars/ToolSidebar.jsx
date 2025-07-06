import { FaSearch, FaBullseye } from 'react-icons/fa';
import Sidebar from './Sidebar';

const items = [
  {
    label: 'Screener',
    icon: <FaSearch />,
    subItems: [
      { label: 'Web Version', to: '/screener/web' },
      { label: 'Templates', to: '/screener/templates' },
      { label: 'Screeners', to: '/screener/screeners' },
      { label: 'Notification Templates', to: '/screener/notifications' },
    ],
  },
  { label: 'Scanner', icon: <FaBullseye />, to: '/scanner' },
];

const ToolSidebar = (props) => <Sidebar items={items} {...props} />;

export default ToolSidebar;
