import React from 'react'
import {Box, CardContent, CardMedia, Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import ChannelDetail from './ChannelDetail'

const channelCard = ({ channelDetial }) => (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: { xs:'356px', md:'320px'},
        height:'326px',
        margin:'auto',
        marginTop:'-93px'
      }}
    >

    <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
            <CardMedia
              image={ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={ChannelDetail?.snippet?.title}
              sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
            />
            <Typography variant="h6">
              {ChannelDetail?.snippet?.title}{' '}
              <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
            </Typography>
            {ChannelDetail?.statistics?.subscriberCount && (
              <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                {parseInt(ChannelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
              </Typography>
            )}
          </CardContent>
        </Link>


      {/* <Link to={ `/channel/${channelDetial?.id?.channelId}`}>
        <CardContent sx={{ display:'flex', flexDirection:'column', 
          justifyContent:'center', textAlign:'center', color:'white' }}/>
          <CardMedia
            image={ChannelDetail?.snippet?.thumbnails?.high?.
            url || demoProfilePicture}
            alt={ChannelDetail?.snippet?.title}
            sx={ {borderRadius: '50%',height:'180px',width:'180px',mb:2, border:'1px solid yellow'}}
          />
          <Typography variant='h6' sx={{color:'golden'}}>
            {ChannelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:14, color:'gray', fontWeight:500 }}/>
          </Typography>
          {ChannelDetail?.statistics?.subcriberCount && (
            <Typography>
              {parseInt( ChannelDetail?.statistics?.subscriberCount).toLocaleString()}
              Subscribers
            </Typography>

          )}
      </Link> */}
    </Box>
  )

export default channelCard