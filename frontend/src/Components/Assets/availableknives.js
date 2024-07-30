import bayonetcase from './Bayonet/bayonet-casehardened.png'
import bayonettiger from './Bayonet/bayonet-tigertooth.png'
import bayonetddpat from './Bayonet/bayonet-ddpat.png'

import bowievanilla from './BowieKnife/bowieknife-vanilla.png'
import bowiedoppler from './BowieKnife/bowieknife-doppler.png'
import bowieslaughter from './BowieKnife/bowieknife-slaughter.png'


import butterflyautotronic from './ButterflyKnife/butterfly-autotronic.png';
import butterflycrimsonweb from './ButterflyKnife/butterfly-crimson web.png';
import butterflysafarimesh from './ButterflyKnife/butterfly-safari mesh.png';
import butterflytigertooth from './ButterflyKnife/butterfly-tiger tooth.png';

import classicscorched from './ClassicKnife/classic-scorched.png';
import classicbluesteel from './ClassicKnife/classic-blue steel.png';


import falchionRustcoat from './FalchionKnife/falchion-rust coat.png';
import falchionsafarimesh from './FalchionKnife/falchion-safari mesh.png';
import falchioncrimsonweb from './FalchionKnife/falchion-crimson web.png';


import flipDoppler from './FlipKnife/flip-Doppler.png';
import flipFreehand from './FlipKnife/flip-Freehand.png';
import flipTigerTooth from './FlipKnife/flip-Tiger Tooth.png';
import flipBlackLaminate from './FlipKnife/flip-Black Laminate.png';

import gutVanilla from './GutKnife/gut-Vanilla.png';
import gutLore from './GutKnife/gut-Lore.png';
import gutCaseHardened from './GutKnife/gut-Case Hardened.png';


import huntsmanBlueSteel from './HuntsmanKnife/huntsman-Blue steel.png';
import huntsmanBlackLaminate from './HuntsmanKnife/huntsman-Black Laminate.png';
import huntsmanNight from './HuntsmanKnife/huntsman-Night.png';


import karambitTigerTooth from './Karambit/karambit-tigher tooth.png';
import karambitNight from './Karambit/karambit-Night.png';
import karambitSafariMesh from './Karambit/karambit-Safari Mesh.png';
import karambitFreehand from './Karambit/karambit-Freehand.png';

import kukriVanilla from './KukriKnife/kukri-vailla.png';
import kukriNightStripe from './KukriKnife/kukri-night stripe.png';
import kukriborealForest from './KukriKnife/kukri-boreal forest.png';

import m9bayonetFreehand from './M9Bayonet/m9bayonet-freehand.png';
import m9bayonetVanilla from './M9Bayonet/m9bayonet-vanilla.png';
import m9bayonetAutotronic from './M9Bayonet/m9bayonet-autotronic.png';

import navajaFade from './NavajaKnife/navaja-fade.png';
import navajaSafariMesh from './NavajaKnife/navaja-safari mesh.png';
import navajaUltraviolet from './NavajaKnife/navaja-ultraviolet.png';

import nomadVanilla from './NomadKnife/nomad-vanilla.png';
import nomadNightStripe from './NomadKnife/nomad-night stripe.png';
import nomadFade from './NomadKnife/nomad-fade.png';

import paracordScorched from './ParacordKnife/paracord-scorched.png';
import paracordFade from './ParacordKnife/paracord-fade.png';
import paracordCrimsonWeb from './ParacordKnife/paracord-crimson web.png';

import shadowdaggersNight from './ShadowDaggers/shadowdaggers-night.png';
import shadowdaggersAutotronic from './ShadowDaggers/shadowdaggers-autotronic.png';
import shadowdaggersLore from './ShadowDaggers/shadowdaggers-lore.png';

import skeletonforestddpat from './Skeleton Knife/Skeleton-forestddpat.png'
import skeletonbluesteel from './Skeleton Knife/Skeleton-bluesteel.png'
import skeletonfade from './Skeleton Knife/Skeleton-forestddpat.png'

