import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setPageTwoData } from './redux/actions/pageActions'

const Page2 = () => {
	const dispatch = useDispatch()
	const [numOfStories, setNumOfStories] = useState("")
	const [ageOfBuilding, setAgeOfBuilding] = useState("")
  const navigate = useNavigate()
	
  return (
	<div className="container">
        <h1>Earthquake Risk Assessment </h1>
        <form id="formPage2" onSubmit={() => false}>
            <label for="num_stories">Number of Stories:</label>
            <select id="num_stories" name="num_stories" required value={numOfStories} onChange={(e)=> setNumOfStories(e.target.value)}>
                <option value="" disabled selected>-- Select --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8_or_more">8 or more</option>
            </select><br />

            <label for="age_of_building">Age of Building:</label>
            <select id="age_of_building" name="age_of_building" required value={ageOfBuilding} onChange={(e)=> setAgeOfBuilding(e.target.value)}>
                <option value="" disabled selected>-- Select --</option>
                <option value="1975">1975</option>
                <option value="1976-1996">Between 1976 and 1996</option>
                <option value="1997-1999">Between 1997 and 1999</option>
                <option value="2000-2006">Between 2000 and 2006</option>
                <option value="2007_and_more">2007 and more</option>
            </select><br />
            
			  <button type="button" onClick={() => {
				  dispatch(setPageTwoData({ageOfBuilding, numOfStories}))
				  navigate("/3")
			  }}>Continue</button>
        </form>
    </div>
  )
}

export default Page2