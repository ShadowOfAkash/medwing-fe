import React, { PureComponent } from 'react';
import {
  Button
} from 'antd';

export default class CityInfo extends PureComponent {
  render() {
    const { info } = this.props;

    return (
      <div>
        <div>
          {info.comment} | <Button type="link" style={{ color: 'red' }}>Delete</Button>
        </div>
        <img width={240} src={info.image} />
      </div>
    );
  }
}
