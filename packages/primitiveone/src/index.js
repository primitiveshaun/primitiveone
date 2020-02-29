import Theme from "./components/mountains";
import image from "@frontity/html2react/processors/image";
import CustomPageHandlers from "./sand/handlers.js";

const primitiveOne = {
  name: "primitiveone",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme
  },
  state: {
    /** 
     * State is where the packages store their default settings and other relevant state.
     * It is scoped to the `theme` namespace.
     */
    theme: {
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false
      },
      // show all post content or only the excerpt in archive views
      // showAllContentOnArchive: false,
      config: {
        homepage: {
          showHero: true,
          showIntro: true,
          showGold: true,
          showSilver: true,
          showBronze: true,
          showPromo: false,
          heroConfig: {
            rocks: "scene",
            fluid: "true"
          },
          introConfig: {
            rocks: "typography"
          },
          goldConfig: {
            rocks: "tabs"
          },
          silverConfig: {
            rocks: "poststrip",
            posttype: "works",
            mode: "random",
            limit: 3,
            title: "Some Recent Projects",
            subtitle: "We Made This.",
            icon: ""
          },
          bronzeConfig: {
            rocks: "page-home-bronze",
            show: 2,
            title1: "We Make Websites",
            imageFrame1: "fancy-frame",
            imagesrc1: "https://wp.primitivedigital.uk/wp-content/uploads/promo/wantawebsite_square.jpg",
            listFrame1: "frame",
            list1: ["Web Sites, CMS, CRM and Blogs.", "Fully Editable Content.", "Online shops and Progressive Web Apps.", "API's and application integration", "Mobile friendly and responsive", "Google Analytics", "High tech, low cost, no hassle", "Excellence as standard & satisfaction guaranteed"],
            link1: "/",
            icon1: "",
            title2: "We Love Startups",
            imageFrame2: "fancy-frame",
            imagesrc2: "https://wp.primitivedigital.uk/wp-content/uploads/promo/selfiemonkey_square.jpg",
            listFrame2: "frame",
            list2: ["Get a custom built Website", "Professionally designed and branded", "Plus Logo design", "Plus business card design", "Easy, peasy chimpanzizi!"],
            link2: "/",
            icon2: ""
          }
        },
        page: {
          showBanner: true,
          showGold: true,
          showSilver: true,
          showBronze: true,
          page: false
        },
        global: {
          showPromo: true,
          showSocial: true,
          promo: {
            rocks: "global-promo",
            type: "text",
            pretext: "Big Business and Enterprize",
            text: "Primitive is not for you, to hire me visit sknow.it!",
            link: "/"
          },
          social: {
            instagram: {
              type: "posts", // "post" | "posts" | "feed"
              postids: ["B9HhnSSj5NX", "B9JXQ7WDpll"],
              maxwidth: 320
            },
            facebook: { type: "none" },
            twitter: { type: "none" },
            pinterest: { type: "none" }
          }
        }
      },
      // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
      autoPreFetch: "no",
      /**
       * At the moment, we only include the ascii characters of Inter font.
       * Values can be "us-ascii" | "latin" | "all"
       */
      fontSets: "all"
    }
  },
  /**
   * Actions are functions that modify the state or deal with other parts of Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => { state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen; },
      openMobileMenu: ({ state }) => { state.theme.isMobileMenuOpen = true; },
      closeMobileMenu: ({ state }) => { state.theme.isMobileMenuOpen = false; }
    }
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags inside the content HTML.
       * You can add your own processors here too
       */
      processors: [image]
    },
    source: {
      handlers: CustomPageHandlers
    }
  }
};

export default primitiveOne;