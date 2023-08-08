let name = document.querySelector("#name");
let image = document.querySelector("#img");
let bio = document.querySelector("#bio");
let work = document.querySelector("#work");
let flecheg = document.querySelector("#flecheGauche");
let fleched = document.querySelector("#flecheDroite");
let btn = document.querySelector("#btnSupriseMe");

let infos = [
    {
        "name" : "Esoalahy Josefa",
        "image" : "./img1.jpg",
        "work" : "DEVELOPEUR BACK-END",
        "bio"  : "En tant que développeur back-end passionné par la logique et les fondations techniques qui soutiennent les applications web, je suis déterminé à créer des systèmes robustes et efficaces. Mon expertise réside dans la conception et la mise en œuvre de l'architecture de serveur, la gestion des bases de données et la création d'APIs performantes. Fort de mon expérience dans des langages tels que Python, Java, Ruby, et des frameworks comme Django, Spring et Ruby on Rails, je suis capable de transformer des idées complexes en fonctionnalités fonctionnelles et sécurisées. Je suis habitué à travailler en étroite collaboration avec des équipes de développement et des designers pour garantir une expérience utilisateur harmonieuse. Mon objectif est d'optimiser les performances, la sécurité et la scalabilité des applications tout en maintenant une base de code propre et bien documentée. Toujours curieux des dernières innovations et tendances du développement back-end, je m'efforce de rester à jour avec les meilleures pratiques de l'industrie pour offrir des solutions fiables et évolutives."
    },
      {
        "name" : "Navony",
        "image" : "./img2.jpg",
        "work" : "DEVELOPEUR FRONT-END",
          "bio" : "Passionné par l'intersection de la créativité et de la technologie, je suis un développeur front-end dédié à créer des expériences web exceptionnelles. Avec une solide expertise dans les langages de programmation tels que HTML, CSS et JavaScript, je m'efforce toujours de traduire les concepts de design en interfaces interactives et conviviales. Mon parcours professionnel inclut la collaboration avec des équipes multidisciplinaires pour concevoir et mettre en œuvre des solutions élégantes et performantes. Toujours à l'affût des dernières tendances et innovations dans le domaine, j'aspire à apporter ma contribution à des projets qui repoussent les limites de l'expérience utilisateur. Mon objectif est de créer des sites web réactifs et esthétiquement attrayants, tout en assurant une expérience utilisateur fluide et intuitive. Passionné par l'apprentissage continu, je suis constamment en train d'améliorer mes compétences et de me tenir informé des évolutions de l'industrie du développement front-end."
    },
      {
        "name" : "Romeo",
        "image" : "./img3.jpg",
        "work" : "DEVELOPEUR BLOCKCHAIN",
          "bio" : "En tant que développeur passionné par la révolution technologique de la blockchain, je suis engagé à créer des solutions décentralisées et sécurisées. Mon expertise couvre la conception et le développement d'applications blockchain, la création de contrats intelligents et la mise en œuvre de solutions de consensus. J'ai acquis une solide maîtrise des langages de programmation tels que Solidity pour Ethereum et des frameworks comme Hyperledger Fabric. Mon expérience me permet de transformer des idées novatrices en réalités techniques, tout en garantissant la confidentialité et l'intégrité des données. Je suis habitué à collaborer avec des équipes multidisciplinaires pour créer des solutions transparentes et traçables, tout en restant attentif aux défis de la sécurité et de l'évolutivité. Passionné par l'exploration continue des possibilités de la blockchain, je reste à jour avec les développements les plus récents pour offrir des solutions blockchain avancées et fiables."
    },
      {
        "name" : "FANOMEZA",
        "image" : "./img4.jpg",
        "work" : "DEVELOPEUR WORDPRESS",
          "bio" :"En tant que développeur expérimenté et passionné par l'écosystème WordPress, je suis dédié à la création de sites web esthétiques, fonctionnels et conviviaux. Mon expertise englobe la personnalisation de thèmes et de plugins, la création de sites web réactifs et la résolution de problèmes techniques. J'ai une solide maîtrise des langages tels que HTML, CSS, PHP et JavaScript, ainsi qu'une connaissance approfondie du CMS WordPress. Mon expérience me permet de collaborer efficacement avec des designers et des équipes de contenu pour transformer des concepts créatifs en sites web pratiques et attrayants. Je suis attaché à fournir des solutions évolutives et performantes, en veillant à ce que les sites WordPress que je développe offrent une expérience utilisateur fluide et intuitive. Toujours à l'affût des dernières tendances et des meilleures pratiques, je m'efforce de fournir des sites web de haute qualité qui répondent aux besoins uniques de chaque projet."
    },
      {
        "name" : "Elinah",
        "image" : "./img5.jpg",
        "work" : "DESIGNER",
          "bio" : "Je suis un designer créatif passionné par l'art de la visualisation et de la communication visuelle. Mon approche artistique et innovante m'a permis de collaborer sur une variété de projets, allant de la conception graphique au design d'interface utilisateur en passant par le design de produits. Mon expertise couvre la création de logos, d'illustrations, de maquettes et de prototypes interactifs. J'ai une solide maîtrise des outils tels que Adobe Creative Suite, Sketch et Figma, ainsi qu'une compréhension profonde des principes de conception et des tendances actuelles. Mon objectif est de traduire des idées abstraites en visuels saisissants qui captivent et engagent le public. Je travaille en étroite collaboration avec des équipes multidisciplinaires pour garantir que la vision créative se traduise de manière cohérente à travers chaque élément du projet. Toujours en quête de perfectionnement, je m'efforce de repousser les limites de la créativité pour créer des expériences visuelles mémorables et impactantes."
    },

];

let i = 1;

window.addEventListener("load", ()=>{
    bio.innerText = infos[0].bio;
    work.innerText = infos[0].work;
    name.innerText = infos[0].name;
    image.src = infos[0].image;
})

function suivant(){
    if (i<infos.length){
        bio.innerText = infos[i].bio;
        work.innerText = infos[i].work;
        name.innerText = infos[i].name;
        image.src = infos[i].image;
        i++;
    }
    else {
        i=0;
    }
}

function precedent(){
    if (i<infos.length){
        bio.innerText = infos[i].bio;
        work.innerText = infos[i].work;
        name.innerText = infos[i].name;
        image.src = infos[i].image;
        i--;
        if (i<0){
            i = 0;
        }
    }
    else {
        alert("aem");
    }
}

function suprise(){
    let random = Math.floor(Math.random()*infos.length);
     if (i<infos.length){
        bio.innerText = infos[random].bio;
        work.innerText = infos[random].work;
        name.innerText = infos[random].name;
        image.src = infos[random].image;
    }
    else {
        i=0;
    }

}

fleched.addEventListener("click", suivant);
flecheg.addEventListener("click", precedent);
btn.addEventListener("click", suprise)