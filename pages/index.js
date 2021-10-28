import Head from 'next/head';
import Intro from '../components/intro';
import AboutUs from '../components/aboutus';
import WhyDockerNet from '../components/whyDockerNet';
import Features from '../components/features/features';
import Contributors from '../components/contributors/contributors';
import GettingStarted from '../components/gettingstarted';

export default function Home() {
	return (
		<>
			<Head>
				<title>DockerNet</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='icon' type='image/png' href='/logo.png' />
			</Head>
			<Intro />
			<AboutUs />
			<WhyDockerNet />
			<Features />
			<GettingStarted />
			<Contributors />
		</>
	);
}
