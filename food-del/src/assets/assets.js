import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'
import rating_starts from './rating_starts.png'
import food_1 from './ice_cream.webp'
import food_2 from './bread.webp'
import food_3 from './eggs.webp'
import food_4 from './chicken_breasts.webp'
import food_5 from './Oreo1.webp'
import food_6 from './lays.webp'
import food_7 from './nutella.webp'
import food_8 from './hersheys.webp'
import food_9 from './milk.webp'
import food_10 from './tomatoes.jpg'
import food_11 from './onions.jpg'
import food_12 from './cilantro.jpg'
import food_13 from './lemon.webp'
import food_14 from './kiwi.webp'
import food_15 from './mozarella.webp'
import food_16 from './oil.webp'
import food_17 from './Ranch.webp'
import food_18 from './Cheesy.webp'
import food_19 from './Spicy.webp'
import food_20 from './Titan.webp'
import food_21 from './cali.jpg'
import food_22 from './ultimate.jpg'
import food_23 from './choco.jpg'
import food_24 from './bacon.jpg'
import food_25 from './crunchy_taco.jpg'
import food_26 from './quesadilla.jpg'
import food_27 from './Supreme.jpg'
import food_28 from './beefy.jpg'
import food_29 from './Nuggets.jpeg'
import food_30 from './Eggmcmuffin.jpeg'
import food_31 from './Fries.jpeg'
import food_32 from './BigMac.jpeg'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon
}

export const menu_list = [
    {
        menu_name: "Walmart",
        menu_image: menu_1
    },
    {
        menu_name: "Sam's Club",
        menu_image: menu_2
    },
    {
        menu_name: "Bhashas",
        menu_image: menu_3
    },
    {
        menu_name: "Safeway",
        menu_image: menu_4
    },
    {
        menu_name: "Subway",
        menu_image: menu_5
    },
    {
        menu_name: "Domino's",
        menu_image: menu_6
    },
    {
        menu_name: "Taco Bell",
        menu_image: menu_7
    },
    {
        menu_name: "Mc Donald's",
        menu_image: menu_8
    }]

