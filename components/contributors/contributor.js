import Link from 'next/link';
import Image from 'next/image';
import linkedinImg from '../../public/linkedin.png';
import githubImg from '../../public/github.png';
import styles from '../../styles/Contributors.module.css';

export default function Contributor({ name, src, linkedInUrl, githubUrl }) {
	return (
		<div className={styles.contributorContainer}>
			<div
				style={{
					borderRadius: '50%',
					overflow: 'hidden',
					height: '15vh',
					width: '7.5vw',
					position: 'relative',
				}}
			>
				<Image
					src={src}
					alt='Profile Picture'
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<p>{name}</p>
			<div className={styles.buttons}>
				<Link href={linkedInUrl}>
					<a>
						<Image
							src={linkedinImg}
							alt='linkedIn logo'
							height='36'
							width='36'
						/>
					</a>
				</Link>
				<Link href={githubUrl}>
					<a>
						<Image src={githubImg} alt='github logo' height='36' width='36' />
					</a>
				</Link>
			</div>
		</div>
	);
}
