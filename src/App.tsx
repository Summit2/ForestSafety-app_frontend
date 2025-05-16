import { useEffect } from 'react';
import './assets/css/index.scss';

import { Main } from '@pages/Main/Main';
import { Login } from '@pages/Login/Login';
import { YMaps } from '@pbe/react-yandex-maps';

import { Route, Routes } from 'react-router';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { updateToken } from '@store/features/user';
import { cookieParser } from '@api/mocks/cookie';

import { useNavigate } from 'react-router';
import { 
  getOptionsFromSearchParams, 
  handleOptions,
  updateSearchParams 
} from '@store/features/searchParams';
import { updatePolygonList } from '@store/features/app';
import { useGetPolygonsQuery } from '@api/paths/polygonApi';
import { useSearchParams } from 'react-router-dom';

function App() {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.user);
  const { actionName, searchParams } = useAppSelector((state) => state.searchParams);
  const [ _, setSearchParams ] = useSearchParams();

  const { data = { polygons: [] }, isFetching } = useGetPolygonsQuery();

  const demostrationMode = true;

    useEffect(() => {
        if (!isFetching) {
            dispatch(updatePolygonList({
                polygons: [...data.polygons],
            }));
        }
    }, [isFetching]);

  useEffect(() => {
    const cookieInfo = cookieParser(document.cookie);
    if (cookieInfo && cookieInfo.access_token) {
      dispatch(updateToken({
        user: { name: cookieInfo.user_name, status: cookieInfo.user_status },
        accessToken: cookieInfo.access_token,
      }));
    } else {
      if (demostrationMode) {
        dispatch(updateToken({
          user: { name: 'demo', status: 'admin' },
          accessToken: 'demostration',
        }));
      } else if (accessToken === '') {
        navigate('/login');
      }
    }

    const params = new URLSearchParams(window.location.search);
    const paramObject = getOptionsFromSearchParams(params);
    dispatch(updateSearchParams(paramObject));
  }, [ ]);

  useEffect(() => {
    if (actionName !== 'GET') {
      setSearchParams(handleOptions(searchParams));
    }
  }, [ actionName, searchParams ]);

  return (
    <YMaps query={{ 
      lang: 'en_RU',
      // apikey: process.env.GEO_API_KEY,
    }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </YMaps>
  );
}

export default App;
