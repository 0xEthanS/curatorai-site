import Header from "@/components/top-level/marketing-header";

import Footer from "@/components/top-level/footer";


import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq";






export default function Home() {
	return (
		<div>


			<Header />




			<Hero />

			<Features />


		


		




			<div className="md:pt-12">
				<Pricing />
			</div>


			<FAQ />





			<Footer />


		</div>
	);
}





