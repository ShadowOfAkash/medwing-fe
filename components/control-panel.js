import React, { PureComponent } from 'react';
import {
  Card
} from 'antd';
import CustomMarker from './custom-marker';
import Form from './form';

const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
  _getAddMarkerCard = () => (
    <Card title="Click to add a marker" bordered={false} onClick={this.props.addMarker}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <CustomMarker />
      </div>
    </Card>
  )

  render() {
    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container>
        {this.props.isAddingMarker ? <Form onCancel={this.props.addMarker} /> : this._getAddMarkerCard() }
      </Container>
    );
  }
}
