const Pricing = () => {
	const products = [
		{
			id: 1,
			name: 'NVIDIA H100',
			lowestPrice: '$1.99/hr',
			storage: '80GB',
			clusters: '1x to 8x clusters',
		},
		{
			id: 2,
			name: 'NVIDIA A100',
			lowestPrice: '$1.50/hr',
			storage: '80GB',
			clusters: '1x to 8x clusters',
		},
		{
			id: 3,
			name: 'NVIDIA A100',
			lowestPrice: '$1.10/hr',
			storage: '80GB',
			clusters: '1x to 8x clusters',
		},
		{
			id: 4,
			name: 'RTX A6000',
			lowestPrice: '$0.80/hr',
			storage: '80GB',
			clusters: '1x to 8x clusters',
		},
		{
			id: 5,
			name: 'RTX 4090',
			lowestPrice: '$0.39/hr',
			storage: '80GB',
			clusters: '1x to 8x clusters',
		},
		{
			id: 6,
			name: 'RTX 3090',
			lowestPrice: '$0.30/hr',
			storage: '80GB',
			clusters: '1x to 8x clusters',
		},
	];
	return (
		<div
			id="pricing"
			className="border-b border-b-[#FFFFFFB3] py-[10px] md:py-[50px] w-11/12 lg:container mx-auto text-white">
			<div className="md:flex justify-between">
				<div className="md:w-1/2 my-5 md:my-0">
					<p className="text-[30px] lg:text-[40px] font-semibold">Pricing*</p>
					<small className="text-[#8A8A8A] mt-2 hidden md:inline-block">
						Pricing is subject to change <br />
						pending provider availability
					</small>
				</div>
				<div className="md:w-1/2">
					{products.map((product, index) => (
						<div
							key={product.id}
							className={`${
								index === products.length - 1 ? 'border-none' : 'border-b'
							} border-b-[white]/20 py-[20px]`}>
							<div className="flex items-center justify-between">
								<p className="text-[18px] font-semibold">{product.name}</p>
								<p className="text-[14px] font-normal">
									As low as {product.lowestPrice}
								</p>
							</div>
							<div className="flex items-center justify-between mt-2">
								<p className="text-[12px] rounded-full bg-[#303030] text-[#B4B1B8] py-1 px-3">
									{product.storage}
								</p>
								<p className="text-[12px] rounded-full bg-[#303030] text-[#B4B1B8] py-1 px-3">
									{product.clusters}
								</p>
							</div>
						</div>
					))}

					<div className="flex items-center mt-4">
						<div className="w-full bg-[white]/20 h-[0.5px] rounded-sm" />
						<p className="text-[12px] w-fit mx-auto rounded-full bg-[#303030] text-[#B4B1B8] font-semibold py-1 px-3 flex-shrink-0 cursor-pointer">
							Additional models available upon request
						</p>
						<div className="w-full bg-[white]/20 h-[0.5px] rounded-sm" />
					</div>

					{/* card footer */}
					<div className="mt-8 lg:mt-10">
						<p className="border border-[white]/20 w-fit md:w-full mx-auto px-3 py-5 rounded-md text-center text-[14px] md:text-[18px] my-5 font-semibold">
							Don’t See What You Need?
							<a
								href="https://akashnet.typeform.com/to/yRwjGdqz"
								target="_blank"
								rel="noreferrer">
								<span className="underline ml-3">Tell Us</span>
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