import stilettostained from './Stiletto Knife/Stiletto-stained.png'
import stilettotigertooth from './Stiletto Knife/Stiletto-tigertooth.png'
import stilettodoppler from './Stiletto Knife/Stiletto-fade.png'

import survivalknifecrimsonweb from './Survival Knife/SurvivalKnife-crimsonweb.png'
import survivalknifecasehardened from './Survival Knife/SurvivalKnife-casehardened.png'
import survivalknifeforestddpat from './Survival Knife/SurvivalKnife-forestddpat.png'

import talonknifenightstripe from './Talon Knife/TalonKnife-nightstripe.png'
import talonknifescorched from './Talon Knife/TalonKnife-scorched.png'
import talonknifeurbanmasked from './Talon Knife/TalonKnife-urbanmasked.png'

import ursusknifenightstripe from './Ursus Knife/UrsusKnife-nightstripe.png'
import ursusknifemarblefade from './Ursus Knife/UrsusKnife-marblefade.png'
import ursusknifecrimsonweb from './Ursus Knife/UrsusKnife-crimsonweb.png'
import ursusknifestained from './Ursus Knife/UrsusKnife-stained.png'






import classicforestddpat from './ClassicKnife/classic-forest DDPAT.png'


//knives that are available to purchse to users, can be updated by admin
let availableknives = [
{
    id:8,
    name:  "Bayonet | Case Hardened",
    category: "bayonet",
    image: bayonetcase,
    knife_price: 277.88
},
{
    id:11,
    name:  "Bayonet | Tiger Tooth",
    category: "bayonet",  
    image: bayonettiger,
    knife_price: 250.00,
    quantity: 1
},
{
    id:14,
    name:  "Bayonet | Forest DDPAT",
    category: "bayonet",
    image: bayonetddpat,
    knife_price: 161.47
},
{
    id: 397,
    name: "Bowie Knife | Vanilla",
    category: "bowie knife",
    image: bowievanilla,
    knife_price: 148.04
},
{
    id: 381,
    name: "Bowie Knife | Doppler",
    category: "bowie knife",
    image: bowiedoppler,
    knife_price: 337.00
},
{
    id: 392,
    name: "Bowie Knife | Slaughter",
    category: "bowie knife",
    image: bowieslaughter,
    knife_price: 222.00
},
{
    id: 26,
    name: "Butterfly Knife | Autotronic",
    category: "butterflyknife",
    image: butterflyautotronic,
    knife_price: 930.00
},
{
    id: 32,
    name: "Butterfly Knife | Crimson Web",
    category: "butterflyknife",
    image: butterflycrimsonweb,
    knife_price: 694.00
},
{
    id: 43,
    name: "Butterfly Knife | Safari Mesh",
    category: "butterflyknife",
    image: butterflysafarimesh,
    knife_price: 522.54
},
{
    id: 47,
    name: "Butterfly Knife | Tiger Tooth",
    category: "butterflyknife",
    image: butterflytigertooth,
    knife_price: 1443.19
},
{
    id: 59,
    name: "Classic Knife | Scorched",
    category: "classicknife",
    image: classicscorched,
    knife_price: 102.49
},
{
    id: 51,
    name: "Classic Knife | Blue Steel",
    category: "classicknife",
    image: classicbluesteel,
    knife_price: 164.56
},
{
    id: 80,
    name: "Falchion Knife | Rust Coat",
    category: "falchionknife",
    image: falchionRustcoat,
    knife_price: 87.37
},
{
    id: 81,
    name: "Falchion Knife | Safari Mesh",
    category: "falchionknife",
    image: falchionsafarimesh,
    knife_price: 79.62
},
{
    id: 70,
    name: "Falchion Knife | Crimson Web",
    category: "falchionknife",
    image: falchioncrimsonweb,
    knife_price: 119.83
},
{
    id: 96,
    name: "Flip Knife | Doppler",
    category: "flipknife",
    image: flipDoppler,
    knife_price: 403.07
},
{
    id: 99,
    name: "Flip Knife | Freehand",
    category: "flipknife",
    image: flipFreehand,
    knife_price: 153.88
},
{
    id: 109,
    name: "Flip Knife | Tiger Tooth",
    category: "flipknife",
    image: flipTigerTooth,
    knife_price: 306.00
},
{
    id: 89,
    name: "Flip Knife | Black Laminate",
    category: "flipknife",
    image: flipBlackLaminate,
    knife_price: 155.80
},
{
    id: 137,
    name: "Gut Knife | Vanilla",
    category: "gutknife",
    image: gutVanilla,
    knife_price: 110.00
},
{
    id: 126,
    name: "Gut Knife | Lore",
    category: "gutknife",
    image: gutLore,
    knife_price: 104.11
},
{
    id: 118,
    name: "Gut Knife | Case Hardened",
    category: "gutknife",
    image: gutCaseHardened,
    knife_price: 106.84
},
{
    id: 140,
    name: "Huntsman Knife | Blue Steel",
    category: "huntsmanknife",
    image: huntsmanBlueSteel,
    knife_price: 136.16
},
{
    id: 139,
    name: "Huntsman Knife | Black Laminate",
    category: "huntsmanknife",
    image: huntsmanBlackLaminate,
    knife_price: 103.08
},
{
    id: 153,
    name: "Huntsman Knife | Night",
    category: "huntsmanknife",
    image: huntsmanNight,
    knife_price: 105.50
},
{
    id: 184,
    name: "Karambit | Tiger Tooth",
    category: "karambit",
    image: karambitTigerTooth,
    knife_price: 998.49
},
{
    id: 178,
    name: "Karambit | Night",
    category: "karambit",
    image: karambitNight,
    knife_price: 536.05
},
{
    id: 180,
    name: "Karambit | Safari Mesh",
    category: "karambit",
    image: karambitSafariMesh,
    knife_price: 421.00
},
{
    id: 174,
    name: "Karambit | Freehand",
    category: "karambit",
    image: karambitFreehand,
    knife_price: 553.62
},
{
    id: 200,
    name: "Kukri Knife | Vanilla",
    category: "kukriknife",
    image: kukriVanilla,
    knife_price: 432.44
},
{
    id: 194,
    name: "Kukri Knife | Night Stripe",
    category: "kukriknife",
    image: kukriNightStripe,
    knife_price: 156.58
},
{
    id: 189,
    name: "Kukri Knife | Boreal Forest",
    category: "kukriknife",
    image: kukriborealForest,
    knife_price: 135.00
},
{
    id: 212,
    name: "M9 Bayonet | Freehand",
    category: "m9bayonet",
    image: m9bayonetFreehand,
    knife_price: 445.00
},
{
    id: 225,
    name: "M9 Bayonet | Vanilla",
    category: "m9bayonet",
    image: m9bayonetVanilla,
    knife_price: 1096.54
},
{
    id: 201,
    name: "M9 Bayonet | Autotronic",
    category: "m9bayonet",
    image: m9bayonetAutotronic,
    knife_price: 770.00
},
{
    id: 232,
    name: "Navaja Knife | Fade",
    category: "navajaknife",
    image: navajaFade,
    knife_price: 195.51
},
{
    id: 237,
    name: "Navaja Knife | Safari Mesh",
    category: "navajaknife",
    image: navajaSafariMesh,
    knife_price: 71.74
},
{
    id: 242,
    name: "Navaja Knife | Ultraviolet",
    category: "navajaknife",
    image: navajaUltraviolet,
    knife_price: 72.29
},
{
    id: 257,
    name: "Nomad Knife | Vanilla",
    category: "nomadknife",
    image: nomadVanilla,
    knife_price: 378.93
},
{
    id: 251,
    name: "Nomad Knife | Night Stripe",
    category: "nomadknife",
    image: nomadNightStripe,
    knife_price: 128.21
},
{
    id: 249,
    name: "Nomad Knife | Fade",
    category: "nomadknife",
    image: nomadFade,
    knife_price: 849.17
},
{
    id: 266,
    name: "Paracord Knife | Scorched",
    category: "paracordknife",
    image: paracordScorched,
    knife_price: 77.14
},
{
    id: 262,
    name: "Paracord Knife | Fade",
    category: "paracordknife",
    image: paracordFade,
    knife_price: 367.49
},
{
    id: 261,
    name: "Paracord Knife | Crimson Web",
    category: "paracordknife",
    image: paracordCrimsonWeb,
    knife_price: 124.04
},
{
    id: 271,
    name: "Shadow Daggers | Night",
    category: "shadowdaggers",
    image: shadowdaggersNight,
    knife_price: 300.00
},
{
    id: 272,
    name: "Shadow Daggers | Autotronic",
    category: "shadowdaggers",
    image: shadowdaggersAutotronic,
    knife_price: 78.15
},
{
    id: 285,
    name: "Shadow Daggers | Lore",
    category: "shadowdaggers",
    image: shadowdaggersLore,
    knife_price: 82.83
},
{
    id: 303,
    name: "Skeleton Knife | Forest DDPAT",
    category: "skeleton",
    image: skeletonforestddpat,
    knife_price: 178.27
},
{
    id: 298,
    name: "Skeleton Knife | Blue Steel",
    category: "skeleton",
    image: skeletonbluesteel,
    knife_price: 150.00
},
{
    id: 302,
    name: "Skeleton Knife | Fade",
    category: "skeleton",
    image: skeletonfade,
    knife_price: 1330.00
},
{
    id: 324,
    name: "Stiletto Knife | Stained",
    category: "stiletto",
    image: stilettostained,
    knife_price: 196.00
},
{
    id: 325,
    name: "Stiletto Knife | Tiger Tooth",
    category: "stiletto",
    image: stilettotigertooth,
    knife_price: 408.69
},
{
    id: 316,
    name: "Stiletto Knife | Doppler",
    category: "stiletto",
    image: stilettodoppler,
    knife_price: 570.00
},
{
    id: 334,
    name: "Survival Knife | Crimson Web",
    category: "survival knife",
    image: survivalknifecrimsonweb,
    knife_price: 123.41
},
{
    id: 335,
    name: "Survival Knife | Case Hardened",
    category: "survival knife",
    image: survivalknifecasehardened,
    knife_price: 119.71
},
{
    id: 336,
    name: "Survival Knife | Forest DDPAT",
    category: "survival knife",
    image: survivalknifeforestddpat,
    knife_price: 77.00
},
{
    id: 346,
    name: "Talon Knife | Night Stripe",
    category: "talon knife",
    image: talonknifenightstripe,
    knife_price: 238.25
},
{
    id: 349,
    name: "Talon Knife | Scorched",
    category: "talon knife",
    image: talonknifescorched,
    knife_price: 217.26
},
{
    id: 360,
    name: "Talon Knife | Urban Masked",
    category: "talon knife",
    image: talonknifeurbanmasked,
    knife_price: 217.20
},


{
    id: 370,
    name: "Ursus Knife | Night Stripe",
    category: "ursus knife",
    image: ursusknifenightstripe,
    knife_price: 93.00
},
{
    id: 369,
    name: "Ursus Knife | Marble Fade",
    category: "ursus knife",
    image: ursusknifemarblefade,
    knife_price: 311.06
},
{
    id: 364,
    name: "Ursus Knife | Crimson Web",
    category: "ursus knife",
    image: ursusknifecrimsonweb,
    knife_price: 156.00
},
{
    id: 375,
    name: "Ursus Knife | Stained",
    category: "ursus knife",
    image: ursusknifestained,
    knife_price: 103.62
},


]

export default availableknives