import Contributor from './contributor';
import styles from '../../styles/Contributors.module.css';
import Wyatt from '../../public/mitch1.jpeg';

export default function Contributors() {
	return (
		<div className={styles.container} id='contributors'>
			<h1>Contributors</h1>
			<div className={styles.contributorsContainer}>
				<Contributor
					name='Wyatt McMurry'
					linkedInUrl='https://www.linkedin.com/in/wyatt-mcmurry/'
					githubUrl='https://github.com/Dubya-Mick'
					src={Wyatt}
				/>
				<Contributor
					name='Bernie Green'
					linkedInUrl='https://www.linkedin.com/in/bernardjosephgreen/'
					githubUrl='https://github.com/bgreen280'
					src={Wyatt}
				/>
				<Contributor
					name='Nathan Yang'
					linkedInUrl='https://www.linkedin.com/in/nathan-yang-76a35a14a/'
					githubUrl='https://www.github.com/nathanmyang'
					src={Wyatt}
				/>
				<Contributor
					name='Will Sankhla'
					linkedInUrl='https://www.linkedin.com/in/willsankhla/'
					githubUrl='https://github.com/wills77'
					src={Wyatt}
				/>
			</div>
		</div>
	);
}
