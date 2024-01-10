
export default function Loading() {
	return (
		<>
			<div className='flex bg-white flex-col px-8 py-9 gap-5 max-w-[400px] w-full h-[144px] rounded-xl shadow-md animation-slide'>
				<h1 className='font-poppins text-[18px] font-medium text-[#4F4F4F]'>
					Uploading...
				</h1>
				<div className='relative overflow-hidden max-w-[340px] w-full h-[6px] rounded-lg bg-[#F2F2F2]'>
					<div className='absolute loading-animation w-[100px] h-[6px] rounded-lg bg-[#2F80ED] animation-loading'></div>
				</div>
			</div>
		</>
	);
}
