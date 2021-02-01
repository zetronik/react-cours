import React, {lazy, Suspense} from 'react'
import Loader from './components/UI/loader/Loader'
const Header = lazy(() => import('./components/header/Header'))
const Slider = lazy(() => import('./components/slider/Slider'))
const Features = lazy(() => import('./components/features/Features'))
const About = lazy(() => import('./components/about/About'))
const Courses = lazy(() => import('./components/courses/Courses'))
const Footer = lazy(() => import('./components/footer/Footer'))
const Action = lazy(() => import('./components/action/Action'))
const Result = lazy(() => import('./components/result/Result'))

class App extends React.Component {
  render() {
    return (
        <Suspense fallback={<Loader/>}>
        <Header />
        <Slider />
        <Features />
        <About />
        <Courses />
        <Result />
        <Action />
        <Footer />
      </Suspense>
    )
  }
}

export default App
