import React from 'react'
import {
    Main,
    MediaDiv,
} from './styledComponent';
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';
import EachPost from './EachPost';
import { useState } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(true);
        // const darkMode = false;
    const initialPostList = [
        {id:1, title:', 시사N 대학기자상 취재', replCount: 1},
        {id:2, title:'학보, 시사N 대학기자상 취재', replCount: 43},
        {id:3, title:'학보, 시사N 대학기자상 취재', replCount: 2},
    ]
    const [loading, setLoading] = useState(false);
        // const loading = false;
    const [isPost, setIsPost] = useState(false);
        // const isPost = false;
    const [postList, setPostList] = useState(initialPostList);
    const addPost = () => {
        setPostList((postList)=>[
            ...postList, {id:4, title:'학보, 시사N 대학기자상 취재', replCount: 13},
        ])
    }
    return (
        <>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                <GlobalStyles />
                <MediaDiv>
                    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                    <Main>
                        <Slogun />
                        <ShowPostList 
                            loading={loading}
                            isPost={isPost}
                            postList={postList}
                            addPost={addPost}
                            />
                    </Main>
                    <Footer />
                </MediaDiv>
            </ThemeProvider>
        </>
    )
}

export default App;
