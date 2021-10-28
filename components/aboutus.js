import Image from 'next/image';
import styles from '../styles/AboutUs.module.css';
import DockerNet from '../public/dockernet.png';

export default function AboutUs() {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1>What is DockerNet?</h1>
					<p>
						DockerNet is a YADL (Yes Another Docker Client...) with a unique
						spin on the standard Docker Client. It provides users with the
						ability to visualize and manage Docker Networks in real-time.
					</p>
				</div>

				<div
					style={{
						position: 'relative',
						height: 300,
						width: 500,
					}}
				>
					<Image src={DockerNet} alt='ship' layout='fill' />
				</div>
			</div>
		</div>
	);
}
