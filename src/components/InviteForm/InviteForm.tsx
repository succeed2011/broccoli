import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { FormInstance } from "antd/es/form";
import InviteSuccess from "../InviteSuccess/InviteSuccess";

import "./InviteForm.scss";

interface Props {
  onOk: () => void;
}

interface State {
  showError: boolean;
  errorMsg: string;
  showSuccess: boolean;
  sending: boolean;
}

class InviteForm extends React.Component<Props, State> {
  formRef = React.createRef<FormInstance>();
  constructor(props: Props) {
    super(props);
    this.state = {
      showError: false,
      errorMsg: "",
      showSuccess: false,
      sending: false,
    };
  }
  public onFinish = (values: any) => {
    console.log(values);
  };
  public submit = () => {
    if (this.state.sending) {
      return;
    }
    this.formRef
      .current!.validateFields()
      .then((values) => {
        this.setState({
          sending: true,
          errorMsg: "",
        });
        try {
          axios
            .post(
              "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
              {
                name: values.name,
                email: values.email,
              }
            )
            .then(
              (res) => {
                this.setState({
                  showSuccess: true,
                  showError: false,
                  errorMsg: "",
                });
              },
              (err) => {
                this.setState({
                  showSuccess: false,
                  showError: true,
                  errorMsg: err.response?.data?.errorMessage || err.toString(),
                });
              }
            )
            .finally(() => {
              this.setState({
                sending: false,
              });
            });
        } catch (err) {
          //
        }
      })
      .catch(() => {
        //
      });
  };
  render() {
    const { onOk } = this.props;
    const { showSuccess, showError, errorMsg, sending } = this.state;
    return (
      <div className="form">
        {!showSuccess && (
          <>
            <header className="form-head">Request an invite</header>
            <Form
              ref={this.formRef}
              name="control-ref"
              onFinish={this.onFinish}
            >
              <Form.Item
                name="name"
                label=""
                rules={[
                  {
                    required: true,
                    message: "Please input name!",
                  },
                  {
                    min: 3,
                    message: "Full name needs to be at least 3 characters!",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder="Full name" />
              </Form.Item>
              <Form.Item
                name="email"
                label=""
                rules={[
                  {
                    required: true,
                    message: "Please input email!",
                  },
                  { type: "email", message: "Format error" },
                ]}
                hasFeedback
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="confirmEmail"
                label=""
                dependencies={["email"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm email!",
                  },
                  { type: "email", message: "Format error" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("email") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two email that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input placeholder="Confirm email" />
              </Form.Item>
            </Form>
            <Button
              className="submit-btn"
              onClick={this.submit}
              disabled={sending}
            >
              {sending ? "Sending, please wait..." : "Send"}
            </Button>
            {showError && <div className="error-msg">{errorMsg}</div>}
          </>
        )}
        {showSuccess && <InviteSuccess onOk={onOk} />}
      </div>
    );
  }
}

export default InviteForm;
