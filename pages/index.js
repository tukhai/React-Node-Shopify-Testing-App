// import { Layout, Page, TextStyle } from '@shopify/polaris';
import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

// const Index = () => (
class Index extends React.Component {
	state = { open: false };
	render() {
		return (
			<Page>
				<TitleBar
					primaryAction={{
						content: 'Select products',
						onAction: () => this.setState({ open: true }),
					}}
				/>

				<ResourcePicker
					resourceType="Product"
					showVariants={false}
					open={this.state.open}
					onSelection={(resources) => this.handleSelection(resources)}
					onCancel={() => this.setState({ open: false })}
				/>

				<Layout>
					{/* <TextStyle variation="positive">
						Sample app using React and Next.js
					</TextStyle> */}

					<EmptyState
						heading="Discount your products temporarily"
						action={{
							content: 'Select products',
							// onAction: () => console.log('clicked'),
							onAction: () => this.setState({ open: true }),
						}}
						image={img}
					>
						<p>Select products to change their price temporarily.</p>
					</EmptyState>
				</Layout>

				<ResourceListWithProducts />
			</Page>
		);
	}

	handleSelection = (resources) => {
		const idsFromResources = resources.selection.map((product) => product.id);
		this.setState({ open: false });
		// console.log("Product selected: ", idsFromResources);
		// console.log(idsFromResources);
		store.set('ids', idsFromResources);
	}
};

export default Index;






