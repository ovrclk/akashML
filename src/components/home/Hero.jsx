import boxMockup from '../../assets/hero/boxmockup.png';

const Hero = () => {
	return (
		<div className="border-b border-b-[#FFFFFFB3] md:flex justify-between items-center lg:container text-white py-[37px] lg:py-[40px] lg:px-auto w-11/12 mx-auto">
			{/* banner info */}
			<div className="flex flex-col justify-start items-start lg:h-[480px] min-w-[50%]">
				<p className="text-[32px] md:text-[44px] lg:text-[54px] font-semibold leading-none">
					Powerful GPUs. <br /> On-demand.
				</p>
				<img
					className="md:hidden my-3 mx-auto max-w-sm w-full"
					src={boxMockup}
					alt=""
				/>
				{/* feature 1 */}
				<div className="flex items-center font-semibold text-[#8A8A8A] gap-3 my-5 md:mt-14 lg:mt-10">
					<svg
						width="44"
						height="44"
						viewBox="0 0 44 44"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect
							width="44"
							height="44"
							rx="6"
							fill="white"
						/>
						<path
							d="M26.0614 20.4037L24 27L20 27L17.9386 20.4037C17.3509 18.5227 17.7242 16.4731 18.9374 14.9202L21.5272 11.6052C21.7674 11.2977 22.2326 11.2977 22.4728 11.6052L25.0626 14.9202C26.2758 16.4731 26.6491 18.5227 26.0614 20.4037Z"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M20 30C20 32 22 33 22 33C22 33 24 32 24 30"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M18.5 22.5C15 25 17 29 17 29L20 27"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M25.9316 22.5C29.4316 25 27.4316 29 27.4316 29L24.4316 27"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M22 21C20.8954 21 20 20.1046 20 19C20 17.8954 20.8954 17 22 17C23.1046 17 24 17.8954 24 19C24 20.1046 23.1046 21 22 21Z"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<p className="text-[16px]">
						Infrastructure built to scale so you{' '}
						<br className="hidden md:block" /> can focus on building
					</p>
				</div>
				{/* feature 2 */}
				<div className="flex items-center font-semibold text-[#8A8A8A] gap-3 my-5 md:mt-8 lg:mt-0">
					<svg
						width="44"
						height="44"
						viewBox="0 0 44 44"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect
							width="44"
							height="44"
							rx="6"
							fill="white"
						/>
						<path
							d="M32 22C32 16.4772 27.5228 12 22 12C16.4772 12 12 16.4772 12 22C12 27.5228 16.4772 32 22 32"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M23 12.0493C23 12.0493 26 15.9999 26 21.9999"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M21 31.9506C21 31.9506 18 27.9999 18 21.9999C18 15.9999 21 12.0493 21 12.0493"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12.6296 25.5H22"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12.6296 18.5H31.3704"
							stroke="black"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M31.8789 27.9174C32.3727 28.2211 32.3423 28.9604 31.8337 29.0181L29.2671 29.309L28.1159 31.6213C27.8878 32.0795 27.1827 31.8552 27.0661 31.2873L25.8108 25.1713C25.7123 24.6913 26.1437 24.3892 26.561 24.646L31.8789 27.9174Z"
							stroke="black"
							strokeWidth="1.5"
						/>
					</svg>

					<p className="text-[16px]">
						Get started with NVIDIA H100 <br className="hidden md:block" />
						GPUs for as low as $1.99/hr
					</p>
				</div>
				<div className="hidden md:block mx-auto mt-5 w-full">
					<a
						href="https://akashnet.typeform.com/to/yRwjGdqz"
						target="_blank"
						rel="noreferrer"
						className="flex items-center justify-center bg-primary w-[321px] text-[14px] lg:text-[18px] rounded-md py-[14px] lg:px-[40px] lg:py-[16px]">
						<span className="font-semibold">Reserve Now</span>
						<svg
							className="ml-1"
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none">
							<path
								d="M6.61719 9.88576L10.3884 6.1145M10.3884 6.1145H7.08859M10.3884 6.1145V9.41436"
								stroke="white"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.5026 14.6666C12.1845 14.6666 15.1693 11.6818 15.1693 7.99992C15.1693 4.31802 12.1845 1.33325 8.5026 1.33325C4.8207 1.33325 1.83594 4.31802 1.83594 7.99992C1.83594 11.6818 4.8207 14.6666 8.5026 14.6666Z"
								stroke="white"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
				</div>
			</div>
			{/* banner img */}
			<div className="flex flex-col items-center justify-center lg:w-3/5">
				<div className="mx-auto">
					<img
						className="hidden md:block w-full md:max-w-[500px] mx-auto"
						src={boxMockup}
						alt=""
					/>
				</div>
				<div className="md:hidden mx-auto mt-5 lg:mt-auto w-full">
					<a
						href="https://akashnet.typeform.com/to/yRwjGdqz"
						target="_blank"
						rel="noreferrer"
						className="flex items-center justify-center bg-primary w-full lg:w-[400px] text-[14px] lg:text-[18px] rounded-md py-[14px] lg:px-[40px] lg:py-[16px]">
						<span className="font-semibold">Reserve Now</span>
						<svg
							className="ml-1"
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none">
							<path
								d="M6.61719 9.88576L10.3884 6.1145M10.3884 6.1145H7.08859M10.3884 6.1145V9.41436"
								stroke="white"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.5026 14.6666C12.1845 14.6666 15.1693 11.6818 15.1693 7.99992C15.1693 4.31802 12.1845 1.33325 8.5026 1.33325C4.8207 1.33325 1.83594 4.31802 1.83594 7.99992C1.83594 11.6818 4.8207 14.6666 8.5026 14.6666Z"
								stroke="white"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
