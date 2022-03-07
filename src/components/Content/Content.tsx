import React, { useState, useCallback } from "react";
import { Button, Modal } from "antd";
import InviteForm from "../InviteForm/InviteForm";

import "./Content.scss";

interface State {
  modalVisible: boolean;
}

function Content() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleRequestBtn = useCallback(() => {
    setModalVisible(true);
  }, []);
  const handleClose = useCallback(() => {
    setModalVisible(false);
  }, []);
  return (
    <div className="wrap">
      <div className="content">
        <div className="title">
          A better way to
          <br />
          enjoy every day.
        </div>
        <div className="sub-title">Be the first to know when we launch.</div>
        <Button onClick={handleRequestBtn}>Request an invite</Button>
        <Modal
          visible={modalVisible}
          maskClosable={false}
          footer={false}
          onCancel={handleClose}
          destroyOnClose={true}
        >
          <InviteForm onOk={handleClose} />
        </Modal>
      </div>
    </div>
  );
}

export default Content;
