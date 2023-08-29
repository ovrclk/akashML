import Hero from '../../components/home/Hero';
import Pricing from '../../components/home/Pricing';

import Faqs from '../../components/home/faq/Faqs';
import PowerYouNeed from '../../components/home/powerYouNeed/PowerYouNeed';

const Home = () => {
	return (
		<>
			<Hero />
			<Pricing />
			<PowerYouNeed />
			<Faqs />
		</>
	);
};

export default Home;
