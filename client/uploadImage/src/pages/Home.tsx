import { useState, ChangeEvent } from 'react';
import axios from 'axios';

// Components
import Uploaded from '../components/Uploaded';
import Loading from '../components/Loading';
import UploadImage from '../components/uploadImage';

export default function Home() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isUploaded, setIsUploaded] = useState<boolean>(false);
	const [image, setImage] = useState<string | null>(null);
	const [imageAPI, setImageAPI] = useState<string | null>(null);

	const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000"
	const CLIENT_URL = process.env.REACT_APP_CLIENT_URL || "http://localhost:5173"

	async function handleImageSubmit(event: ChangeEvent<HTMLInputElement>) {
		event.preventDefault();

		if (!event.target.files || !event.target.files[0]) {
			alert(
				'ERROR UPLOADING YOUR IMAGE. \nPlease upload one image in format jpeg or png',
			);
			return;
		}
		// API POST
		const formData = new FormData();
		const file = event.target.files[0];
		formData.append('image', file);
		setIsLoading(true);
		axios
			.post('http://localhost:3000/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((response) => {
				setIsLoading(false);
				setIsUploaded(true);
				setImage(URL.createObjectURL(file));
				setImageAPI(response.data.url);
			})
			.catch((error) => {
				setIsLoading(false);
				console.error('Error:', error);
			});
	}

	async function handleOnDrop(event: React.DragEvent<HTMLLabelElement>) {
		event.preventDefault();
		if (!event.dataTransfer.files) {
			alert(
				'ERROR UPLOADING YOUR IMAGE. \nPlease upload one image in format jpeg or png',
			);
			return;
		}
		// API POST
		const file = event.dataTransfer.files[0];
		console.log(file)
		const formData = new FormData();
		formData.append('image', file);
		setIsLoading(true);
		axios
			.post('http://localhost:3000/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((response) => {
				setIsLoading(false);
				setIsUploaded(true);
				setImage(URL.createObjectURL(file));
				setImageAPI(response.data.profile_url);
			})
			.catch((error) => {
				setIsLoading(false);
				console.error('Error:', error);
			});
	}

	const handleReset = () => {
		setIsUploaded(false)
	}

	return (
		<>
			<div className='w-full h-screen flex justify-center items-center bg-slate-500'>
				{!isLoading && !isUploaded ? (
					<UploadImage handleImageSubmit={handleImageSubmit} handleOnDrop={handleOnDrop} />
				) : (
					''
				)}
				{isLoading ? <Loading /> : ''}
				{isUploaded ? (
					<Uploaded
						localURL={image != null ? image : ''}
						imageAPIURL={imageAPI != null ? imageAPI : ''}
						handleReset={handleReset}
					/>
				) : (
					''
				)}
			</div>
		</>
	);
}