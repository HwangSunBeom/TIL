import React, { useRef, useEffect, useState } from "react";
import { Button, Flex, Typography } from "antd";
import { WarningFilled, WarningOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <Flex
      gap="middle"
      vertical={false}
      style={{ background: "#cccccc" }}
    >
      <Button type="primary">가이드 출력</Button>
      <Button type="primary">가이드 출력</Button>
    </Flex>
  );
}

export default Footer;
