import PropTypes from 'prop-types';
import { ContainerCommon, MainTitle } from './Container.styled'

import { Section } from '../Section/Section'
export const Container = ({ text, children }) => {
	return <Section>
		<ContainerCommon>
			<MainTitle>{text}</MainTitle>
			{children}
		</ContainerCommon>
	</Section>
}

Container.propTypes = {
	text: PropTypes.string,
	children: PropTypes.node.isRequired,
}