import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';
import Page4 from '../Page4';
import Page5 from '../Page5';

  
const Router = createBrowserRouter([
	
	{
		path: "2",
		element: <Page2 />,
	},
	{
		path: "3",
		element: <Page3 />,
	},
	{
		path: "4",
		element: <Page4 />,
	},
	{
		path: "5",
		element: <Page5 />,
	},
	{
		path: "*",
		element: <Page1 />,
	},
  ]);


export default Router