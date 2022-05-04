import React from 'react'
import {StreamChat} from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';

import Cookies from 'universal-cookie';

import {ChannelContainer, ChannelListContainer} from './Components';

import './App.css';


const apiKey = 'ya4t2da49psp';
const client = StreamChat.getInstance(apiKey);
const App = () => {
  return (
    <div className='app__wrapper'>
        <Chat client={client} theme="team light">
           <ChannelListContainer 

           />
           <ChannelContainer 
           
           />
        </Chat>
    </div>
  )
}

export default App;