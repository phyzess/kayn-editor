import React from 'react';
import basicMarkPlugin from 'plugins/kayn-basic-plugin/basicMarkPlugin';
import Button from 'components/button';
import basicMarkButtonDecorator from 'components/basicMarkButtonDecorator';
import { SUB } from 'constant/marks';

const KaynSubPlugin = ( options ) => basicMarkPlugin( 'mod+=', { type: SUB, tagName: 'sub', className: 'kayn__sub', ...options } );

@basicMarkButtonDecorator( SUB )
class KaynSubButton extends React.Component {
	render() {
		return <Button { ...this.props } />;
	}
}

export default KaynSubPlugin;

export { KaynSubButton };