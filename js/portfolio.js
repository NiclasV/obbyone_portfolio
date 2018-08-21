class frontendItem {
    constructor(title, description, group, type, codeLang, github, live, image) {
        this.title = title;
        this.description = description;
        this.group = group;
        this.type = type;
        this.codeLang = codeLang;
        this.github = github;
        this.live = live;
        this.image = image;
    }
}

class designItem {
    constructor(title, description, group, image) {
        this.title = title;
        this.description = description;
        this.group = group;
        this.image = image;
    }
}

class photo {
    constructor(url, text){
        this.url = url;
        this.title = text;
        this.group = "Photo";
    }
}

createModule = {

    frontendWorks: function() {

        let portfolio = [];

        let watchList = new frontendItem("WatchList", "Ett litet sommarprojekt, skapa filmlistor med möjlighet att söka fram filmtitlar för att lägga till i sina listor. Gjort med OMDB-api",
        "Front-end", "Privat projekt", "HTML, CSS, Javascript", "https://github.com/NiclasV/myWatchlist", "http://obbyone.com/watchlist", "images/portfolio/frontend/watchlist.png")
        
        let WhatchuWanDo = new frontendItem("WhatchuWanDo - Todo-list", "Första försöket med Javascript. Todo-lista, lägga till saker att göra. Sparar till localStorage",
        "Front-end", "Skoluppgift - Javascript kurs", "HTML, CSS, Javascript", "https://github.com/NiclasV/todo_javascript", 
        "https://niclasv.github.io/todo_javascript/", "images/portfolio/frontend/todo-list.png")
        
        let rickAndMorty = new frontendItem("Rick and Morty - Ajax", "Första försöket att jobba med ett API, enklare sajt för att få fram information om episoder, platser och karaktärer från serien. PS. Endast characters-sidan jag lagt lite tid på",
        "Front-end", "Skoluppgift - Javascript kurs", "HTML, CSS, Javascript", "https://github.com/NiclasV/ajax_ricknmorty", 
        "https://niclasv.github.io/ajax_ricknmorty/", "images/portfolio/frontend/rickmorty.png")
        
        let reactDashboard = new frontendItem("React - Dashboard", "Första försöket att jobba med React och NodeJS, en dashboard med några egengjorda komponenter",
        "Front-end", "Skoluppgift - Javascript kurs", "HTML, CSS, Javascript (+ NodeJS & React)", "https://github.com/NiclasV/react-dashboard", 
        "https://gyazo.com/8ff697603e91c0cfcc7f858ea4ceb948", "images/portfolio/frontend/dashboard.png")
        
        let musicApp = new frontendItem("Music App", "Grupparbete i att skapa en progressiv web app, \"The Ultimate Playlist\". folksa.ga api har vi utgått ifrån. ",
        "Front-end", "Skoluppgift - Grupparbete - Arbetsmetodik kurs", "HTML, CSS, Javascript", "https://github.com/NiclasV/music_app", null,
        "images/portfolio/frontend/musikapp.png")
        

        let musikInstitutet = new frontendItem("Whatdevs  Musikinstitutet", "Grupparbete att jobba mot musikinstitutets API med fokus på designmönster, MVC samt class/constructors",
        "Front-end", "Skoluppgift - Grupparbete - Javascript kurs", "HTML, CSS, Javascript", "https://github.com/NiclasV/whatdevs_musikinstitutet", 
        "https://niclasv.github.io/", "images/portfolio/frontend/musikinstitutet.png")

        portfolio.push(watchList, WhatchuWanDo, rickAndMorty, reactDashboard, musicApp, musikInstitutet)
        this.addToSessionStorage(portfolio)
    },

    designWorks: () => {
        let portfolio = JSON.parse(sessionStorage.getItem('portfolio'));

        let besafer = new designItem("BeSafer", "Design av wordpress webb", "Webdesign", "images/portfolio/design/besafer.jpg");
        let snaps = new designItem("Snaps Bar & Bistro", "Design av wordpress webb + fotografering", "Webdesign", "images/portfolio/design/snaps.jpg")
        let gronastugan = new designItem("Gröna Stugan", "Design av wordpress webb + fotografering", "Webdesign", "images/portfolio/design/gronastugan.jpg")
        let forexsson = new designItem("Forexsson", "Design av wordpress webb", "Webdesign", "images/portfolio/design/forexsson.jpg")
        let vaznaz = new designItem("Vaznaz bygg", "Design av wordpress webb", "Webdesign", "images/portfolio/design/vaznaz.jpg")
        let elixir = new designItem("Elixir Juicebar", "Design & Branding av webb", "Webdesign", "images/portfolio/design/elixir.jpg")
        portfolio.push(besafer, snaps, gronastugan, elixir, forexsson, vaznaz);

        sessionStorage.setItem("portfolio", JSON.stringify(portfolio));


    },

    photos: () => {
        let portfolio = JSON.parse(sessionStorage.getItem('portfolio'));

        let photo1 = new photo("images/portfolio/photos/FBlina_obbyone_diabloorganics_1.jpg", "Lina");
        let photo2 = new photo("images/portfolio/photos/FBlina_obbyone_diabloorganics_2.jpg", "Lina");
        let photo3 = new photo("images/portfolio/photos/FBlina_obbyone_diabloorganics_3.jpg", "Lina");
        let photo4 = new photo("images/portfolio/photos/FBlina_obbyone_diabloorganics_4.jpg", "Lina");
        let photo5 = new photo("images/portfolio/photos/IMG_0668.jpg", "Random cat");
        let photo6 = new photo("images/portfolio/photos/IMG_1861.jpg", "Snaps bar");
        let photo7 = new photo("images/portfolio/photos/IMG_1889.jpg", "Serverad öl hos Snaps");
        let photo8 = new photo("images/portfolio/photos/IMG_1899.jpg", "Brooklyn beer");
        let photo9 = new photo("images/portfolio/photos/IMG_2687.jpg", "Blommor på Gröna Stugan");
        let photo10 = new photo("images/portfolio/photos/IMG_2739.jpg", "Gröna Stugan");
        let photo11 = new photo("images/portfolio/photos/IMG_3243.jpg", "Stadshuset by Night");
        let photo12 = new photo("images/portfolio/photos/IMG_4178.jpg", "Kenny AKA FunkMechanic");
        let photo13 = new photo("images/portfolio/photos/kimjohn.jpg", "Kim & John");
        let photo14 = new photo("images/portfolio/photos/leo_audi.jpg", "Gonzo + en Audi");
        let photo15 = new photo("images/portfolio/photos/max_shalini_2.jpg", "Max & Shalini bröllop");
        let photo16 = new photo("images/portfolio/photos/max_shalini_4.jpg", "Jimmy & Max - Bestman");
        let photo17 = new photo("images/portfolio/photos/max_shalini_5.jpg", "Jimmy & Max - Bestman 2");
        let photo18 = new photo("images/portfolio/photos/max_shalini_6.jpg", "Shalini & The girls");
        let photo19 = new photo("images/portfolio/photos/nynasvagen.jpg", "Farsta by Night");
        let photo20 = new photo("images/portfolio/photos/photobyobbyoneig.jpg", "obbyone photography promo");
        let photo21 = new photo("images/portfolio/photos/samuel.jpg", "Samuel");
        let photo22 = new photo("images/portfolio/photos/shan.jpg", "Shan");
        let photo23 = new photo("images/portfolio/photos/boardwalk-drevviken-farg.jpg", "Boardwalk Drevviken")
        let photo24 = new photo("images/portfolio/photos/subaruwrx-sti_1.jpg", "Subaru WRX STI -18")
        let photo25 = new photo("images/portfolio/photos/subaruwrx-sti_2.jpg", "Subaru WRX STI -18")
        let photo26 = new photo("images/portfolio/photos/subaruwrx-sti_3.jpg", "Subaru WRX STI -18")
        let photo27 = new photo("images/portfolio/photos/mazda-mx5_1.jpg", "Mazda MX-5 -17")
        let photo28 = new photo("images/portfolio/photos/mazda-mx5_2.jpg", "Mazda MX-5 -17")
        let photo29 = new photo("images/portfolio/photos/mazda-mx5_3.jpg", "Mazda MX-5 -17")
        let photo30 = new photo("images/portfolio/photos/mazda-mx5_4.jpg", "Mazda MX-5 -17")
        let photo31 = new photo("images/portfolio/photos/benjamin-linus.jpg", "Linus & Benjamin")
        let photo32 = new photo("images/portfolio/photos/benjamin-2.jpg", "Benjamin")
        let photo33 = new photo("images/portfolio/photos/benjamin-1.jpg", "Benjamin")
        let photo34 = new photo("images/portfolio/photos/myrna.jpg", "Myrna")
        let photo35 = new photo("images/portfolio/photos/sille.jpg", "Silver")
        let photo36 = new photo("images/portfolio/photos/sille2.jpg", "Silver")
        let photo37 = new photo("images/portfolio/photos/gonzo.jpg", "Gonzo")

        portfolio.push(photo2, photo11, photo31, photo23, photo13, photo4, photo5, photo6, photo7, photo24, photo1, photo8, photo9, photo34,
        photo29, photo35, photo10, photo3, photo12, photo14, photo32, photo25, photo26, photo15, photo16, photo17, photo27, photo28,
        photo18, photo19, photo36, photo37, photo20, photo21, photo30, photo22, photo33);

        sessionStorage.setItem("portfolio", JSON.stringify(portfolio));
    },

    buttons: (url) => {

        if(url) {
            if(url.startsWith("https://github")){
                return `<a href="${url}" target="_blank"><span class="badge badge-primary"><i class="fab fa-github"></i> 
                Projekt på Github</span></a>`;
            } else {
                return `<a href="${url}" target="_blank"><span class="badge badge-info"><i class="fas fa-desktop"></i> 
                Se projekt live!</span></a>`;
            }
        } else {
            return ``; 
        }
    },

    addToSessionStorage: (portfolio) => {
        sessionStorage.setItem("portfolio", JSON.stringify(portfolio));
    },

    init_: function() {
        this.frontendWorks();
        this.designWorks();
        this.photos();
        displayModule.frontendWorks(); 
        displayModule.designWorks();
        displayModule.photogallery();
    }
}

