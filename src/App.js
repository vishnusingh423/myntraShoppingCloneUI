import React from "react";

import "./App.css";
import { Layout, Checkbox ,Divider,Radio,Select, Button} from "antd";
import Headers from "./components/Headers/Headers";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Contents from "./components/Contents/Contents";
import MenuBar from "./components/MenuBar/MenuBar"

const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
const App = () => {

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          backgroundColor: "#FEFFFE",
        }}
      >
        <Headers />
      </Header>
      <Header
        style={{
          width: "100%",
          height: 122,
          backgroundColor: "white",
          paddingTop: 69,
          paddingLeft: 32,
        }}
      >
        <Breadcrumbs />
      </Header>
      <Layout >
        <Sider style={{ backgroundColor: "white" }}>
        <h2 style={{ fontWeight:'bold',paddingLeft:33,fontSize:15 }}>FILTERS</h2>

          <div style={{border :'0.5px solid #ECEAEF' }}>
            <div style={{paddingLeft:33}}> 
            <div>
            <Radio>Men</Radio>
              <div>
              <Radio>Women</Radio>

              </div>

              <div>
              <Radio>Boys</Radio>

              </div>
              <div>
              <Radio>Girls</Radio>

              </div>
            </div>
            </div>

            <Divider style={{border :'0.5px solid #ECEAEF'}}/>
            <div style={{paddingLeft:33}}> 

            <div >
              <h1 style={{fontWeight:'bold'}}> Brands </h1>

            <div>
                <Checkbox onChange={onChange}>Women</Checkbox>
              </div>

              <div>
                <Checkbox onChange={onChange}>Boys</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Girls</Checkbox>
              </div>
            </div>
            </div>

            <Divider style={{border :'0.5px solid #ECEAEF'}}/>
            <div style={{paddingLeft:33}}> 
              
            <div>
            <h1 style={{fontWeight:'bold'}}> Price </h1>

            <div>
                <Checkbox onChange={onChange}>Women</Checkbox>
              </div>

              <div>
                <Checkbox onChange={onChange}>Boys</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Girls</Checkbox>
              </div>
            </div>
            </div>

            <Divider style={{border :'0.5px solid #ECEAEF'}}/>
            <div style={{paddingLeft:33}}> 

            <div>
            <h1 style={{fontWeight:'bold'}}> Colors </h1>

            <div>
                <Checkbox onChange={onChange}>Women</Checkbox>
              </div>

              <div>
                <Checkbox onChange={onChange}>Boys</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Girls</Checkbox>
              </div>
            </div>
            <Divider style={{border :'0.5px solid #ECEAEF'}}/>
            </div>
            <div style={{paddingLeft:33}}> 

            <div>
            <h1 style={{fontWeight:'bold'}}> Discount Range </h1>

            <div>
                <Checkbox onChange={onChange}>Women</Checkbox>
              </div>

              <div>
                <Checkbox onChange={onChange}>Boys</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Girls</Checkbox>
              </div>
            </div>
          </div>
          </div>

        </Sider>
          
        <Content style={{ backgroundColor: "white" }}>
          <div style={{display:"flex" , justifyContent:"space-between" ,paddingRight:22}}>
            <div style={{}}> <MenuBar></MenuBar></div>
            <div>

            <Select  defaultValue="SortBy" style={{ width: 220 }} onChange={handleChange}>
      <Option value="jack">Price : High To Low</Option>
      <Option value="lucy">Price : Low To High</Option>
      <Option value="" >
        Better Discount
      </Option>
      <Option value="Yiminghe">Customer Rating</Option>
    </Select>
            </div>
          </div>
          <Contents></Contents>
        </Content>
      </Layout>
      <Footer>Footer


      </Footer>
    </Layout>
  );
};

export default App;
