import React from 'react'
import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import Home from './Home'
import Project from './Project'

function Section(props) {
    let sectionRefs = props.sectionRefs
    return (
        <>
            <section ref={sectionRefs.Home}>
                <Home />
            </section>
            <section ref={sectionRefs.About}>
                <About />
            </section>
            <section ref={sectionRefs.Experience}>
                <Experience />
            </section>
            <section ref={sectionRefs.Project}>
                <Project />
            </section>
            <section ref={sectionRefs.Contact}>
                <Contact />
            </section>
        </>
    )
}

export default Section