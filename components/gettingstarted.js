import Link from 'next/link';
import styles from '../styles/GettingStarted.module.scss';

export default function GettingStarted() {
	return (
		<div className={styles.container} id='gettingstarted'>
			<h1>Getting Started</h1>
			<ol>
				<li>
					Clone{' '}
					<Link href='https://github.com/oslabs-beta/DockerNet'>
						<a>Repo</a>
					</Link>{' '}
					to local device <span>(git clone)</span>
				</li>
				<li>
					Install required packages on local device <span>(npm install)</span>
				</li>
				<li>Open Docker on local device</li>
				<li>
					Start app using the following command <span>(npm start)</span>
				</li>
				<li>Wait for app to load in default browser</li>
			</ol>
		</div>
	);
}
