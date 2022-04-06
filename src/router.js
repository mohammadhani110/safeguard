import * as React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Loader from './components/Loader';
// import Error404 from '../Pages/Error404';


const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
// const SignUp = React.lazy(() => import('../Pages/SignUp'));





// const PrivateRoute = ({ isAuthenticated }) => {
//     // const auth = false; // determine if authorized, from context or however you're doing it

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return isAuthenticated ? <ProtectedRoute isAuthenticated={isAuthenticated} /> : <Navigate to="/login" />;
// }


// function ProtectedRoute({
//     isAuthenticated
// }) {
//     if (isAuthenticated === true) {
//         return (
//             <Suspense fallback={<Loader />}>
//                 <Header />
//                 <Outlet />
//                 <Footer />
//             </Suspense>
//         );
//     }
//     return <Navigate to="/login" />;

// }

function NormalRoute({
    component: Component,  
}) {  
    return (
        <Suspense fallback={<Loader />}>
            <Header />
            <Component />
            <Footer />
        </Suspense>
    );

}
function UnAuthenticatedRoute({
    component: Component,
    isAuthenticated
}) {
    if (isAuthenticated === true) {
        return <Navigate to="/gallery" />;
    }
    else {
        return (
            <Suspense fallback={<Loader />}>
                <Component />
            </Suspense>
        );
    }

}

function RouterIndex() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route exact path='/' element={<NormalRoute component={Home}/>}/>
                <Route exact path='/about' element={<NormalRoute component={About}/>}/>
                <Route exact path='/personal-insurance' element={<NormalRoute component={Services}/>}/>


                {/* <Route path='*' element={<Error404 />} /> */}



                    {/* <Route exact path="/" element={<Homepage />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} /> */}
                    {/* <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blogDetails" element={<BlogDetails />} />
                        <Route path="/location" element={<Location />} /> */}



                    {/* <Route exact path='/' element={<NormalRoute component={Homepage} homepage={true}/>} />
                    <Route exact path='/gallery' element={<NormalRoute component={Gallery} />} />
                    
                    <Route exact path='/login' element={<UnAuthenticatedRoute component={Login} isAuthenticated={isAuthenticated} />} />
                    <Route exact path='/SignUp' element={<UnAuthenticatedRoute component={SignUp} isAuthenticated={isAuthenticated} />} /> */}
                 

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default RouterIndex;
