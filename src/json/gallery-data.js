export default {
    tiles: [
        {
            id: 'bella',
            title: 'Bella & Duke',
            clientName: 'Bella & Duke',
            type: 'web',
            className: 'bella-background',
            imgUrl: './images/bella.png',
            highlighted: true,
            text: [
                `
                <p>After completing my work with LBG, I was invited to become Tech Lead for Bella & Duke, a smaller client. B&D was looking to transform their business from a raw pet food supplier to a customer-centric company dedicated to pet wellness.</p>

                <p>I created a technical options paper that analysed all requirements from the service map and new designs. I proposed moving the company to a more modern framework and the decision was made to build the new site with Next.js using a standalone component library using Material UI and displayed in Storybook.</p>

                <p>I supported the initial build and devops as well as leading a small team, including a client Engineer with zero React experience.</p>

                <p>My role included:
                 <ul>
                    <li>Setting the technical direction for the project</li>
                    <li>Implementation of a component library</li>
                    <li>Planning and implementing devops pipelines</li>
                    <li>Shared responsibility for delivering each sprint of work</li>
                    <li>Introducing testing to the development workflow</li>
                    <li>Championing best practice</li>
                    <li>Code reviews</li>
                    <li>Paired programming</li>
                    <li>Upskilling client developer on react/nextjs</li>
                 </ul>
                </p>
                <br/><br/>
                `

            ]
        },
        {
            id: 'lbg',
            title: 'Lloyds Banking Group',
            clientName: 'Lloyds Banking Group',
            type: 'web',
            className: 'lbg-background',
            imgUrl: './images/lbg.png',
            highlighted: true,
            text: [
                `
                <p>Shortly after starting with AND Digital, I was assigned to lead one of the Feature Teams within one of the bank's Digital “Labs:. I initially came to AND as a Senior Developer, but there was an immediate need for a Tech Lead on their first major Client. I volunteered for the position, leveraging my experience in leadership.</p>

                <p>For two years, I led team "Ganon" in the creation of a set of core microservices and supporting React front ends for the banks pension platform. I liaised with bank Stakeholders, Architects and other Engineering Leads to help shape the technical landscape. One of my key contributions was assisting them to develop a security policy and process around package vulnerabilities.</p>
                
                <p>I adopted a Servant Leadership approach with my team, prioritising their growth and well-being. I was very invested in the personal and professional development of my fellow engineers, supporting and enabling them.</p>
                 
                <p>My role included:
                 <ul>
                    <li>Shared responsibility for delivering each sprint of work</li>
                    <li>Championing best practice</li>
                    <li>Code reviews</li>
                    <li>Paired programming</li>
                    <li>Facilitating and attending technical leadership and architecture forums</li>
                    <li>Supporting the growth of engineers in my team and lab</li>
                    <li>Improving security and devops practices</li>
                    <li>Improving testing with E2E and Contract tests</li>
                    <li>Liasing with different labs and microservice consumers</li>
                    <li>Coaching other engineers in AND</li>
                 </ul>
                </p>
                <br/><br/>
                `

            ]
        },
        {
            id: 'lexus',
            title: 'Lexus',
            clientName: 'Lexus',
            type: 'web',
            className: 'lexus-background',
            imgUrl: './images/lexus.png',
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
            id: 'pokedex',
            title: 'Create React App: Pokedex',
            type: 'web',
            className: 'pokedex-background',
            imgUrl: './images/pokedex.png',
            clientName: 'Pokédex',
            highlighted: false,
            text: [
                `
                    <p>To refresh my memory on React I spent a few nights building a little Create React App using an interesting Pokemon API that I stumbled upon.</p>
                    <p>The API is rate limited to 100 request per minute and you can only pull down one Pokemons data at a time. 
                    This proved to be quite laborious to request client side. So I built a nodeJS API middle layer that queued up requests using a throttled queue and cached mapped results into a local JSON file for quick access.  </p>
                    <p>The app itself is a standard Create React App with redux managing the state. I had a lot of fun building this out, a few highlights include:</p>
                    <ul>
                    <li>A tree data structure for fast name lookups for pokemon</li>
                    <li>A generic merge sort.</li>
                    <li>Use of an Intersection Observer high order component to only render images currently in the view port.</li>

                    <p>With more time I would love to improve the performance of rendering 807 cards!</p>

                    <p>Link: <a href="https://jm-pokedex.azurewebsites.net/">https://jm-pokedex.azurewebsites.net/</a></p>
                    <p>Github: <a href="https://github.com/MacDoland/pokedex">https://github.com/MacDoland/pokedex/</a></p>
                    <p>PokeAPI: <a href="https://pokeapi.co/">https://pokeapi.co/</a></p>
                
                `
            ],

        },
        {
            id: 'island',
            title: 'Procedural Islands',
            clientName: 'Procedural Islands',
            highlighted: false,
            type: 'web',
            className: 'island-background',
            imgUrl: './images/islands.png',
            text: [
                `
                <p>Procedural generation is something that has always interested me. Particularly the blend between crafted experiences and procedural generation. I've had some experience using the Unity game engine to craft little procedural planets.</p>
                <p>I was really keen on taking this concept to the browser and trying my hand at a few techniques using ThreeJS.</p>
                <p>I made use of perlin.js to generate a number of different noise textures which were merged together to build a heightmap.
                I then translated this heightmap into geometry and used a custom shader with some simple rules such as height or slope angle to paint the terrain with some simple colours to represent rock or grass.</p>
                <p>One element I particularly loved was generating new islands by hitting spacebar and watching the islands blend between the different states. This was done by capturing the height data of both states then blending between them over time. Since the colouring was calculated by the shader, this gave a nice effect during the blend.</p>
                <p>Github: <a href="https://github.com/MacDoland/js-procedural-island">https://github.com/MacDoland/js-procedural-island</a></p>
                `
            ],
            overlayContent: `
            
            <iframe src="https://player.vimeo.com/video/885683570?h=ae49c8a832" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

            
            `

        },
        {
            id: 'sailgp',
            title: 'SailGP',
            clientName: 'SailGP',
            imgUrl: './images/sailgp.png',
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
            imgUrl: './images/pila-background.jpg',
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
            imgUrl: './images/funeral-mapper.png',
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
            imgUrl: './images/efl-match-center.jpg',
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
            imgUrl: './images/unearthed-use.jpg',
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
            id: 'syfy',
            title: 'Syfy Channel 20th Anniversary game',
            clientName: 'Syfy',
            imgUrl: './images/syfy20.jpg',
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
            id: 'royal-london',
            title: 'Royal London',
            clientName: 'Royal London',
            type: 'web',
            className: 'royal-london-background',
            imgUrl: './images/royal-london.png',
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
            id: 'ghost',
            title: 'Ghost train builder',
            clientName: 'Ghost Train Builder',
            type: 'web',
            className: 'ghost-background-2',
            imgUrl: './images/ghost-train-mag.jpg',
            overlayContent: `
                <div class="c-overlay__image ghost-background"></div>
            `,
            text: [
                `<p>Ghost train builder was a side project we worked on for a few months leading up to Halloween. 
                At the time we were keen to explore the Aframe framework and came up with this idea of a user being able to customise their own Ghost train ride.
                My responsibilities on the project included building 3D models for the rooms, rides and monsters but also a lot of the JavaScript to make the cart follow its course.</p>
                <p>A few years prior to this project I had worked on another side project to allow for the setup of simple scenes in ThreeJS through AngularJS directives. 
                So it was refreshing to use a framework that was developed along the same ideals. Because models could be defined by HTML, this allowed anyone on the team regardless of 3D experience to manipulate the levels.</p>
                <p>The core idea behind this was to uv unwrap all the building blocks onto a single texture and then swap these textures out to skin each room dynamically. The user had limited choices on lighting, theme and the monsters that would pop up.</p>
                <p>Featured in net magazine issue 291 April 2017</p>
                <p>Relevant technologies: <br/> <ul><li>Vue.js</li><li>Aframe</li><li>Three.js</li></ul></p>
                <p><a href="http://ghosttrainbuilder.com/">http://ghosttrainbuilder.com/</a></p>`

            ]
        },
        {
            id: 'advent',
            title: 'Team Advent Calendar',
            clientName: 'TUX 2019 Advent Calendar',
            type: 'web',
            className: 'advent-background',
            imgUrl: './images/advent-calendar.png',
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

        {
            id: 'gea',
            title: 'Halifax: Giving Extra Awards',
            type: 'web',
            clientName: 'Halifax',
            className: 'gea-background',
            imgUrl: './images/gea-map.jpg',
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
            imgUrl: './images/green-city.png',
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
            className: 'game-of-life-gif',
            imgUrl: './images/rl-game-of-life.png',
            overlayContent: '<div class="c-overlay__image game-of-life-gif"></div>',
            text: [
                `
                    <p></p>
                    <p>In feburary 2018 I set a challenge to the team to build an interactive project in collaborative isolation. Each entrant was given a number of isolated problems to solve that once combined with other peoples pieces put together to solve the solution.</p>
                    <p>The tasks ranged in complexity and the entrants were given the option to indicate how much involvement they wanted. This mean that most people were able to contribute, whereas in the past they may have resisted due to the levels of commitement.</p> 
                    <p>Often having completed their task the entrant would ask for another, and so there were a number of duplicate tasks, but that was fine. This challenge hinged on setting out well described requirements, and each task was sent to individuals in secret.</p>
                    <p>Once all the entries were in we place the functions in a folder, and due to carefully selected naming and exporting of the functions we revealed the final solution, which was the game of life.</p>
                    <p><a href="https://github.com/MacDoland/realise-feb-2018-challenge">https://github.com/MacDoland/realise-feb-2018-challenge</a></p>
                `
            ]
        },
        {
            id: 'scottish-widows',
            clientName: 'Scottish Widows',
            imgUrl: './images/scottish-widows.png',
            title: 'Scottish Widows',
            type: 'web',
            className: 'scottish-widows-background'
        },

        {
            id: 'su2c',
            clientName: 'Stand Up To Cancer',
            imgUrl: './images/su2c.png',
            title: 'Stand Up To Cancer: Hackathon',
            type: 'web',
            className: 'su2c-background'
        },

        {
            id: 'heathrow',
            clientName: 'Heathrow',
            imgUrl: './images/heathrow.png',
            title: 'Heathrow - Kids go free',
            type: 'web',
            className: 'heathrow-background'
        },
        {
            id: 'lions',
            clientName: 'Standard Life Investments',
            imgUrl: './images/lions.png',
            title: 'Lions 2017 Tour',
            type: 'web',
            className: 'lions-background'
        },
        {
            id: 'ssiesta',
            clientName: 'Naked Wines',
            imgUrl: './images/ssiesta.png',
            title: 'Naked Wines: Supermarket Siesta',
            type: 'web',
            className: 'ssiesta-background'
        },
        {
            id: 'rl-theatre',
            clientName: 'Royal London',
            imgUrl: './images/rl-theatre.jpg',
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