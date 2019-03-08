import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import Index from '@/Pages/Index/Index'
import Index_HeroDetail from '@/Pages/HeroDetail/Index'
import Index_FanArtDetail from '@/Pages/FanArtDetail/Index'
import Index_VideoDetail from '@/Pages/VideoDetail/Index'
import News from '@/Pages/News/News'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/news' component={News}/>
            <Route path='/info-detail/:id' component={Index_HeroDetail}/>
            <Route path='/art-detail/:iContentId' component={Index_FanArtDetail}/>
            <Route path='/video-detail' component={Index_VideoDetail}/>
            <Route path='/' component={Index}/>
        </Switch>
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();
