import React , { Component } from 'react';
import Box from '@material-ui/core/Box';
import './index.css';
import { Button } from '@material-ui/core';
import $ from 'jquery';
import { BrowserRouter as Router, Link , useHistory ,useRouter } from 'react-router-dom';
import Login from '../../Pages/Login';

const Title = () => {

    const history = useHistory();

        return (
            <Router>
                <div className="main-title">
                    <div class="logo"><img src="gaming-logo-cover-958x575.jpg" height="fixed"/></div>
                    <div class="title">WORLD A PLACE</div>
                
                    <div id="right-title">
                        <Box display="flex" flexDirection="row-reverse" paddingRight={20}>
                            <Box paddingLeft={5}>
                                <Link class="first" to="../../Pages/Login" >
                                    <Button class="first">LOGIN</Button>
                                </Link>
                            </Box>
                            <Box paddingLeft={5}><Button class="first">Hello</Button></Box>
                            <Box paddingLeft={5}><Button class="first">HHHHH</Button></Box>
                            <Box><Button class="first">kkkkkk</Button></Box>
                        </Box>
                    </div>
                </div>
            </Router>
            
        );
   
};

$(document).on('scroll', function(){
  if ( $(window).scrollTop() > 30) {
      $('.main-title').addClass('change-color');
      $('.main-title').addClass('transparency');
      $('.first').addClass('change-color');
      $('.title').addClass('change-position');
      $('.logo').addClass('logo-animation');
  } else {
      $('.main-title').removeClass('change-color');
      $('.main-title').removeClass('transparency');
      $('.first').removeClass('change-color');
      $('.title').removeClass('change-position');
      $('.logo').removeClass('logo-animation');
  }

});



export default Title;