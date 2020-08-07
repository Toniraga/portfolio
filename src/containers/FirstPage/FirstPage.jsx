import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState'

import Success from '../Success/Success'
import Failed from '../Failed/Failed'
import { Questions1, Questions2, Questions3 } from '../../components/Questions/Questions'

import classes from './FirstPage.module.css'

const FirstPage = (props) => {
	const value = 3
    const { scoreCount } = useContext(GlobalContext);

	let successPage =
		scoreCount === value ? (
			<Route path="/p2" exact component={Success} />
		) : (
			<Route path="/p2" exact component={Failed} />
		);

    return (
			<div className={classes.FirstPage}>
				<Switch>
					<Route path="/" exact component={Questions1} />
					<Route path="/q2" exact component={Questions2} />
					<Route path="/q3" exact component={Questions3} />
					{successPage}
				</Switch>
			</div>
		);
}


export default React.memo(FirstPage);