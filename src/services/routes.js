import { lazy } from "react"

const routes = [
  { label: "Home", path: "/", exact: true, component: lazy(() => import("../views/Home/HomeView")) },
  {
    label: "Movies",
    path: "/movies",
    exact: true,
    component: lazy(() => import("../views/Movies/MovieView")),
  },
  {
    label: "Details",
    path: "/movie/:movieId",
    exact: false,
    component: lazy(() => import("../views/MovieDetails/MovieDetailsView")),
  },
  {
    label: "Not Found",
    component: lazy(() => import("../views/NotFound/NotFoundView")),
  },
]

export default routes
