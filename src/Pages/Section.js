import React, { useState } from 'react'
import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import Project from './Project'
import Skills from './Skills'

function Section(props) {
    let sectionRefs = props.sectionRefs
    const [showSection, setShowSection] = useState(false);
    const checkTrueFunc = (state) => {
        setShowSection(state);
    }
    return (
        <>
            <section ref={sectionRefs.About}>
                <About checkTrue={checkTrueFunc} />
            </section>
            {showSection && (<><section ref={sectionRefs.Experience}>
                <Experience />
            </section>
                <section ref={sectionRefs.Skills}>
                    <Skills />
                </section>
                <section ref={sectionRefs.Project}>
                    <Project />
                </section>
                <section ref={sectionRefs.Contact}>
                    <Contact />
                </section></>)}

        </>
    )
}

export default Section