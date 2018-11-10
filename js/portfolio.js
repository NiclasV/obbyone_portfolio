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

class webDesignItem {
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

class digitalAds {
    constructor(title, desc, image) {
        this.category = "Digital ad",
        this.desc = desc
        this.title = title, 
        this.image = image,
        this.ads = []
    }
}
class digitalAdItem {
    constructor(type, desc, url, flash) {
        this.type = type,
        this.url = url,
        this.flash = flash,
        this.desc = desc
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

        let besafer = new webDesignItem("BeSafer", "Design av wordpress webb", "Webdesign", "images/portfolio/design/besafer.jpg");
        let snaps = new webDesignItem("Snaps Bar & Bistro", "Design av wordpress webb + fotografering", "Webdesign", "images/portfolio/design/snaps.jpg")
        let gronastugan = new webDesignItem("Gröna Stugan", "Design av wordpress webb + fotografering", "Webdesign", "images/portfolio/design/gronastugan.jpg")
        let forexsson = new webDesignItem("Forexsson", "Design av wordpress webb", "Webdesign", "images/portfolio/design/forexsson.jpg")
        let vaznaz = new webDesignItem("Vaznaz bygg", "Design av wordpress webb", "Webdesign", "images/portfolio/design/vaznaz.jpg")
        let elixir = new webDesignItem("Elixir Juicebar", "Design & Branding av webb", "Webdesign", "images/portfolio/design/elixir.jpg")
        portfolio.push(besafer, snaps, gronastugan, elixir, forexsson, vaznaz);

        sessionStorage.setItem("portfolio", JSON.stringify(portfolio));


    },

