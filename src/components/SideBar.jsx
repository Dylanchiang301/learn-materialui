import {autocompleteClasses, SliderTrack, Stack} from '@mui/material';
import React from 'react';

import { categories } from '../utils/constants';

const selectedCategory = 'New';

const SideBar = ( {selectedCategory, setSelectedCategory}) => (
    <Stack 
    derction="row" 
    sx={{
        overflowY: 'auto',
        height: {sx:"auto", md:'95%'},
        flexDirection:{ md:'column'}
    }}
    >
        {categories.map((category)=> (
            <botton 
            className='category-btn'
            onClick={() => setSelectedCategory(category.name)}
            style={{
                background: category.name === selectedCategory && '#FC1503',
                color: 'white '
            }}
            key={category.name}
            >
                <span
                style={{
                    color:category.name === selectedCategory ? "white" : 'red', marginRight:'15px'
                }}
                >{category.icon}</span>

                <span
                style={{
                    opacity: category.name === selectedCategory ? '1':'0.7'
                }}
                >{category.name}</span>
            </botton>
        ))}
    </Stack>
)

export default SideBar
