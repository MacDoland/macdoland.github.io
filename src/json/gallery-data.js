export default {
    tiles: [
        {
            id: 'lexus',
            title: 'Lexus',
            clientName: 'Lexus',
            type: 'web',
            className: 'lexus-background',
            imgUrl: './dist/images/lexus.png',
            highlighted: true,
            text: [
                `
                <p>In the summer of 2019 I started working on the Lexus Europe and Lexus UK accounts. 
                I worked alongside the other seniors on the account but I was specifically brought on to lead the front end development moving forward.<p/>
                
                <p>The lexus marketing site is a multi-tenancy application built using Backbone that is powered by a Tridion and MongoDB back end.</p>
                 
                <p>My role included:
                 <ul>
                    <li>code views on front end relate pull requests</li>
                    <li>supporting the onboarding of new members to the team</li>
                    <li>the estimation of tasks in JIRA</li>
                    <li>feeding into the ongoing process improvements</li>
                    <li>implementing integrated testing</li>
                    <li>writing AB tests through Google Optimize</li>
                    <li>building schemas and components in Tridion</li>
                 </ul>
                </p>

                <p>The platform was well established and had been running for several years but there were improvements that could be made.</p>
                
                <p>
                Relevant links:
                </p>

                <p>
                    <a href="https://www.lexus.eu/en/">https://www.lexus.eu/en/</a>
                </p>

                <p>
                    <a href="https://www.lexus.co.uk">https://www.lexus.co.uk</a>
                </p>
                `

            ]
        },
        {
            id: 'garden',
            title: 'In the garden',
            type: 'web',
            className: 'garden-background',
            imgUrl: './dist/images/garden-background.jpg',
            clientName: 'In the garden',
            highlighted: false,
            overlayContent: `
                <iframe src="https://sketchfab.com/models/75431eb321164f9689f6f98ef317f34f/embed?autospin=0.2&amp;preload=1&amp;transparent=0"></iframe>
            `,
            text: [
                `
                <p>This piece of work close to my heart. A side project I worked on last year that went through many months of iteration. 
                I was looking for some practice on building out environments so decided to impose a size limition to that of a garden to help with scope and focus.</p>
    
                <p>I created a reference board with PureRef of all the various garden related objects that interested me. I was particularly drawn to outhouse conversions and that quickly became the main focus.</p>
    
                <p>I like the idea of every scene having a story behind it and for this I settled on the thought that the garden belonged to an elderly man who was spending his years of retirement building bird houses.</p>
    
                <p>The scene was almost entirely modelled and textured in Blender with the exception of some foliage shapes being produced using Photoshop. 
                This was built prior to the official release of Blender 2.8, but I did download a beta version to help combine UV maps for baking. 
                I baked the entire scene into textures for uploading to Sketchfab where it was staff picked. A mechanism where staff can feature particular pieces of work.</p>
    
                <p>
                Some work in progress renders can be found here on artstation: 
                <a href="https://www.artstation.com/artwork/2xOmLy">https://www.artstation.com/artwork/2xOmLy</a>
                </p>
    
                <p>
                Sketchfab: 
                <a href="https://sketchfab.com/3d-models/in-the-garden-75431eb321164f9689f6f98ef317f34f">https://sketchfab.com/3d-models/in-the-garden-75431eb321164f9689f6f98ef317f34f</a>
                </p>
                
                
                `
            ]

        },
        {
            id: 'egg-hunt',
            title: 'WIP Project Egg Hunt',
            type: 'web',
            className: 'hunt-background',
            imgUrl: './dist/images/hunt.png',
            clientName: 'Project Egg Hunt',
            highlighted: false,
            overlayContent: `
                <iframe src="http://project-egg-hunt.azurewebsites.net/"></iframe>
            `,
            text: [
                `
                    <p>
                    Project Egg is a side initiative currently being worked on for Easter 2020.
                    The core idea behind it was to allow for the painting of eggs in the browser and then supplying the painted eggs through an API for various experiences and games to make use of.
                    </p>

                    <p>This piece is one such experience. It is a 3D egg hunt game where a series of random painted egg textures are retrieved from the API and used to decorate eggs hidden around the scene.
                    The game then becomes trying to find these eggs by rotating and paning the camera around the world to find them. </p>

                    <p> All models and textures thus far have been created using Blender. Using ThreeJS I am importing the models and baked textures and rendering them to the canvas when the scene needs to redraw.
                    </p>

                    <p>This is very much work in progress and is currently hosted in Azure on a free tier web app, so may be sleeping!</p>

                    <p>
                    Relevant technologies: Blender, ThreeJS</p>

                    <p>Link: <a href="http://project-egg-hunt.azurewebsites.net/">http://project-egg-hunt.azurewebsites.net/</a></p>
                
                `
            ]
        },
        {
            id: 'sailgp',
            title: 'SailGP',
            clientName: 'SailGP',
            imgUrl: './dist/images/sailgp.png',
            type: 'web',
            className: 'sailgp-background',
            highlighted: true,
            text: [
                `
                <p>SailGP is a popular international sailing event and we were tasked with building out the event website.</p>
                <p>A major requirement for the site was to allow for the creation of any number of pages in the CMS from a number of blocks set out by our UX and design teams. This meant that the notion of pages in the traditional sense didn’t really exist as far as our team were concerned. We started to consider the site in terms of components, with a page being nothing more than a collection of those components.</p>

                <p>In order to support that way of thinking we had to be very deliberate in our choice of technology stack.</p>

                <p>Our stack includes:
                    <ul>
                        <li>Contentful - a headless CMS</li>
                        <li>Content Service - a service layer built in Node.js</li>
                        <li>React - our front end framework of choice</li>
                        <li>Docker</li>
                    </ul>
                </p>

                <p>
                    Using Contentful and our Content Service we have a lot of control and flexibility over how the data is presented to the application. We were able to define components and send over a detailed structure on how these components should be used by the application to create our pages. React lets us use this data and rapidly construct the visual components that the user sees on each page. Docker ensures that the application is packaged up and deployed with everything it needs to run which gives us confidence in our testing.
                </p>

                <p>
                    In the front end project we set up a container, a React specific piece of code, that requests the data from the content service for a certain page on the site. The data received includes a definition of what components should appear, the data for these components as well as some global data and site settings to populate the components that appear on every page.
                </p>

                <p>Using React made a lot of sense here as components are front and center of it's ideology. We take the component definition list then dynamically render components based on this list in order. Each component follows the same rules and receives data in the same way. As we aren’t really concerned with pages, the focus is on building components in isolation, this makes splitting the work out between the team easier. </p>

                <p>The benefits of our chosen architecture are that we are left with flexible pieces that are focused on their own concerns. We can add, edit or remove components, create entirely new pages and even decide to completely replace the front end solution with something different and the content remains unaffected. </p>
                <p>
                Relevant technologies: React, NodeJS, Contentful, Docker</p>

                <p>Link: <a href="https://sailgp.com/">https://sailgp.com/</a></p>
                `
            ]
        },
        {
            id: 'pila-game',
            title: 'Prototype 3D Platformer',
            clientName: 'Prototype 3D Platformer',
            imgUrl: './dist/images/pila-background.jpg',
            type: 'web',
            className: 'pila-game-background',
            text: [
                `
                    <p>Pila and the secret door is one of the Unity projects I've been working on for fun in my own time. 
                    It's a 3D platformer that uses a custom kinematic character controller I've been writing that extends Unitys default one.</p>

                    <p>I'm particularly fond of the compositional approach I've take where each behaviour is defined in a seperate game component.
                    Although this comes with a slight performance cost, it has made life so much easier whe revisiting the project after extended breaks.
                    </p>

                    <p>I've recently begun refactoring the reusable elements such as this character controller and the camera into reusable unity packages imported via a git repository.</p>




                `
            ],
            overlayContent: `
            
            <iframe src="https://player.vimeo.com/video/204263108" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

            
            `

        },
        {
            id: 'funeral',
            title: 'SunLife Funeral Mapper',
            clientName: 'SunLife',
            type: 'web',
            className: 'funeral-background',
            imgUrl: './dist/images/funeral-mapper.png',
            highlighted: true,
            text: [
                `
                    <p>SunLife were looking for a custom google map to help people plan services they would need during the death of a loved one. After experiencing a few bloated google maps over the last few years I decided to keep this one pretty light and performant. I brought in a custom event dispatcher and hooked up a lightweight pub-sub arhitecture. To handle UI updates based on pin clicks.</p>
                    <p>Using an event driven system made it quite easy to update multiple UI components with the same data such as a favourited pin changing icon, updating the count and displaying it on a list.
                    <p>Link: <a href="https://www.sunlife.co.uk/funeral-planning/funeral-planning-mapper/">https://www.sunlife.co.uk/funeral-planning/funeral-planning-mapper/</a></p>
                
                    `
            ]
        },
        {
            id: 'efl',
            title: 'EFL Match Centre',
            clientName: 'EFL',
            type: 'web',
            className: 'efl-background',
            imgUrl: './dist/images/efl-match-center.jpg',
            highlighted: true,
            text: [
                `
                    <p>This project for the English Football League (EFL) was the first major EpiServer build our agency won. 
                    It was another multi-tenancy web application that catered for 66 different english football clubs initially.</p>

                    <p>I was put in charge of the integration of the Match Centre for all 66 clubs. This involved creating event pages for every game in a season with pre, during and post match states. </p>
                    <p>The majority of the work was integrating and theming of Opta Widgets. I built a Match Center management component which registered and orchestrated the rendering of the right widget during the right match state.</p>

                    <p>Relevant technologies: EpiServer </p>
                    <p>Link: <a href="https://www.swfc.co.uk/matches/fixtures/">https://www.swfc.co.uk/matches/fixtures/<a/></p>
                    <p>Link: <a href="https://www.bwfc.co.uk/matches/fixtures/">https://www.bwfc.co.uk/matches/fixtures/<a/></p>
                    
                `
            ]
        },
        {
            id: 'unearthed',
            title: 'BBC Unearthed',
            clientName: 'BBC',
            type: 'web',
            className: 'unearthed-background',
            imgUrl: './dist/images/unearthed.jpg',
            highlighted: true,
            text: [
                `
                <p>Unearthed was an interactive experience that followed the story of the hummingbirds struggle to survive.</p>

                <p>It was a pilot built in collaboration with BBC Connected Studios for their BBC Taster programme which is the home for their new ideas.</p>
                
                <p>The pilot consists of a few interactive scenes:

                    <ul>
                        <li>Tutorial introduction</li>
                        <li>3D panaoramic video with binaural audio</li>
                        <li>Interactive video sequences</li>
                        <li>Narrated video sequences which stitched the experience together
                    </ul>
                </p>

                <p> As the sole developer on the project I worked closely with our Media and Motion graphics designer to craft each interactive element.
                I first built a custom interactive timeline framework that allowed us to stitch together the various scenes into a coherent experience. 
                The binaural audio was achieved through the use of the web audio API and we coordinated with sound designer Richard de Mowbray to get the most out of the assets.

                <p>Winner of Best Immersion at BIMA Awards 2016</p>

                <p>Nominated for Grand Prix at BIMA Awards 2016</p>
                <p>Related article: <a href="https://www.bbc.co.uk/taster/pilots/unearthed">https://www.bbc.co.uk/taster/pilots/unearthed</a></p>
                `
            ]
        },

        {
            id: 'royal-london',
            title: 'Royal London',
            clientName: 'Royal London',
            type: 'web',
            className: 'royal-london-background',
            imgUrl: './dist/images/royal-london.png',
            text: [
                `
                <p>I spent the first 14 months of my employment with Realise on site at Royal Londons offices. There I was part of a team of developers working on Royal Londons rebranding. One particular highlight was the navigation system which consisted of a grid of boxes of various sizes with interesting CSS transitions. 
                The sub items needed to grow and expand to cover the parent boxes in a pleasing manner.</p>
                <p>Relevant technologies: Bootstrap 3, Angular 1.x </p>
                <p>Link: <a href="https://www.royallondon.com/">https://www.royallondon.com/<a/></p>
                `
            ]

        },
        {
            id: 'syfy',
            title: 'Syfy Channel 20th Anniversary game',
            clientName: 'Syfy',
            imgUrl: './dist/images/syfy20.jpg',
            type: 'web',
            className: 'syfy-background',
            overlayContent: '<div class="c-overlay__image syfy-gif-background"></div>',
            text: [
                `
                    <p>In partnership withh Picnic Studio we built an interactive "Where's wally?" style scene to celebrate the Syfy channels 20th anniversary.  
                    The scene was littered with loads of popular science fiction references such as Doctor Who and Battlestar Gallactica.</p> 
                    <p>It was up to the user to search and find every reference. A major consideration on this scene was browser rendering performance, 
                    since it was effectively a single huge image. Leveraging image compression and using 3D transforms to make use the users GPU helped. 
                    We also had to do a large amount of device testing and iteration to make sure it was responsive across all browsers and devices.</p>
                `
            ]
        },
        {
            id: 'ghost',
            title: 'Ghost train builder',
            clientName: 'Ghost Train Builder',
            type: 'web',
            className: 'ghost-background-2',
            imgUrl: './dist/images/ghost-train-mag.jpg',
            overlayContent: `
                <div class="c-overlay__image ghost-background"></div>
            `,
            text: [
                `Ghost train builder was a side project we worked on for a few months leading up to Halloween. 
                At the time we were keen to explore the Aframe framework and came up with this idea of a user being able to customise their own Ghost train ride.
                My responsibilities on the project included building 3D models for the rooms, rides and monsters but also a lot of the JavaScript to make the cart follow its course.`,
                `A few years prior to this project I had worked on another side project to allow for the setup of simple scenes in ThreeJS through AngularJS directives. 
                So it was refreshing to use a framework that was developed along the same ideals. Because models could be defined by HTML, this allowed anyone on the team regardless of 3D experience to manipulate the levels.`,
                `The core idea behind this was to uv unwrap all the building blocks onto a single texture and then swap these textures out to skin each room dynamically. The user had limited choices on lighting, theme and the monsters that would pop up.`,
                `Featured in net magazine issue 291 April 2017`,
                `Relevant technologies: <br/> <ul><li>Vue.js</li><li>Aframe</li><li>Three.js</li></ul>`,
                `<a href="http://ghosttrainbuilder.com/">http://ghosttrainbuilder.com/</a>`

            ]
        },
        { id: 'bird', title: 'Steller\'s Jay', type: 'sketchfab', src: 'https://sketchfab.com/models/9cfe5bd6f132405fbf48bd004fa688bd/embed?autospin=0.2&amp;preload=1&amp;transparent=0' },
        {
            id: 'advent',
            title: 'Team Advent Calendar',
            clientName: 'TUX 2019 Advent Calendar',
            type: 'web',
            className: 'advent-background',
            imgUrl: './dist/images/advent-calendar.png',
            text: [
                `
                    <p>On the lead up to Christmas 2019 a few members of the team decided to band together to organise a team advent calendar.</p>

                    <p>The team were give a simple brief; to supply a fixed-size picture, animation or experience that conformed to a selected colour palette.
                    The submissions were revealed to company one by one every day in december leading up to Christmas day.
                    </p>

                    <p>The entries were stored on the server behind GUID based urls to make it harder for pesky web developers to guess them and find someones submission early. 
                    I decided to update the content and configuration via a FireBase database, which was pulled in using a NodeJS server and rendered server side to again prevent any cheating.</p>

                    <p>The event was well recieved and we got quite a lot of entries from the team which was a great way to end the year.</p>
                    <p>Relevant technologies: Firebase, NodeJS </p>
                    <p>Link: <a href="https://tux-advent-calendar.azurewebsites.net/">https://tux-advent-calendar.azurewebsites.net/<a/></p>
                `
            ]
        },
        { id: 'plant', title: 'Potted plant', type: 'sketchfab', src: 'https://sketchfab.com/models/e92dd6ae7eb242018642bb40a91e744e/embed?autospin=0.2&amp;autostart=0&amp;transparent=0' },
        {
            id: 'island',
            title: 'Procedural Islands',
            clientName: 'Procedural Islands',
            highlighted: false,
            type: 'web',
            className: 'island-background',
            imgUrl: './dist/images/islands.png',
            overlayContent: `
                <iframe src="./proc-islands"></iframe>
            `,
            text: [
                `
                <p>Procedural generation is something that has always interested me. Particularly the blend between crafted experiences and procedural generation. I've had some experience using the Unity game engine to craft little procedural planets.</p>
                <p>I was really keen on taking this concept to the browser and trying my hand at a few techniques using ThreeJS.</p>
                <p>I made use of perlin.js to generate a number of different noise textures which were merged together to build a heightmap.
                I then translated this heightmap into geometry and used a custom shader with some simple rules such as height or slope angle to paint the terrain with some simple colours to represent rock or grass.</p>
                <p>One element I particularly loved was generating new islands by hitting spacebar and watching the islands blend between the different states. This was done by capturing the height data of both states then blending between them over time. Since the colouring was calculated by the shader, this gave a nice effect during the blend.
                `
            ]

        },
        { id: 'pila', title: 'Pila', type: 'sketchfab', src: 'https://sketchfab.com/models/ace7d3e35fea473599e10d2c62e7ab56/embed?autospin=0.2&amp;preload=1&amp;transparent=0' },
        {
            id: 'landscape',
            title: 'Low Poly Environment',
            type: 'web',
            clientName: 'Green valley',
            imgUrl: './dist/images/pila-background.jpg',
            className: 'pila-background',
            text: [
                `
                <p>This was a challenge that I set myself to push my experience in building out environments. 
                I was inspired by works of art that looked incredibly complex but when analysed closer you could see that actually the scene was made up of a very small number of unique assets.</p>

                <p>The entire scene was built in Blender with mostly simple low poly style objects. I made heavy use of Blenders hair particle system to place all the trees and individual small objects like stones and grass.
                    This was a huge time saver, I just made sure to mask the areas of generation by grouping together the vertices and passing those through to the particle system.
                </p>

                <p>Relevant technologies: Blender </p>
                <p>Link: <a href="https://www.artstation.com/artwork/oGLJO">https://www.artstation.com/artwork/oGLJO<a/></p>
                `
            ]
        },
        { id: 'weasel', title: 'Weasel character art', type: 'sketchfab', src: 'https://sketchfab.com/models/a995319e79e84c6a8df1ed8e5d3a58b0/embed?autospin=0.2&amp;preload=1&amp;transparent=0' },
        {
            id: 'rice',
            title: 'Rice ball illustration',
            type: 'web',
            className: 'rice-background',
            imgUrl: './dist/images/joe-mcdowall-itadakimasu.jpg',
            clientName: '2D Illustration'
        },
        {
            id: 'gea',
            title: 'Halifax: Giving Extra Awards',
            type: 'web',
            clientName: 'Halifax',
            className: 'gea-background',
            imgUrl: './dist/images/gea-map.jpg',
            highlighted: true,
            overlayContent: '<div class="c-overlay__image gea-background-2"></div>',
            text: [
                `
                <p>In 2015 I worked on the front end build for the Halifax Giving Extra Awards. My favourite part of this site was the google map integration to show all the nominees and award winners.</p>
                <p>In that year I had witnessed another map built for another client that really wasn't performing to expectations so for this map I decided that performance was going to be a primary consideration.</p>
                <p>This was achieved in two ways:</p>
                <ul>
                <li>Clustering</li>
                <li>A quadtree data structure</li>
                </ul>
                <p>The map was split up in to 4 equal chunks recursively so that within each chunk that same division happened again until there were no nodes left. This made finding pins for a particlar area, or geolocation bounds very fast. </p>
                
                `
            ]

        },

        {
            id: 'green-city',
            title: 'BBC Green City',
            clientName: 'BBC',
            type: 'web',
            className: 'green-city-background',
            imgUrl: './dist/images/green-city.png',
            highlighted: true,
            text: [
                `
            <p>
            This piece of work was the first commerical project I've worked on where I didn't write any code. 
            The BBC were looking for a short video sequence of a prototype scene that demonstrated their green city idea. 
            The project had a really tight turn around and we had to deliver something in less than two weeks.
            </p>

            <p>For speed I used a Blender addon called "BLAM" which provides guided perspective matching which allowed me to match the scenes camera to the perspective used in a storyboard.
            This allowed me to quickly block out the scene with simple primitive shapes to get a sense of scale.</p>
            
            <p>From that block-out I built two versions of the city using a colour palette provided by our designer. 
            The first version was a congested, polluted, smoggy scene and the other was filled with greenery and open spaces.
            A camera animation sequence was captured for each city version and then composited together by our motion graphics designer.</p>

            `
            ]
        },
        {
            id: 'rlgol',
            clientName: 'Game of life',
            title: 'Coding exercise: Game Of Life',
            type: 'web',
            className: 'game-of-life',
            imgUrl: './dist/images/rl-game-of-life.png',
            overlayContent: '<div class="c-overlay__image game-of-life-gif"></div>'
        },
        {
            id: 'scottish-widows',
            clientName: 'Scottish Widows',
            imgUrl: './dist/images/scottish-widows.png',
            title: 'Scottish Widows',
            type: 'web',
            className: 'scottish-widows-background'
        },

        {
            id: 'su2c',
            clientName: 'Stand Up To Cancer',
            imgUrl: './dist/images/su2c.png',
            title: 'Stand Up To Cancer: Hackathon',
            type: 'web',
            className: 'su2c-background'
        },

        {
            id: 'heathrow',
            clientName: 'Heathrow',
            imgUrl: './dist/images/heathrow.png',
            title: 'Heathrow - Kids go free',
            type: 'web',
            className: 'heathrow-background'
        },
        {
            id: 'lions',
            clientName: 'Standard Life Investments',
            imgUrl: './dist/images/lions.png',
            title: 'Lions 2017 Tour',
            type: 'web',
            className: 'lions-background'
        },
        {
            id: 'ssiesta',
            clientName: 'Naked Wines',
            imgUrl: './dist/images/ssiesta.png',
            title: 'Naked Wines: Supermarket Siesta',
            type: 'web',
            className: 'ssiesta-background'
        },
        {
            id: 'rl-theatre',
            clientName: 'Royal London',
            imgUrl: './dist/images/rl-theatre.jpg',
            title: 'Royal London: Theatre Of Life',
            type: 'web',
            className: 'theatre-background',
            overlayContent: '<div class="c-overlay__image theatre-background-2"></div>',
            highlighted: true,
            text: [
                `
                <p>Royal London's Theatre of Life was an interactive piece which was put together to teach customers about life insurance before they made their application. It was mainly done using layered gifs/PNG sequences and CSS3 animations all orchestrated by a little bit of timeline JavaScript.</p>
            `
            ]
        }
    ]
};