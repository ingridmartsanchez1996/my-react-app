import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='resume--container'>
            <div className='header'>
                <img src="../../public/images/me.jpg" alt="Ingrid Martinez" />
                <div>
                    <h3>Ingrid Jeraldin Martinez Sanchez</h3>
                    <p>
                        I am a software developer who is always eager to learn new technologies. I am a team player, patient, and organized.
                    </p>
                </div>
            </div>

            <div className='contact'>
                <h2>Contact information:</h2>
                <h4>ingridmartsanchez4@gmail.com</h4>
                <p>Mexico City</p>
                <p>Age: 27</p>
            </div>

            <div className='skills'>
                <h2>Skills:</h2>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>GitHub</li>
                    <li>Jira</li>
                    <li>Figma</li>
                </ul>
            </div>
        </div>


    )
}

export default AboutMe;