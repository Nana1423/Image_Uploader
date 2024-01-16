import DoneIcon from '@mui/icons-material/Done';
import { MouseEventHandler, useEffect, useState } from 'react';

export default function Uploaded({
	localURL,
	imageAPIURL,
	handleReset,
}: {
	localURL: string;
	imageAPIURL: string;
	handleReset: MouseEventHandler;
}) {
	const [id, setId] = useState<string | null>(null);

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText('https://image-uploader-lyart.vercel.app/image/' + id);
	};

	useEffect(() => {
		const id = imageAPIURL.split('/').pop();
		if (id) {
			setId(id);
		}
	}, []);

	return (
		<>
			<div className='flex bg-white flex-col justify-center items-center max-w-[400px] w-full h-[455px] px-8 py-9 rounded-xl shadow-md animation-slide'>
				<div className='h-fit rounded-full flex justify-center bg-[#219653]'>
					<DoneIcon className=' text-white' />
				</div>
				<h1 className='pt-[7.5px] font-poppins text-[18px] font-medium text-[#4F4F4F]'>
					Uploaded Successfully!
				</h1>
				<div className='my-[25px] w-full h-[225px] flex items-center justify-center'>
					<img className='h-full rounded-xl' src={localURL} alt='Image' />
				</div>
				<div className='flex justify-between items-center w-full max-w-[338px] p-[2px] pl-2 h-[36px] bg-[#F6F8FB] border border-[#E0E0E0] rounded-lg font-poppins font-medium'>
					<p className='text-[8px] text-[#4F4F4F] pr-4 truncate '>
						{'https://image-uploader-lyart.vercel.app/image/' + id}
					</p>
					<button
						onClick={handleCopyToClipboard}
						className='w-fit h-full bg-[#2F80ED] hover:bg-[#2f5eed] text-nowrap text-white text-[8px] py-2 px-4 rounded-lg'
					>
						Copy Link
					</button>
				</div>
				<button
					onClick={handleReset}
					className='w-fit h-full mt-2 bg-[#2F80ED] hover:bg-[#2f5eed]  text-nowrap text-white text-[12px] py-2 px-4 rounded-lg'
				>
					{' '}
					Submit another image
				</button>
			</div>
		</>
	);
}
