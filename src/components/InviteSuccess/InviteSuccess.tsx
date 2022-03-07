import React, { useCallback } from "react";
import { Button } from "antd";

import "./InviteSuccess.scss";

interface Props {
  onOk: () => void;
}

function InviteSuccess(props: Props) {
  const { onOk } = props;

  const handleOkClick = useCallback(() => {
    onOk();
  }, []);

  return (
    <div className="invite-success">
      <header className="invite-success-head">All done!</header>
      <div className="invite-success-body">
        you will be one of the first to experience
        <br />
        BROCCOLI & CO. when we launch
      </div>
      <Button className="invite-success-ok" onClick={handleOkClick}>
        OK
      </Button>
    </div>
  );
}

export default InviteSuccess;
