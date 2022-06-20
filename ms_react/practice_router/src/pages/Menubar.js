import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Menubar = () => {
    // 내비게이트 사용해보기
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    };
    return (
        <div>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
            </ul>
            <Outlet />
            {/* 홈으로 돌아가기 버튼 */}
            <button onClick={goHome} type="button">홈으로 돌아가기</button>
        </div>
    );
};

export default Menubar;