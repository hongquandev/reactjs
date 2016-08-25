import 'css/containers/feed.scss';

import { PropTypes } from 'react';
import {createStore, combineReducers} from 'redux';
import Component from 'common/component';
import Navigation from 'common/components/navigation';

class PageLayout extends Component {
	constructor(props) {
		super();

		let reducers = combineReducers(props.route.reducers);
		let devTools = window.devToolsExtension && window.devToolsExtension();

		this.store = createStore(reducers, devTools);
	}

	getChildContext() {
		return {
			store: this.store
		};
	}

	render() {
		return (
			<div className="container-fluid">
	   		<div className="row app-navbar">
					<div className="col-12">
     				<Navigation />
					</div>
     		</div>
				<div className="row">
					<div className="col-12">
   					{this.props.children}
					</div>
   			</div>
			</div>
		);
	}
}

PageLayout.childContextTypes = {
  store: PropTypes.shape({
	  subscribe: PropTypes.func.isRequired,
	  dispatch: PropTypes.func.isRequired,
	  getState: PropTypes.func.isRequired
	}).isRequired
};

export default PageLayout;