export const food_list = [
    {
        food_id: 1,
        food_name: "Ice cream",
        food_image: food_1,
        food_price: 3,
        food_desc: "Great Value Cookies & Cream Ice Cream, 48 fl oz",
        food_category: "Walmart"
    },
    {
        food_id: 2,
        food_name: "Multigrain Bread",
        food_image: food_2,
        food_price: 4,
        food_desc: "Oroweat Oatnut Bread, 24 oz, Multigrain Bread, Bag",
        food_category: "Walmart"
    }, {
        food_id: 3,
        food_name: "Eggs 12 pcs",
        food_image: food_3,
        food_price: 4,
        food_desc: "Great Value White Large Eggs, 12 Count",
        food_category: "Walmart"
    }, {
        food_id: 4,
        food_name: "Chicken Breasts 2lb",
        food_image: food_4,
        food_price: 10,
        food_desc: "Foster Farms Fresh Boneless Skinless Chicken Breast, 25g Protein per 4 oz Serving, 1.6 - 2.4 lb Tray",
        food_category: "Walmart"
    }, {
        food_id: 5,
        food_name: "OREO cookies",
        food_image: food_5,
        food_price: 11,
        food_desc: "OREO Chocolate Sandwich Cookies, 5.23 oz., 12 pk.",
        food_category: "Sam's Club"
    }, {
        food_id: 6,
        food_name: "Lay's mix variety",
        food_image: food_6,
        food_price: 14,
        food_desc: "Lay's Mix Variety Pack Potato Chips, 30 pk.",
        food_category: "Sam's Club"
    }, {
        food_id: 7,
        food_name: "Nutella",
        food_image: food_7,
        food_price: 20,
        food_desc: "Nutella Hazelnut Spread with Cocoa, 26.5 oz., 2 pk.",
        food_category: "Sam's Club"
    }, {
        food_id: 8,
        food_name: "Hershey's syrup",
        food_image: food_8,
        food_price: 15,
        food_desc: "HERSHEY'S Chocolate Syrup, 48 oz., 2 pk.",
        food_category: "Sam's Club"
    }, {
        food_id: 9,
        food_name: "Milk",
        food_image: food_9,
        food_price: 4,
        food_desc: "Great Value Whole Vitamin D Milk, Gallon, Plastic, Jug, 128 Fl Oz",
        food_category: "Bhashas"
    }, {
        food_id: 10,
        food_name: "Tomatoes",
        food_image: food_10,
        food_price: 11,
        food_desc: "Roma Tomatoes 5lbs.",
        food_category: "Bhashas"
    }, {
        food_id: 11,
        food_name: "Onions",
        food_image: food_11,
        food_price: 10,
        food_desc: "Yellow Onions 10 lbs.",
        food_category: "Bhashas"
    }, {
        food_id: 12,
        food_name: "Cilantro",
        food_image: food_12,
        food_price: 2,
        food_desc: "Organic Cilantro",
        food_category: "Bhashas"
    },
    {
        food_id: 13,
        food_name: "Lemon",
        food_image: food_13,
        food_price: 1,
        food_desc: "Lemon Large",
        food_category: "Safeway"
    },
    {
        food_id: 14,
        food_name: "Kiwi Bowl",
        food_image: food_14,
        food_price: 5,
        food_desc: "Kiwi Bowl Small - Each",
        food_category: "Safeway"
    }, {
        food_id: 15,
        food_name: "Mozzarella Sticks",
        food_image: food_15,
        food_price: 9,
        food_desc: "Farm Rich Mozzarella Sticks - 22 OZ",
        food_category: "Safeway"
    }, {
        food_id: 16,
        food_name: "Peanut Oil Pure",
        food_image: food_16,
        food_price: 23,
        food_desc: "Signature SELECT Oil Peanut Pure - 1 Gallon",
        food_category: "Safeway"
    }, {
        food_id: 17,
        food_name: "Elite Chicken & Bacon Ranch",
        food_image: food_17,
        food_price: 15,
        food_desc: "Elite Chicken & Bacon Ranch 580 cal",
        food_category: "Subway"
    }, {
        food_id: 18,
        food_name: "Cheesy Garlic Steak",
        food_image: food_18,
        food_price: 13,
        food_desc: "Cheesy Garlic Steak 510 cal",
        food_category: "Subway"
    }, {
        food_id: 19,
        food_name: "Spicy Nacho Chicken",
        food_image: food_19,
        food_price: 14,
        food_desc: "Spicy Nacho Chicken 440 cal",
        food_category: "Subway"
    }, {
        food_id: 20,
        food_name: "Titan Turkey",
        food_image: food_20,
        food_price: 12,
        food_desc: "Titan Turkey 490 cal",
        food_category: "Subway"
    }, {
        food_id: 21,
        food_name: "Cali Chicken Bacon Ranch Pizza",
        food_image: food_21,
        food_price: 14,
        food_desc: "Cali Chicken Bacon Ranch Medium",
        food_category: "Domino's"
    }, {
        food_id: 22,
        food_name: "Ultimate Pepperoni Pizza",
        food_image: food_22,
        food_price: 15,
        food_desc: "Ultimate Pepperoni Medium",
        food_category: "Domino's"
    }, {
        food_id: 23,
        food_name: "Choco Lava",
        food_image: food_23,
        food_price: 10,
        food_desc: "Chocolate Lava Crunch Cakes",
        food_category: "Domino's"
    }, {
        food_id: 24,
        food_name: "Bacon Tots",
        food_image: food_24,
        food_price: 12,
        food_desc: "Cheddar Bacon Loaded Tots",
        food_category: "Domino's"
    },
    {
        food_id: 25,
        food_name: "Crunchy Taco",
        food_image: food_25,
        food_price: 2,
        food_desc: "Crunchy Taco 170 cal",
        food_category: "Taco Bell"
    },
    {
        food_id: 26,
        food_name: "Chicken Quesadilla",
        food_image: food_26,
        food_price: 6,
        food_desc: "Chicken Quesadilla 520 cal",
        food_category: "Taco Bell"
    }, {
        food_id: 27,
        food_name: "Crunchwrap Supreme",
        food_image: food_27,
        food_price: 7,
        food_desc: "Crunchwrap Supreme540 cal",
        food_category: "Taco Bell"
    }, {
        food_id: 28,
        food_name: "Beefy 5-Layer Burrito",
        food_image: food_28,
        food_price: 4,
        food_desc: "FBeefy 5-Layer Burrito 490 cal",
        food_category: "Taco Bell"
    }, {
        food_id: 29,
        food_name: "Chicken McNuggets",
        food_image: food_29,
        food_price: 4,
        food_desc: "Chicken McNuggets 4pc 170 cal",
        food_category: "Mc Donald's"
    }, {
        food_id: 30,
        food_name: "Egg McMuffin",
        food_image: food_30,
        food_price: 3,
        food_desc: "Egg McMuffin 310 cal",
        food_category: "Mc Donald's"
    }, {
        food_id: 31,
        food_name: "World Famous Fries",
        food_image: food_31,
        food_price: 5,
        food_desc: "World Famous Fries Small 230 cal",
        food_category: "Mc Donald's"
    }, {
        food_id: 32,
        food_name: "Big Mac",
        food_image: food_32,
        food_price: 10,
        food_desc: "Big Mac 590 cal",
        food_category: "Mc Donald's"
    }
]
