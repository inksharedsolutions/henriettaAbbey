import React from 'react';

import Layout from '../components/layout';
import Nav from '../components/nav';
import Banner from '../components/banner';
import MidBook from '../components/front-book';
import Author from '../components/author';
// import ParallaxBottom from "../components/parallax-bottom"
import FeaturedLogos from '../components/mid-main';
import { Helmet } from 'react-helmet';

const IndexPage = (props) => (
	<Layout>
		<Helmet title="Home |  Henrietta A Abbey" />
		<Nav pathExt={props.path} />
		<Banner />
		<MidBook />
		<Author />
		{/* <ParallaxBottom /> */}
		<FeaturedLogos />
	</Layout>
);

export default IndexPage;
