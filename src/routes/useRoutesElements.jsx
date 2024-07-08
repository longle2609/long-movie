import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import paths from "../paths";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";
import CreateFilm from "../pages/managers/CreateFilm";
import ListMovie from "../components/ListMovie/ListMovie";
import Theater from "../components/Theater/Theater";
import UserProfile from "../pages/userProfile/UserProfile";

const HomePage = lazy(() => import("../pages/home"));
const LoginPage = lazy(() => import("../pages/auth/Login"));
const RegisterPage = lazy(() => import("../pages/auth/Register"));
const MoviePage = lazy(() => import("../pages/movie"));
const BookingPage = lazy(() => import("../pages/booking"));
const BlogPage = lazy(() => import("../pages/blog"));
const EventPage = lazy(() => import("../pages/event"));
const ErrorPage = lazy(() => import("../pages/error"));

const AdminPage = lazy(() => import("../pages/admin"));
const MovieManagerPage = lazy(() => import("../pages/managers/MovieManager"));
const UserManagerPage = lazy(() => import("../pages/managers/UserManager"));
const ShowtimeManagerPage = lazy(() =>
    import("../pages/managers/ShowtimeManager")
);

const AuthRouter = () => {
    // user's authentication for login
    let isAuthenticated = false;

    return isAuthenticated ? <Navigate to={paths.HOME} /> : <Outlet />;
};

const BookingRouter = () => {
    // user's authentication for booking ticket
    let isAuthenticated = false;

    return isAuthenticated ? <Outlet /> : <Navigate to={paths.LOGIN} />;
};

const AdminRouter = () => {
    // user's authentication for admin access
    let isAuthenticated = true;

    return isAuthenticated ? <Outlet /> : <Navigate to={"/401"} />;
};

const useRoutesElements = () => {
    const elements = useRoutes([
        {
            path: "",
            element: <AuthRouter />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        {
                            path: paths.LOGIN,
                            index: true,
                            element: (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <LoginPage />
                                </Suspense>
                            ),
                        },
                        {
                            path: paths.REGISTER,
                            element: (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <RegisterPage />
                                </Suspense>
                            ),
                        },
                    ],
                },
            ],
        },
        {
            path: "",
            element: <BookingRouter />,
            children: [
                {
                    path: paths.BOOKING,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <BookingPage />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: paths.ADMIN,
            element: <AdminRouter />,
            children: [
                {
                    path: "",
                    element: <AdminLayout />,
                    children: [
                        {
                            index: true,
                            element: (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <AdminPage />
                                </Suspense>
                            ),
                        },
                        {
                            path: "users",
                            element: (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <UserManagerPage />
                                </Suspense>
                            ),
                        },
                        {
                            path: "movies",
                            element: (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <MovieManagerPage />
                                </Suspense>
                            ),
                        },
                        {
                            path: "showtime",
                            element: (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <ShowtimeManagerPage />
                                </Suspense>
                            ),
                        },
                        {
                            path: "create",
                            element: (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <CreateFilm />
                                </Suspense>
                            ),
                        },
                    ],
                },
            ],
        },
        {
            path: paths.HOME,
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <HomePage />
                        </Suspense>
                    ),
                },
                {
                    path: `${paths.MOVIE_DETAIL}/:movieId`,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <MoviePage />
                        </Suspense>
                    ),
                },
                {
                    path: paths.BLOG,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <BlogPage />
                        </Suspense>
                    ),
                },
                {
                    path: paths.EVENT,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <EventPage />
                        </Suspense>
                    ),
                },
                {
                    path: paths.LIST_MOVIES,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <ListMovie />
                        </Suspense>
                    ),
                },
                {
                    path: paths.THEATER,
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Theater />
                        </Suspense>
                    ),
                },
                {
                    path: "user-profile",
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <UserProfile />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "401",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <ErrorPage message={"401 Unauthorized!"} />
                </Suspense>
            ),
        },
        {
            path: "*",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <ErrorPage message={"404 Not Found!!!"} />
                </Suspense>
            ),
        },
    ]);

    return elements;
};

export default useRoutesElements;
