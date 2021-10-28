import styles from '../styles/WhyDockerNet.module.scss';
import Distribution from '../public/distribution.png';
import Presentation from '../public/presentation.png';
import Image from 'next/image';

export default function whyDockerNet() {
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>
				Designed for seasoned and beginner developers alike
			</h1>
			<div className={styles.contentContainer}>
				<div className={styles.leftContainer}>
					<div className={styles.list}>
						<h3>DockerNet is useful during and for:</h3>
						<ul>
							<li>
								Pre-YAML file development to better visualize and organize
								containers
							</li>
							<li>
								YAML config stage to verify containers are organized as expected
							</li>
							<li>
								Small-scale applications that do not require the robust and
								complex functionality of Portainer and other container
								management GUIs
							</li>
						</ul>
					</div>
					<div className={styles.image}>
						{/* <Image src={Yaml} alt='Yaml Icon' /> */}
						<Image
							src={Distribution}
							alt='Yaml Icon'
							height='150'
							width='150'
						/>
					</div>
				</div>
				<div className={styles.rightContainer}>
					<div className={styles.list}>
						<h3>DockerNet is designed for:</h3>
						<ul>
							<li>
								New developers learning the basics and fundamentals of Docker
							</li>
							<li>
								Visual learners who prefer a graphical interface over a CLI
							</li>
							<li>
								Developers looking for a simpler alternative to Portainer or
								Yacht
							</li>
						</ul>
					</div>
					<div className={styles.image}>
						<Image src={Presentation} height='100' width='100' />
					</div>
				</div>
			</div>
		</div>
	);
}
