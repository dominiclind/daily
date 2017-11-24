import React, { Component } from 'react';
import {
	Image,
	ScrollView,
	View
} from 'react-native';
import { connect } from 'react-redux';

import Container from 'app/components/Container';
import NavBar from 'app/components/NavBar';
import Button from 'app/components/Button';
import Input from 'app/components/Input';

import {Text, H1,H2,H3,H4} from 'app/components/Type';

class KitchenSink extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { thing } = this.props;
		return (
			<Container>
				<NavBar title="Home"/>
			
				<ScrollView style={{padding: 10, paddingTop: 10}}>

					<H1>Heading 1</H1>
					<Text>Virtually every legal decision a founder makes carries with it the potential to seriously impact the company’s partners, investors, employees, and even customers.</Text>
					<H2>Heading 2</H2>
					<H3>Heading 3</H3>
					<H4>Heading 4</H4>
					<Input onChange={(val) => console.log(val)}/>
					
				</ScrollView>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		thing: state.thing
	};
}

export default connect(mapStateToProps)(KitchenSink);