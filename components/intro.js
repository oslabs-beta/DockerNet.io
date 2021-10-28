import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/logo.png';
import style from '../styles/Intro.module.scss';

export default function Intro() {
	return (
		<div className={style.container} id='home'>
			<div className={style.textContainer}>
				<h1>Visualize and Manage Docker Networks in Real-Time</h1>
				<p>
					Locally-Hosted Web Application GUI for Docker Network and Container
					Management
				</p>
				<Link href='#gettingstarted'>
					<a>
						<button>Get Started</button>
					</a>
				</Link>
			</div>
			<div className={style.imageContainer}>
				<Image src={Logo} alt='DockerNet Logo' height='450' width='450' />
			</div>
		</div>
	);
}
