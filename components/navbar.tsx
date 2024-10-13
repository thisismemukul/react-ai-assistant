import React from 'react';
import { UserCircle } from 'lucide-react';
import MobileSidebar from './mobile-sidebar';

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserCircle />
      </div>
    </div>
  );
};

export default Navbar;
