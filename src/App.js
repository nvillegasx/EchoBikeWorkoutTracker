import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import EchoBikeImage from './images/echoBike.jpg';

function App() {
  const { Header, Footer, Content  } = Layout;
  return (
    <div style={{  minHeight: "100vh"}}>
      <Layout className="layout" style={{  minHeight: "100vh"}}>
        <Header>
          <div className="logo" style={{float: "left", color: "white"}}>Echo Bike Tracker</div>
          <Menu theme="dark" mode="horizontal" style={{float: "right"}} defaultSelectedKeys={['']}>
            <Menu.Item key="1">Login</Menu.Item>
            <Menu.Item key="2">Sign Up</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">Content</div>
          <img alt="" width="75%" height="30%" src={EchoBikeImage}/>
          <p>Track your Echo Bike workouts and look at personal records.
          </p>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Nathaniel Villegas ©2020</Footer>
      </Layout>
      {/* </header> */}
    </div>
  );
}

export default App;
