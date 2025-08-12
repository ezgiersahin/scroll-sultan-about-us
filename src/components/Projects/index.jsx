import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
    {
        title: "Türk Lavtası",
        src: "site2.jpg"
    },
    {
        title: "Türk Lavtası",
        src: "site_sultan-009.jpg"
    },
    {
        title: "Türk Lavtası",
        src: "site_sultan-588.jpg"
    },
    {
        title: "Türk Lavtası",
        src: "site_sultan-494.jpg"
    },
]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>Türkiye’nin kalbinde, her bir ağacın damarında saklı melodiyi hisseden ustalarımız, 
                        yalnızca bir enstrüman değil, bir ömür boyu eşlik edecek en yakın arkadaşlarınızı üretir. 
                       </p>
                </div>
                <div className={styles.column}>
                    <p> Bu yolculuğun kaptanı ise, ud dünyasının yaşayan efsanesi Yıldırım Palabıyık.
                    Onun rehberliğinde, her yıl dünyanın dört bir yanından özenle seçilen en kaliteli ağaçlar, nefes kesici tasarımlara dönüşür.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
