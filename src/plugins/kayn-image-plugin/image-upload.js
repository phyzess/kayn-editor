import React, { useState } from 'react';
import { Upload, Icon, Modal, message } from 'antd';
import getImageBase64 from '../../utils/getImageBase64';
import getImageWH from '../../utils/getImageWH';

const Dragger = Upload.Dragger;

const draggerStyle = {
	width: 300
};
const AVAIL_SIZE = 2;

const ImageUpload = ( { fileList, onChange } ) => {
	const [ previewVisible, setPreviewVisible ] = useState( false );
	const [ previewImage, setPreviewImage ] = useState( false );

	const handleBeforeUpload = ( file ) => {
		// 限制上传图片大小
		const fileSize = file.size / 1024 / 1024;
		const isOverSize = fileSize > AVAIL_SIZE;
		if ( isOverSize ) {
			message.error( `上传图片大小不能超过${ AVAIL_SIZE }M！` );
			return false;
		}
		return true;
	};

	const handleUploadChange = ( { file, fileList } ) => {
		const fileStatus = file.status;
		if ( fileStatus === 'uploading ' ) {
			// console.log( 'uploading' );
			// console.log( file );
			// console.log( 'uploading' );
		} else {
			// console.log( 'error' );
			// console.log( file );
			// console.log( 'error' );
			let base64Url;
			getImageBase64( file.originFileObj )
				.then( imageUrl => {
					base64Url = imageUrl;
					return getImageWH( imageUrl );
				} )
				.then( ( [ width, height ] ) => {
					fileList = fileList.map( fileItem => {
						if ( fileItem.uid === file.uid ) {
							fileItem.uuid = base64Url;
							fileItem.base64Url = base64Url;
						} else {
							fileItem.base64Url = fileItem.thumbUrl || fileItem.url;
						}
						fileItem.status = 'done';
						fileItem.width = width;
						fileItem.height = height;
						return fileItem;
					} );
					onChange( fileList );
				} );
		}
	};

	const handleRemove = ( file ) => {
		onChange( fileList.filter( item => item.uid !== file ) );
	};

	const handlePreview = ( file ) => {
		setPreviewImage( file.base64Url );
		setPreviewVisible( true );
	};

	const handleCancel = () => setPreviewVisible( false );

	return (
		<div style = { draggerStyle } >
			<Dragger
				style = { draggerStyle }
				multiple = { true }
				action = ''
				accept = 'image/*'
				listType = 'picture'
				fileList = { fileList }
				beforeUpload = { handleBeforeUpload }
				onChange = { handleUploadChange }
				onRemove = { handleRemove }
				onPreview = { handlePreview }
			>
				<p className = 'ant-upload-drag-icon'>
					<Icon type = 'inbox' />
				</p>
				<p className = 'ant-upload-text'>点击或拖拽图片到此区域进行上传</p>
				<p className = 'ant-upload-hint'>支持单个及批量上传</p>
			</Dragger>
			<Modal
				zIndex = { 10001 }
				visible = { previewVisible }
				footer = { null }
				onCancel = { handleCancel }
			>
				<img src = { previewImage } alt = 'example' style = { { width: '100%' } } />
			</Modal>
		</div>
	);
};

export default ImageUpload;