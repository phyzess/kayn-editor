import React from 'react';
import Button from 'components/button';
import Icon from 'components/icon';
import TITLE from 'constant/button-title';
import getIn from 'utils/get-in';

const UNDOS = 'UNDOS';
const REDOS = 'REDOS';

const HistoryButton = ( { type, editor, ...rest } ) => {
	const data = getIn( editor, 'value.data' );
	const history = data && data.get( type.toLowerCase() );
	const disabled = history && history.size !== 0 ? false : true;

	const onClick = ( event ) => {
		switch ( type ) {
			case UNDOS:
				editor.undo();
				break;
			case REDOS:
				editor.redo();
				break;
			default:
				break;
		}
	};

	return <Button
		type = { type.toLowerCase() }
		data-title = { TITLE[ type ] }
		onClick = { onClick }
		disabled = { disabled }
		{ ...rest }
	>
		<Icon icon = { type } />
	</Button>;
};
export default HistoryButton;