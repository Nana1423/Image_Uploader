import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function showImage() {
	const { id } = useParams();
	const [img, setImg] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(
					`https://image-uploader-sgit.onrender.com/${id}`,
				);
				if (response.status === 200) {
					setImg(response.data);
				}
			} catch (e) {
				console.error(e);
			}
		})();
	}, []);

	return (
		<>
			<div className='grid min-h-screen w-auto place-content-center bg-black'>
				<div className='mx-[10%] my-[5%] h-auto w-auto'>
					{img && <img src={img} alt='no-img' />}
				</div>
			</div>
		</>
	);
}
