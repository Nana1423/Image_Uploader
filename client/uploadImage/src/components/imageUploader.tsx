//import DoneIcon from '@mui/icons-material/Done';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ChangeEvent, useState } from 'react';

export default function imageUploader() {
	const [isDragging, setIsDragging] = useState(false);

	function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();
		setIsDragging(true);
	}

	function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();
		setIsDragging(false);
	}

	function handleOnDrop(event: React.DragEvent<HTMLDivElement>) {
		event.preventDefault();
		setIsDragging(false);
	}

	async function handleImageSubmit(event: ChangeEvent<HTMLInputElement>) {
		event.preventDefault();

		if (!event.target.files || !event.target.files[0]) {
			alert(
				'ERROR UPLOADING YOUR IMAGE. \nPlease upload one image in format jpeg or png',
			);
			return;
		}

		const file: File = event.target.files[0];
		//const imageURL: string = URL.createObjectURL(file);

		// API POST
		try {
			await uploadFile('/upload', file);
			await fetch('/api')
		  } catch (error) {
			console.error('Error:', error);
		  }
	}

	async function uploadFile(url: string, file: File) {
		const formData = new FormData();
		formData.append('file', file);

		const response = await fetch(url, {
			method: 'POST',
			body: formData,
		});

		if (!response.ok) {
			throw new Error('Failed to upload file');
		}

		return response.json();
	}

	// async function handleClick() {
	// 	fetch('/api').then((response) => response.json());
	// }

	return (
		<>
			<div className='h-full bg-white font-poppins font-medium flex flex-col justify-center items-center max-h-[469px] p-8 w-full max-w-[402px] rounded-xl shadow-md'>
				<h1 className='text-[18px] pb-[16px]  text-[#4F4F4F]'>
					Upload your image
				</h1>
				<span className='text-[10px] pb-[30px] text-[#828282]'>
					File should be Jpeg, Png,...
				</span>
				<div
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleOnDrop}
					onChange={handleImageSubmit}
					className='flex flex-col gap-9 mb-[19px] items-center justify-center max-w-[338px] w-full h-[219px] rounded-xl border-dashed border-2 border-blue-300'
				>
					{isDragging ? (
						<div className='flex flex-col justify-content-center items-center h-fit pointer-events-none'>
							<p className='font-poppins text-[20px]'>Drag here</p>
							<ArrowDownwardIcon className='animate-bounce' />
						</div>
					) : (
						<div className='flex flex-col justify-content-center items-center h-fit pointer-events-none'>
							<img src='/image.svg' alt='Image' />
							<p className='font-poppins text-[12px] text-[#BDBDBD]'>
								Drag & Drop your image here
							</p>
						</div>
					)}
				</div>

				<span className='text-[12px] text-[#BDBDBD] pb-[22px]'>Or</span>
				<label
					className='cursor-pointer max-w-[101px] w-full rounded-lg h-[32px] bg-[#2F80ED] text-[12px] flex items-center justify-center text-white'
					htmlFor='uploadImage'
				>
					Submit
				</label>
				<input
					onChange={handleImageSubmit}
					className='hidden'
					id='uploadImage'
					name='image'
					type='file'
					accept='image/png, image/jpeg'
				/>
			</div>

			{/* <div className='flex bg-white flex-col justify-center items-center max-w-[400px] w-full h-[455px] px-8 py-9 rounded-xl shadow-md'>
				<div className='relative w-[42px] h-[42px] rounded-full bg-[#219653]'>
					<DoneIcon className='absolute right-[5px] top-[5px] text-white' />
				</div>
				<h1 className='pt-[7.5px] font-poppins text-[18px] font-medium text-[#4F4F4F]'>
					Uploaded Successfully!
				</h1>
				<div className='my-[25px] w-full h-[225px] rounded-xl bg-black'></div>
				<div className='flex justify-between items-center w-full max-w-[338px] p-[2px] pl-2 h-[34px] bg-[#F6F8FB] border border-[#E0E0E0] rounded-lg font-poppins font-medium'>
					<p className='text-[8px] text-[#4F4F4F] pr-4 truncate '>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Dignissimos repellendus quaerat pariatur vel at quasi nobis esse
						dolorem officia non quis molestiae doloribus iusto, labore ipsam
						dolores nihil culpa vitae.
					</p>
					<button className='w-[74px] h-full bg-[#2F80ED] text-nowrap text-white text-[8px] py-2 px-4 rounded-lg'>
						Copy Link
					</button>
				</div>
			</div> */}
		</>
	);
}
