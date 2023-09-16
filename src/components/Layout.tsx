import Header from "./Hearder";
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;