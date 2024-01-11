import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FormEventHandler, useState } from 'react';

export default function uploadImage({
	handleImageSubmit,
	handleOnDrop,
}: {
	handleImageSubmit: FormEventHandler;
	handleOnDrop: React.DragEventHandler<HTMLLabelElement>;
}) {
	const [isDragging, setIsDragging] = useState(false);

	function handleDragOver(event: React.DragEvent<HTMLLabelElement>) {
		event.preventDefault();
		setIsDragging(true);
	}

	function handleDragLeave(event: React.DragEvent<HTMLLabelElement>) {
		event.preventDefault();
		setIsDragging(false);
	}

	return (
		<>
			<div className='h-full bg-white font-poppins font-medium flex flex-col justify-center items-center max-h-[469px] p-8 w-full max-w-[402px] rounded-xl shadow-md animation-vertical'>
				<h1 className='text-[18px] pb-[16px]  text-[#4F4F4F]'>
					Upload your image
				</h1>
				<span className='text-[10px] pb-[30px] text-[#828282]'>
					File should be Jpeg, Png,...
				</span>
				<label
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleOnDrop}
					onChange={handleImageSubmit}
					htmlFor='uploadImage'
					className='flex flex-col gap-9 mb-[19px] items-center justify-center max-w-[338px] w-full h-[219px] rounded-xl border-dashed border-2 border-blue-300 pointer-events-auto'
				>
					<div className='flex flex-col justify-content-center items-center h-fit pointer-events-none'>
						{isDragging ? (
							<div>
								<ArrowDownwardIcon className='animate-bounce pointer-events-none' />
								<input
									onChange={handleImageSubmit}
									className='hidden'
									name='image'
									type='file'
									accept='image/png, image/jpeg'
								/>
							</div>
						) : (
							<div className='flex flex-col items-center justify-center'>
								<img src='/image.svg' alt='Image' />
								<p className='font-poppins text-[12px] text-[#BDBDBD]'>
									Drag & Drop your image here
								</p>
							</div>
						)}
					</div>
				</label>

				<span className='text-[12px] text-[#BDBDBD] pb-[22px]'>Or</span>
				<label
					className='cursor-pointer max-w-[101px] w-full rounded-lg h-[32px] bg-[#2F80ED] text-[12px] flex items-center justify-center hover:bg-[#2f5eed] text-white'
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
		</>
	);
}
