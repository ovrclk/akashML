import faqData from './faqData';

const Faqs = () => {
	const openCategoryList = (x) => {
		toggleFaqData(x);
	};

	const openFaqList = (y) => {
		toggleFaqData(y);
	};

	const toggleFaqData = (e) => {
		const container = e.target.classList.contains('faq')
			? e.target
			: e.target.parentNode;
		const sibling = container.nextSibling;
		const arrow = container.querySelector('.arrow-down');

		if (sibling.style.display === 'none') {
			sibling.style.display = 'block';
			arrow.style.transform = 'rotate(180deg)';

			if (!container.classList.contains('category')) {
				container.style.color = '#fff';
			}
		} else {
			sibling.style.display = 'none';
			arrow.style.transform = 'rotate(0deg)';

			if (!container.classList.contains('category')) {
				container.style.color = '#909090';
			}
		}
	};

	return (
		<section
			id="faqs"
			className="md:flex w-11/12 lg:container mx-auto text-white py-[30px] md:py-[50px]">
			<div className="w-11/12 mx-auto md:w-3/6  mb-5 md:mb-auto">
				<p className="text-[30px] lg:text-[40px] font-semibold">FAQs</p>
			</div>

			<div className="p-2 lg:p-0 md:w-3/6">
				<div className="flow-root md:w-full mx-auto">
					<div>
						{faqData.map((item, index) => (
							<div
								key={index}
								className="my-4 lg:my-8 p-4 lg:p-8 border border-[#353535] rounded-md">
								<div
									onClick={(e) => openCategoryList(e)}
									className="faq category text-sm md:text-[18px] font-semibold cursor-pointer z-10 flex items-center"
									style={{ color: '#FFF' }}>
									<p className="max-w-[200px]">{item.category} </p>
									<span className="text-[#8A8A8A] ml-2">
										({item.questions.length})
									</span>
									<svg
										className="arrow-down transition-all inline-block ml-auto w-6 h-6"
										style={{ transform: 'rotate(0deg)' }}
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19.5 8.25l-7.5 7.5-7.5-7.5"
										/>
									</svg>
								</div>
								<div
									style={{ display: 'none' }}
									className="border-t border-[#909090] mt-10 transition-all">
									{item.questions.map((question, index) => (
										<div
											key={index}
											className="text-[12px] md:text-[14px] mt-4 leading-relaxed border-b border-[#909090] pb-8 ">
											<div
												onClick={(e) => openFaqList(e)}
												style={{ color: '#909090' }}
												className="faq text-sm md:text-[18px] font-semibold flex items-center justify-between cursor-pointer
                        ">
												<p className="w-10/12">{question.question}</p>
												<svg
													className="arrow-down transition-all block ml-auto w-6 h-6"
													style={{ transform: 'rotate(0deg)' }}
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M19.5 8.25l-7.5 7.5-7.5-7.5"
													/>
												</svg>
											</div>
											<p
												className="faq-answer text-[12px] md:text-[14px] mt-4 leading-relaxed text-[#8A8A8A]"
												style={{ display: 'none' }}>
												dangerouslySetInnerHTML={{ __html: question.answer }}
											</p>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faqs;
