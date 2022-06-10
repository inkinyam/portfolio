import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

const Layout =  () => {
  return (
    <>
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;/body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br/>
        </span>

        <span className="tags bottom-tag-html">
          &lt;/html&gt;
          <br/>
        </span>        

      </div>
    </div>
    </>
  )
}

export default Layout;