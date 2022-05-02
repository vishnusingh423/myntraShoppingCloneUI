import React from "react";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Add-ons', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ])
];
const items1 = [
    getItem('Bundles', 'sub1', <MailOutlined />, [
      getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
      getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ])
  ];

const MenuBar = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
      <div style={{display:'flex' ,flexDirection:'row'}}>

    <Menu
      onClick={onClick}
      style={{
        width: 156,
      }}
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}

    />
    <Menu
    onClick={onClick}
    style={{
      width: 156,
    }}
    defaultSelectedKeys={['2']}
    mode="inline"
    items={items1}

  />
    
    </div>


  );
};

export default () => <MenuBar />;