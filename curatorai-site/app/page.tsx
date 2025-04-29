import Hero from "@/components/home/hero";
import Pricing from "@/components/home/pricing";
import Overview from "@/components/home/overview";
import CaseStudies from "@/components/home/case-studies";
import Blog from "@/components/home/blog";




export default function Home() {
	return (
		<div>
			<Hero />
			<Overview />
			<CaseStudies />
			<Pricing />
			<Blog />
		</div>
	);
}





