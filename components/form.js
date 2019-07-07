import React, { PureComponent } from 'react';
import {
  Button,
  Form,
  Icon,
  Input,
  Upload
} from 'antd';

export default class InputForm extends PureComponent {
  render() {

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          <Input placeholder="Enter your comment" />
        </Form.Item>
          <Form.Item>
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
          <Button style={{marginLeft: 5}} type="default" onClick={this.props.onCancel}>Cancel</Button>
        </Form.Item>
      </Form>
    );
  }
}
