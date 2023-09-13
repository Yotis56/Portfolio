import testImage from './assets/testImage.png'
import vuelaFacilfront from './assets/vuelaFacilfront.jpg'
import vuelaFacilback from './assets/vuelaFacilback.png'
import platziVideo from './assets/platziVideo.png'
import Pokedex from './assets/Pokedex.png'
import todo from './assets/todo.png'

export const projecstList = [
    {
        id: 0,
        image: vuelaFacilfront, 
        title: 'Vuela Fácil - FrontEnd', 
        description: 'Proyecto para el programa de Misión Tic 2021. Se emula un sitio web de una aerolínea con un sistema de agendamiento de vuelos para los usuarios, y un sistema de administración de la base de datos para un administrador ', 
        techStack: 'Angular, CSS, Typescript', 
        linkDemo: 'https://yotis56.github.io/VuelaFacilC4-FrontEnd/', 
        linkGithub: 'https://github.com/Yotis56/VuelaFacilC4-FrontEnd'
    },
    {
        id: 1,
        image: vuelaFacilback, 
        title: 'Vuela Fácil - BackEnd', 
        description: 'Proyecto para el programa Misión TIC 2021. Se genera una aplicación backend con Express.js que gestiona las peticiones CRUD que hace el Frontend y conecta con una base de datos en Mongo DB', 
        techStack: 'Mongo, Express.js, Typescript', 
        linkDemo: '#', 
        linkGithub: 'https://github.com/Yotis56/VuelaFacilC4-BackEnd'
    },
    {
        id: 2,
        image: platziVideo, 
        title: 'Platzi Video', 
        description: 'Proyecto del curso de React de Platzi. Se construyó una página web con react y redux en donde se simula la llamada a una API, la renderización de información (componentes con videos) y el manejo de un estado global con Redux', 
        techStack: 'React, Redux, Sass, webpack, babel', 
        linkDemo: 'https://yotis56.github.io/Platzi-video-react-/', 
        linkGithub: 'https://github.com/Yotis56/Platzi-video-react-/tree/router-redux'
    },
    {
        id: 3,
        image: Pokedex, 
        title: 'Pokedux', 
        description: 'Proyecto desarrollado en el curso de Redux de Platzi. Se hace un llamado a una api pública de pókemon, se maneja un estado global (resultados de búsqueda, favoritos e info completa) y el conjunto se renderiza con React', 
        techStack: 'React, Redux, CSS, webpack', 
        linkDemo: 'https://yotis56.github.io/pokedex/', 
        linkGithub: 'https://github.com/Yotis56/pokedex'
    },
    {
        id: 4,
        image: todo, 
        title: 'TODO App', 
        description: 'Ejemplo clásico de una aplicación para guardar TODOs. Se le da persistencia a los datos usando el local storage, uso una navegación básica con react router', 
        techStack: 'React, Redux, Sass', 
        linkDemo: '#', 
        linkGithub: '#'
    },
    {
        id: 5,
        image: testImage, 
        title: 'Proyecto de prueba', 
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content', 
        techStack: 'React, Redux, Sass', 
        linkDemo: '#', 
        linkGithub: '#'
    }
]