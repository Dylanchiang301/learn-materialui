import React from 'react'
import {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { Box} from '@mui/material';
import { ChannelCard} from './'
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetial, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snipper&id=${id}`)
      .then((data) =>setChannelDetail(data?.item[0]));

    fetchFromAPI(`search?channelId=$[id] &part=snipper& order=data`)
      .then((data) => setVideos(data?.items));
    },[id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255.1) 100%)',
          zIndex: 10,
          }}
        />


        <ChannelCard channelDetail={ChannelDetail} marginTop='-100px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr:{ sm:'100px' }}}/>
          <Videos videos={videos}></Videos>
      </Box>
    </Box>
  )
}

export default ChannelDetail