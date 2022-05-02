import React from "react";
import { Breadcrumb } from 'antd';

const Breadcrumbs =()=>{
    return(
        <Breadcrumb separator="">
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
    )
}
export default Breadcrumbs;