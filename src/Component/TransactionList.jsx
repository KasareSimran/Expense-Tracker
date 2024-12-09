// eslint-disable-next-line no-unused-vars
import React from 'react'

function Transaction(){
    return(<>
    <h3>History</h3>
    <ul  className='list'>
        <li className='minus'>
            Cash<span>-₹400</span><button className='delete-btn'>X</button>
        </li>
    </ul>
    </>);
}
export default Transaction