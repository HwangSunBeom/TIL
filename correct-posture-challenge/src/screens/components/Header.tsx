import React, { useRef, useEffect, useState } from "react";
import { Flex, Typography } from "antd";
import { WarningFilled, WarningOutlined } from "@ant-design/icons";

function Header(props:any) {
    return (
    <div
      style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        background: '#cccccc',
        padding: '10px',
        paddingLeft: '300px',
        paddingRight: '300px'
      }}
    >
      <Typography.Title level={2} style={{ color: "white", margin: 0 }}>
        바른 자세 챌린지
      </Typography.Title>
      {props.isError ? <WarningFilled style={{fontSize:40, color:'red'}} /> :
      <WarningOutlined style={{fontSize:40}} />}
    </div>
  );
}

export default Header;