displayModule = {

    frontendWorks: () => {
        let portfolio =  JSON.parse(sessionStorage.getItem('portfolio'));
        let content = `<h2>Kod / Front-end</h2>`;
        let main = document.getElementsByTagName('main')[0]
        let frontendDiv = document.createElement('div');
        frontendDiv.classList.add('flexbox', 'portfolio-section');

        for (let work of portfolio ) {
            if(work.group === "Front-end") {
                content += `
                <div class="card border-primary mb-3 portfolio-item center">
                    <div class="card-header">
                        <p class="header">${work.title}</p>
                        <small class="form-text text-primary">${work.codeLang}</small>
                    </div>
                    <div class="card-body">
                        <img src="${work.image}" class="img-fluid">
                        <small class="form-text text-primary mb-2">${work.type}</small>
                        <p class="card-text">${work.description}</p>
                        <div class="view-buttons">
                            ${createModule.buttons(work.github)}
                            ${createModule.buttons(work.live)}
                        </div>
                    </div>
                </div>
                `;
            }
        }

        content += `
        <small class="form-text text-primary center" style="margin-top: 10px; margin-bottom: 10px;">Spana in mer kod på min 
        <a href="http://github.com/niclasv/" target="_blank"><span class="badge badge-success">Profil på Github <i class="fab fa-github"></i></span></small>`
        frontendDiv.innerHTML = content;
        main.appendChild(frontendDiv)
    },

    designWorks: () => {
        
        let portfolio = JSON.parse(sessionStorage.getItem('portfolio'));
        let main = document.getElementsByTagName('main')[0];
        let content = `<h2>Design av webbar</h2>`;
        let frontendDiv = document.createElement('div');
        frontendDiv.classList.add('flexbox', 'portfolio-section');

        for (let work of portfolio) {
            if (work.group === "Webdesign") {
                content += `
                <div class="card border-info mb-3 portfolio-item center">
                    <div class="card-header">
                        <p class="header">${work.title}</p>
                        <small class="form-text text-primary">${work.group}</small>
                    </div>
                    <div class="card-body">
                        <div class="webdesign-img-container">
                            <a href="${work.image}" target="_blank"><img src="${work.image}" class="img-fluid portfolio-image"></a>
                        </div>
                        <p class="card-text">${work.description}</p>
                    </div>
                </div>
                `;
            }
        }
        frontendDiv.innerHTML = content;
        main.insertAdjacentElement('beforeend', frontendDiv)
    },

    photogallery: () => {
        let portfolio = JSON.parse(sessionStorage.getItem('portfolio'));
        let main = document.getElementsByTagName('main')[0];
        let header = `<h2>Fotografi</h2>`;
        let content = ``;
        let gridDiv = document.createElement('div');
        let headerDiv = document.createElement('div');
        gridDiv.classList.add('photogallery', 'portfolio-section');
        
        for (let photo of portfolio) {
            if (photo.group === "Photo") {
                content += `
                <div class="photo-wrapper">
                    <img src="${photo.url}" class="img-fluid" alt="${photo.title}">
                    <div class="photo-overlay">
                        <div class="overlay-text"><a href="${photo.url}" target="_blank">${photo.title}</a></div>
                    </div>
                </div>
                `;
            }
        }

        gridDiv.innerHTML = content;
        headerDiv.innerHTML = header;
        main.insertAdjacentElement('beforeend', headerDiv)
        main.insertAdjacentElement('beforeend', gridDiv)

    },

}

createModule.init_()
