import { useState, ChangeEvent } from 'react';
import axios from 'axios';

// Components
import ImageUploader from './components/imageUploader';
import Loading from './components/Loading';
import Uploaded from './components/Uploaded';

function App() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isUploaded, setIsUploaded] = useState<boolean>(false);
	const [image, setImage] = useState<string | null>(null);
	const [imageAPI, setImageAPI] = useState<string | null>(null);

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
		formData.append('profile', file);
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
					<ImageUploader handleImageSubmit={handleImageSubmit} />
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

export default App;
