import DoneIcon from '@mui/icons-material/Done';

export default function imageUploader() {
	return (
		<>
			{/* <div className='h-full font-poppins font-medium flex flex-col justify-center items-center max-h-[469px] p-8 w-full max-w-[402px] rounded-xl shadow-md'>
				<h1 className='text-[18px] pb-[16px]  text-[#4F4F4F]'>
					Upload your image
				</h1>
				<span className='text-[10px] pb-[30px] text-[#828282]'>
					File should be Jpeg, Png,...
				</span>
				<div className='flex flex-col gap-9 mb-[19px] items-center justify-center max-w-[338px] w-full h-[219px] rounded-xl border-dashed border-2 border-blue-300 bg-[#F6F8FB]'>
					<img src='/image.svg' alt='Image' />
					<p className='font-poppins text-[12px] text-[#BDBDBD]'>
						Drag & Drop your image here
					</p>
				</div>
				<span className='text-[12px] text-[#BDBDBD] pb-[22px]'>Or</span>
				<button className='max-w-[101px] w-full rounded-lg h-[32px] bg-[#2F80ED] text-[12px] text-white'>
					Choose a file
				</button>
			</div> */}

			{/* <div className='flex flex-col px-8 py-9 gap-5 max-w-[400px] w-full h-[144px] rounded-xl shadow-md'>
				<h1 className='font-poppins text-[18px] font-medium text-[#4F4F4F]'>
					Uploading...
				</h1>
				<div className='max-w-[340px] w-full h-[6px] rounded-lg bg-[#F2F2F2]'>
					<div className='w-[100px] h-[6px] rounded-lg bg-[#2F80ED]'></div>
				</div>
			</div> */}

			<div className='flex flex-col justify-center items-center max-w-[400px] w-full h-[455px] px-8 py-9 rounded-xl shadow-md'>
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
			</div>
		</>
	);
}