    digitalAds: function() {
        let portfolio = JSON.parse(sessionStorage.getItem('portfolio'));

        let batmanArkhamCity = new digitalAds("Batman Arkham City", "Formatanpassningar, framtagning av takeoverlösning", 
        "https://upload.wikimedia.org/wikipedia/en/0/00/Batman_Arkham_City_Game_Cover.jpg");
        let BACBanner = new digitalAdItem("Banner", "300x600", "http://obbyone.com/kampanjer/batman_arkham_city/banner", true);
        let BACTakeover = new digitalAdItem("Takeover", "970x250, 300x250, Wallpaper", "http://obbyone.com/kampanjer/batman_arkham_city/takeover", true);
        batmanArkhamCity.ads.push(BACBanner, BACTakeover);

        let batmanArkhamOrigins = new digitalAds("Batman Arkham Origins", "Formatanpassningar, framtagning av takeoverlösning",
        "https://www.komplett.se/img/p/800/6518253c-15b6-43b4-a15b-eb63c233ac37.jpg");
        let BAOBanner = new digitalAdItem("Banner", "468x1000", "http://obbyone.com/kampanjer/batman_arkham_origins/banner", true)
        let BAOTakeover = new digitalAdItem("Takeover", "1000x300, Wallpaper", "http://obbyone.com/kampanjer/batman_arkham_origins/takeover", true);
        batmanArkhamOrigins.ads.push(BAOBanner, BAOTakeover);

        let boardwalkEmpireS3 = new digitalAds("Boardwalk Empire s3", "Formatanpassningar", 
        "https://images-na.ssl-images-amazon.com/images/I/91p92fa0sqL._SX342_.jpg");
        let BEse = new digitalAdItem("Vanner - SE", "980x480", "http://obbyone.com/kampanjer/boardwalk_empire_s3/se", true)
        let BEdk = new digitalAdItem("Banners - DK", "930x180, 300x250, 160x600", "http://obbyone.com/kampanjer/boardwalk_empire_s3/dk", true) 
        boardwalkEmpireS3.ads.push(BEse, BEdk);

        let cosmopolis = new digitalAds("Cosmopolis", "Framtagning original", 
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Cosmopolis_Poster.jpg/220px-Cosmopolis_Poster.jpg");
        let cosmopolisBanner = new digitalAdItem("Banner", "300x250", "http://obbyone.com/kampanjer/cosmopolis", true )
        cosmopolis.ads.push(cosmopolisBanner);

        let crazyStupidLove = new digitalAds("Crazy Stupid Love", "Formatanpassning", 
        "https://is1-ssl.mzstatic.com/image/thumb/Video18/v4/96/47/c5/9647c5a5-656d-52c1-85aa-fc2e6e83faf9/pr_source.lsr/1200x630bb.png");
        let crazyStupidLoveBanner = new digitalAdItem("Banner", "180x500", "http://obbyone.com/kampanjer/crazy_stupid_love", true );
        crazyStupidLove.ads.push(crazyStupidLoveBanner);

        let finalDestination5 = new digitalAds("Final Destination 5", "Formatanpassning",
        "https://m.media-amazon.com/images/M/MV5BMTgyOTExNDc1M15BMl5BanBnXkFtZTcwMDA0MTA4NQ@@._V1_.jpg");
        let finalDestination5Banner = new digitalAdItem("Banners", "728x90, 468x400", "http://obbyone.com/kampanjer/final_destination_5/se", true );
        finalDestination5.ads.push(finalDestination5Banner);

        let helloGotland = new digitalAds("Hello Gotland", "Framtagning av original", 
        "http://obbyone.com/kampanjer/hellogotland/hg_300x400.jpg");
        let helloGotlandBanners = new digitalAdItem("JPG Banners", "300x300, 300x400, 700x250, 700x400", "http://obbyone.com/kampanjer/hellogotland/", false);
        helloGotland.ads.push(helloGotlandBanners);

        let imStillHere = new digitalAds("Im Still Here", "Formatanpassning",
        "https://m.media-amazon.com/images/M/MV5BNTE5NjA2NzM5Ml5BMl5BanBnXkFtZTcwODg5NTE3Mw@@._V1_.jpg");
        let imStillHereBanner = new digitalAdItem("Banner", "250x360", "http://obbyone.com/kampanjer/im_still_here/", true);
        imStillHere.ads.push(imStillHereBanner);

        let infiniteCrisis = new digitalAds("Infinite Crisis", "Formatanpassningar",
        "https://media.moddb.com/images/games/1/25/24871/boxshot.jpg");
        let infiniteCrisisBanner = new digitalAdItem("Banners", "628x300, 1100x300, 260x600", "http://obbyone.com/kampanjer/infinite_crisis/se/", true);
        infiniteCrisis.ads.push(infiniteCrisisBanner);

        let ironClad = new digitalAds("Ironclad", "Framtagning original",
        "http://www.medievalists.net/wp-content/uploads/2009/08/ironclad-officialposter.jpg"); 
        let ironCladBanner = new digitalAdItem("Banner", "728x90", "http://obbyone.com/kampanjer/ironclad/banner/", true);
        let ironCladEannounce = new digitalAdItem("E-Announce", "E-announce", "http://obbyone.com/kampanjer/ironclad/eannounce/", false);
        ironClad.ads.push(ironCladBanner, ironCladEannounce);

        let killList = new digitalAds("Kill list", "Framtagning av original", 
        "http://cinemadan.com/blog/wp-content/uploads/2012/03/kl.jpg");
        let killListBanner = new digitalAdItem("Banner", "728x90", "http://obbyone.com/kampanjer/kill_list/banner/", true);
        let killListEannounce = new digitalAdItem("E-Announce", "Eannounce", "http://obbyone.com/kampanjer/kill_list/eannounce", false);
        killList.ads.push(killListBanner, killListEannounce);

        let lollipopChainsaw = new digitalAds("Lollipop Chainsaw", "Formatanpassningar och framtagning av takeoverlösning",
        "https://upload.wikimedia.org/wikipedia/en/3/39/Lollipop_Chainsaw_Cover_Art.png");
        let LCFI = new digitalAdItem("Takeoverlösning - FI", "Banner + Wallpaper", "http://obbyone.com/kampanjer/lollipop_chainsaw/fi/cdon/", true);
        let LCNO = new digitalAdItem("Takeoverlösning - NO", "Banner + Wallpaper", "http://obbyone.com/kampanjer/lollipop_chainsaw/no/pressfire/", true);
        let LCtakeover = new digitalAdItem("Takeoverlösning - SE", "Banner + Wallpaper", "http://obbyone.com/kampanjer/lollipop_chainsaw/se/eurogamer/", true);
        let LCBanner1 = new digitalAdItem("Banners 1", "728x90, 336x280", "http://obbyone.com/kampanjer/lollipop_chainsaw/se/google/", true);
        let LCBanner2 = new digitalAdItem("Banners 2", "300x250, 160x600", "http://obbyone.com/kampanjer/lollipop_chainsaw/se/google2/", true);
        lollipopChainsaw.ads.push(LCFI, LCNO, LCtakeover, LCBanner1, LCBanner2);

        let lotro = new digitalAds("Lord of the rings: Online", "Takeoverlösning",
        "http://drh1.img.digitalriver.com/DRHM/Storefront/Company/turbine/images/product/misc/lotro-ror-title-screen.jpg");
        let lotroBanner = new digitalAdItem("Takeoverlösning", "Banner + Wallpaper", "http://obbyone.com/kampanjer/lotro/se/", true);
        lotro.ads.push(lotroBanner);

        let mixedTvseries = new digitalAds("Mixed Tv-series - NO", "Framtagning av original",
        "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg");
        let mixedTvseriesBanner = new digitalAdItem("Banners", "728x90, 300x250, 160x600", "http://obbyone.com/kampanjer/mixed_tvseries/no/", true);
        mixedTvseries.ads.push(mixedTvseriesBanner);

        let mixedTvseries2 = new digitalAds("Mixed Tv-series 2 - NO", "Framtagning av original", 
        "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg");
        let mixedTvseriesBanner2 = new digitalAdItem("Banners", "980x150, 468x400", "http://obbyone.com/kampanjer/tvserier/", true);
        mixedTvseries2.ads.push(mixedTvseriesBanner2);

        let tyrannosaur = new digitalAds("Tyrannosaur", "Framtagning av original",
        "https://m.media-amazon.com/images/M/MV5BMjIwNzAxMDgxM15BMl5BanBnXkFtZTcwODM5NzU4NQ@@._V1_UX182_CR0,0,182,268_AL_.jpg" );
        let tyrannosaurBanner = new digitalAdItem("Banner", "728x90", "http://obbyone.com/kampanjer/tyrannosaur/banner/", true);
        let tyrannosaurEannounce = new digitalAdItem("E-announce", "Eannounce", "http://obbyone.com/kampanjer/tyrannosaur/eannounce", false);
        tyrannosaur.ads.push(tyrannosaurBanner, tyrannosaurEannounce);

        portfolio.push(lollipopChainsaw, batmanArkhamOrigins, batmanArkhamCity, boardwalkEmpireS3, cosmopolis, crazyStupidLove, finalDestination5, 
        imStillHere, infiniteCrisis, ironClad, killList, tyrannosaur, helloGotland, lotro, mixedTvseries, mixedTvseries2);

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

    logPortfolio: () => {
        let portfolio = JSON.parse(sessionStorage.getItem('portfolio'));
        console.log(portfolio);
    },

    addToSessionStorage: (portfolio) => {
        sessionStorage.setItem("portfolio", JSON.stringify(portfolio));
    },

    checkFlash: function(title) {
        if(title === true) {
            return `<span class="badge badge-light" style="margin-left: 5px; font-size: 0.8em">FLASH-AD</span>`;
        }
    }, 

    init_: function() {
        this.frontendWorks();
        this.designWorks();
        this.photos();
        this.digitalAds();
        displayModule.frontendWorks(); 
        displayModule.designWorks();
        displayModule.digitalAds();
        displayModule.photogallery();
        this.logPortfolio();
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

    digitalAds: function() {
        let portfolio = JSON.parse(sessionStorage.getItem('portfolio'));
        let main = document.getElementsByTagName('main')[0];
        let content = `<h2>Digitala Annonser</h2>`;
        let digitalAdsDiv = document.createElement('div');
        digitalAdsDiv.classList.add('flexbox', 'portfolio-section');

        for (let item of portfolio) {
            if (item.category === "Digital ad") {
                let ads = "";
                for(let ad of item.ads) {
                    let flash = ad.flash;
                    ads += `<a href="${ad.url}" class="btn btn-outline-warning" target="_blank" 
                    data-toggle="tooltip" data-placement="bottom" title="${ad.desc}" data-original-title="Tooltip on bottom">${ad.type} 
                    ${createModule.checkFlash(flash)}</a>                    
                    `
                }
                content += `
                <div class="card border-warning mb-3 portfolio-item-4col center">
                    <div class="card-header">
                        <p class="header">${item.title}</p>
                        <small class="form-text text-primary">${item.desc}</small>
                    </div>
                    <div class="card-body">
                        <div class="webdesign-img-container" style="margin-bottom: 15px;">
                        <div class="adImage" style="background-image: url('${item.image}');" class="img-fluid"></div>
                        <div class="ads"> ${ads} </div>
                        </div>
                        <p class="card-text"></p>
                    </div>
                </div>
                `;
            }
        }
        digitalAdsDiv.innerHTML = content;
        main.insertAdjacentElement('beforeend', digitalAdsDiv)
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
                        <div class="overlay-text"><a href="${photo.url}" data-lity class="litylink">${photo.title}</a></div>
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

//LITY POP-UP THING
const litylink = document.getElementsByClassName('litylink');
for ( let i = 0; i < litylink.length; i++ ) {
    litylink[i].addEventListener('click', function() {
        $(document).on('click', '[data-lightbox]', lity);
    })
}
