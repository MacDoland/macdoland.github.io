export default {
    tiles: [

        { 
            id: 'unearthed', 
            title: 'BBC Unearthed', 
            type: 'web', 
            className: 'unearthed-background' 
        },
        { id: 'lexus', title: 'Lexus', type: 'web', className: 'lexus-background' },
        { id: 'egg-hunt', title: 'Project Egg Hunt', type: 'web', className: 'hunt-background' },

        { id: 'sailgp', title: 'SailGP', type: 'web', className: 'sailgp-background' },
     
        { id: 'funeral', title: 'SunLife Funeral Mapper', type: 'web', className: 'funeral-background' },
        { id: 'efl', title: 'EFL Match Centre', type: 'web', className: 'efl-background' },
       
        { id: 'green-city', title: 'BBC Green City', type: 'web', className: 'green-city-background' },
        { id: 'royal-london', title: 'Royal London', type: 'web', className: 'royal-london-background' },
       
        { id: 'garden-sketchfab', title: 'In the garden', type: 'sketchfab', src: 'https://sketchfab.com/models/75431eb321164f9689f6f98ef317f34f/embed?autospin=0.2&amp;preload=1&amp;transparent=0' },
        { id: 'syfy', title: 'Syfy Channel 20th Anniversary Quiz game', type: 'web', className: 'syfy-background' },
        { 
            id: 'ghost', 
            title: 'Ghost train builder', 
            type: 'web', 
            className: 'ghost-background' ,
            text: [
                `Ghost train builder was a side project we worked on for a few months leading up to Halloween. 
                At the time we were keen to explore the Aframe framework and came up with this idea of a user being able to customise their own Ghost train ride.
                My responsibilities on the project included building 3D models for the rooms, rides and monsters but also a lot of the JavaScript to make the cart follow its course.`,
                `A few years prior to this project I had worked on another side project to allow for the setup of simple scenes in ThreeJS through AngularJS directives. 
                So it was refreshing to use a framework that was developed along the same ideals. Because models could be defined by HTML, this allowed anyone on the team regardless of 3D experience to manipulated the levels.`,
                `The core idea behind this was to uv unwrap all the building blocks onto a single texture and then swap these textures out to skin each room dynamically. The user had limited choices on lighting, theme and the monsters that would pop up.`,
                `Relevant technologies: <br/> <ul><li>Vue.js</li><li>Aframe</li><li>Three.js</li></ul>`,
                `<a href="http://ghosttrainbuilder.com/">http://ghosttrainbuilder.com/</a>`

            ]
        },
        { id: 'bird', title: 'Steller\'s Jay', type: 'sketchfab', src: 'https://sketchfab.com/models/9cfe5bd6f132405fbf48bd004fa688bd/embed?autospin=0.2&amp;preload=1&amp;transparent=0' },
        { id: 'advent', title: 'Team Advent Calendar', type: 'web', className: 'advent-background' },
        { id: 'plant', title: 'Potted plant', type: 'sketchfab', src: 'https://sketchfab.com/models/e92dd6ae7eb242018642bb40a91e744e/embed?autospin=0.2&amp;autostart=0&amp;transparent=0' },
        { id: 'island', title: 'Procedural Islands', type: 'web', className: 'island-background' },
        { id: 'pila', title: 'Pila', type: 'sketchfab', src: 'https://sketchfab.com/models/ace7d3e35fea473599e10d2c62e7ab56/embed?autospin=0.2&amp;preload=1&amp;transparent=0' },
        { id: 'garden', title: 'In the garden', type: 'web', className: 'garden-background' },
        { id: 'landscape', title: 'Low Poly Environment', type: 'web', className: 'pila-background' },
        { id: 'weasel', title: 'Weasel character art', type: 'sketchfab', src: 'https://sketchfab.com/models/a995319e79e84c6a8df1ed8e5d3a58b0/embed?autospin=0.2&amp;preload=1&amp;transparent=0' },
        { id: 'rice', title: 'Rice ball illustration', type: 'web', className: 'rice-background' },
        { id: 'pila-game', title: '3D person character controller prototype', type: 'web', className: 'pila-game-background' },
        { id: 'rl-3d', title: 'Realise logo 3D scene', type: 'web', className: 'rl-3d-background' },
        { id: 'scottish-widows', title: 'Scottish Widows', type: 'web', className: 'scottish-widows-background' },
        { id: 'heathrow', title: 'Heathrow - Kids go free', type: 'web', className: 'heathrow-background' },
        { id: 'bermuda-splash', title: 'Expedia Bermuda', type: 'web', className: 'bermuda-splash-background' },
        { id: 'lions', title: 'Lions 2017 Tour', type: 'web', className: 'lions-background' },
        { id: 'ssiesta', title: 'Naked Wines: Supermarket Siesta', type: 'web', className: 'ssiesta-background' }
    ]
};