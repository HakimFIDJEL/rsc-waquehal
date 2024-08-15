"use client";

import { Hero } from "@/components/u/Hero";
import { useEffect, useState } from "react";

import { Backend_URL } from "@/lib/Constant";
import axios from "axios";

type Galerie = {
  id: string
  title: string
  image: string
  status: string
  createdAt: string
}

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import GalerieCard from "@/components/u/GalerieCard";


export default function Index()
{




    return <>
      <Hero 
        title="Les règles"
        breadcrumbs={[
          {
            title: "Accueil",
            link: "/"
          },
          {
            title: "Les règles",
            link: "/regles"
          }
        ]}
        image=""
      />


        <div className="our_history_wrapper float_left" style={{ marginBottom: "560px" }}>
            <div className="container">
                <div className="row">


                    <div className="col-md-12">
                        <div className="ft_left_heading_wraper gallery_heading_center text-center">
                            <h1>Le Rink-Hockey</h1>
                        </div>
                    </div>


                    <div className="col-md-12 pdtpp">


                        <div className="welcome_tab">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#rule1">
                                        Principes
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#rule2">
                                        Règles
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#rule3">
                                        Pénalités
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#rule4">
                                        Le terrain
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#rule5">
                                        L'équipement
                                    </a>
                                </li>
                                
                            </ul>
                        </div>


                        <div className="tab-content about_tab_content">
                            <div id="rule1" className="tab-pane active">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                Les principes du jeu
                                            </h1>
                                            <div>
                                                <p>
                                                    Le rink hockey est un sport collectif où deux équipes s’affrontent. Chaque équipe est composée de cinq joueurs dont un gardien. En plus des joueurs sur le terrain, chaque équipe peut compter cinq remplaçants dont un gardien remplaçant ; ainsi une équipe inscrite pour une rencontre compte au maximum dix joueurs dont deux gardiens de buts. Au cours d’une rencontre le nombre de remplacements est illimité : un joueur peut entrer et sortir du terrain autant de fois que souhaité. 
                                                </p>
                                                <p>
                                                Les deux équipes s’affrontent pour faire entrer la balle dans le but adverse, les joueurs ne peuvent marquer qu’avec leur crosse et sont sur des patins à roulettes. Un but marqué contre son camp sera validé quelle que soit la partie du corps que le défenseur a utilisé pour marquer. 
                                                </p>
                                                <p>
                                                En sénior, le temps de jeu est de 25 minutes par mi-temps. Le découlement du temps est arrêté à chaque arrêt de jeu, depuis une décision prise par la fédération internationale en 1963 à Porto. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div id="rule2" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                Les règles du jeu
                                            </h1>
                                            <div>
                                                <p>
                                                Le rink hockey, comme tous les sports, possède de nombreuses règles de jeu et interdiction. Parmi elles, il est interdit de:
                                                </p>
                                                <ul>
                                                    <li>
                                                    bousculer, pousser, tenir, crocheter un adversaire ;
                                                    </li>
                                                    <li>
                                                    jouer la balle avec le patin ou toute autre partie du corps;
                                                    </li>
                                                    <li>
                                                    tout type d’anti-jeu :
                                                    </li>
                                                </ul>
                                                <ol>
                                                    <li>
                                                    faire revenir la balle dans sa zone de défense plus de 5 secondes (retour en zone);
                                                    </li>
                                                    <li>
                                                    mettre plus de 10 secondes entre la prise de balle et l’entrée dans la zone d’attaque ;
                                                    </li>
                                                    <li>
                                                    mettre plus de 45 secondes entre la prise de balle et un tir;
                                                    </li>
                                                </ol>
                                                <ul>
                                                    <li>
                                                    lever la balle à plus de 1,50 m (sauf pour le gardien de but), de la faire sortir du terrain ou de la faire toucher un élément extérieur au terrain (murs en dehors des balustrades, plafond de la salle, etc.) ;
                                                    </li>
                                                    <li>
                                                    manquer de respect envers les officiels, les joueurs ou bien le public ;
                                                    </li>
                                                    <li>
                                                    jouer à terre, sauf pour les gardiens qui en ont l’autorisation seulement dans leur surface de réparation.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="rule3" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                Les pénalités
                                            </h1>
                                            <div>
                                                <p>
                                                Ces fautes sont sanctionnées en fonction de leur gravité, éventuellement par une sanction adressée au joueur, mais principalement par une pénalisation de l’équipe lors de la reprise du jeu.
                                                </p>
                                                <p>
                                                Un joueur peut être sanctionné par une échelle de sanctions allant de la faute simple jusqu’à l’expulsion définitive par l’intermédiaire d’un carton rouge. Il existe un carton bleu visant à expulser temporairement un fautif. 
                                                </p>
                                                <ul>
                                                    <li>
                                                    une faute simple ou faute technique. Le joueur n’est pas sanctionné. Ce type de faute est sifflé lorsque le joueur fait sortir la balle du terrain, reste immobile avec celle-ci derrière le but ou lorsque le gardien se saisit de la balle (il doit seulement la contrer, la dévier)
                                                    </li>
                                                    <li>
                                                    une faute légère. Un avertissement oral est donné au joueur, en cas de récidive il est sanctionné d’un carton bleu, puis par un carton rouge. Les fautes légères sont par exemple le fait pour un joueur de jouer la balle avant le coup de sifflet après avoir demandé les trois mètres, pour un gardien de bouger avant que le joueur n’exécute un coup-franc direct ou un penalty.
                                                    </li>
                                                    <li>
                                                    une faute d’équipe. Les fautes d’équipes se cumulent collectivement et sont comptées par la table de marque. En sénior, un coup franc direct est accordé à la dixième faute d’équipe puis toutes les cinq fautes d’équipe, quel que soit l’emplacement de la faute sifflée. Une faute d’équipe est sifflée lorsqu’un gardien joue sans crosse, ou lorsqu’un joueur soulève la crosse de l’adversaire qui est en possession de la balle.
                                                    </li>
                                                </ul>
                                                <p>
                                                Lorsqu’un joueur est sanctionné par un carton, il ne peut plus rentrer durant un certain laps de temps sur le terrain, et est obligé de se placer dans un emplacement prévu pour accueillir les joueurs suspendus. Durant ce laps de temps ou bien jusqu’à ce qu’elle encaisse un but, l’équipe fautive joue avec un joueur de champ de moins : 
                                                </p>
                                                <ul>
                                                    <li>
                                                    une faute grave (carton bleu). Le joueur sanctionné est suspendu pendant deux minutes. L’accumulation de trois cartons bleus conduit à un carton rouge indirect. Cette sanction est appliquée en cas de contestation d’une décision arbitrale, d’actions qui sont soit violentes, soit volontaires, mais encore en cas de faute dans une situation de but imminent.
                                                    </li>
                                                    <li>
                                                    une faute très grave (carton rouge). Le joueur sanctionné est définitivement expulsé et doit rejoindre les vestiaires. Cette sanction prohibe les lancers d’objets (crosses, équipements, etc.) vers une personne ou la balle, mais aussi les comportements violents et volontaires.
                                                    </li>
                                                </ul>
                                                <p>
                                                L’arbitre pourra faire reprendre le jeu par ː
                                                </p>
                                                <ul>
                                                    <li>
                                                    un entre-deux. Un joueur de chaque équipe se fait face, les autres devant être éloigné à plus de 3 mètres de la balle. Au coup de sifflet de l’arbitre, les deux joueurs tentent de récupérer la balle. Cette situation se produit lorsque la balle reste coincée dans les filets du but, dans les jambières du gardien ou touche le plafond de la salle.
                                                    </li>
                                                    <li>
                                                    un coup franc indirect (peut être joué n’importe où sur le terrain). Les joueurs adverses devront s’écarter à plus de trois mètres de la balle. Le coup franc indirect est la manière la plus courante de reprendre le jeu après tous types de fautes.
                                                    </li>
                                                    <li>
                                                    un coup franc direct (tir ou dribble à partir du point de coup franc direct). À l’exception du gardien défensif et de l’attaquant, tous les autres joueurs doivent se placer dans la surface de réparation de l’équipe qui attaque. Les joueurs ne sont autorisés à quitter cette zone qu’après que l’attaquant ait touché la balle. Ce dernier à 5 secondes pour tirer à partir du moment où l’arbitre lui donne l’autorisation pour effectuer le coup-franc. Un coup franc direct est accordé lorsqu’un joueur est sanctionné d’un carton bleu ou lorsqu’une équipe atteint un certain nombre de faute d’équipe.
                                                    </li>
                                                    <li>
                                                    un penalty (tir à partir du point de penalty). Il se déroule de la même manière qu’un coup-franc direct, à l’exception que le point d’exécution se trouve sur la bordure de la surface de réparation. Lorsque l’équipe défensive commet une faute dans sa surface de réparation, un penalty est accordé pour l’équipe adverse
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="rule4" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                L'aire de jeu, le terrain de rink hockey
                                            </h1>
                                            <div>
                                                <p>
                                                Le rink hockey se joue en salle, couverte ou à l’air libre. La piste (rink) est doublement symétrique, en longueur et en largeur. Elle est rectangulaire et peut mesurer de 34 m à 44 m de long sur une largeur de 17 m à 22 m en respectant toujours un ratio de 2:1, mais les matchs internationaux ne se déroulent que sur des pistes de 40 m sur 20 m. Les coins de la piste sont arrondis formant un quart de cercle mesurant entre 3 et 1 m de diamètre. La piste est entourée par une barrière d’au moins 0,20 m de haut et de 1 m de haut dans les matchs internationaux. Le sol peut être en béton, résine, plancher ou même marbre. 
                                                </p>
                                                <p>
                                                Les buts ont une largeur de 1,70 m et une hauteur de 1,05 m. À l’intérieur des buts, un épais filet et une barre au ras du sol permettent d’emprisonner la balle dans les cages. 
                                                </p>
                                                <p>
                                                Une ligne médiane sépare le terrain en deux zones, avec un cercle central au milieu duquel s’effectuent les engagements. La surface de réparation mesure 9 m sur 5,40 m. À son extrémité se tient le point de penalty. Un demi-cercle du diamètre de la cage constitue une zone de protection pour gardien. À 7,40 m de la ligne de but, se tient le point de coup franc direct.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="rule5" className="tab-pane fade">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="offer_main_boxes_wrapper float_left">
                                            <h1>
                                                L'équipement
                                            </h1>
                                            <div>
                                                <p>
                                                Le rink hockey se joue avec une balle sphérique en liège pressé, recouverte d’un plastique dur. Elle mesure 23 cm de périmètre, soit 7,2 cm de diamètre et elle pèse 155 g. La balle de rink hockey doit être de couleur unie. Elle est généralement noire, mais sa couleur peut varier pour contraster avec la couleur de la salle. Sur un sol dur, la balle rebondit peu. 
                                                </p>
                                                <p>
                                                Les quads de rink hockey sont composés de quatre roues parallèles deux à deux. Les roues des quads doivent avoir un diamètre d’au moins 3 cm alors que les gardiens de buts peuvent avoir des roues plus petites pour améliorer leur stabilité. Les rollers quads présentent par rapport aux rollers en ligne une capacité de mouvement supérieur lors des changements de direction. Les rollers inline ne montrent que peu d’efficacité en raison des dimensions trop faible du terrain et des schémas tactiques à entièrement repenser pour être compatible avec des rollers. Des lacets d’une longueur de 3 m sont utilisés pour serrer fortement la chaussure afin de maintenir correctement le pied. Ceci est indispensable pour évoluer en toute sécurité lors des changements d’appuis qui peuvent être très contraignants. 
                                                </p>
                                                <p>
                                                Tous les joueurs de rink hockey, y compris le gardien de but, possèdent une crosse répondant aux mêmes exigences. Elle est le plus souvent composée de bois ou de carbone et est entièrement plate et recourbée au bout. Elle peut mesurer entre 90 cm et 115 cm. La crosse du gardien de but est différente de celle d’un joueur de champ : elle est plus large et possède une encoche afin de la tenir plus facilement. 
                                                </p>
                                                <p>
                                                L’équipement des joueurs de champ obligatoire comporte aussi des gants, des genouillères, des protège-tibias et une coquille. Les joueurs ont également la possibilité de poster en sus de ces protections obligatoires, un protège-dent. 
                                                </p>
                                                <p>
                                                L’équipement du gardien de but est plus complet que celui des joueurs de champ. Pour sa protection il porte jambières, coquille, plastron, protège-cou, coudières, gants spéciaux, maillot flottant matelassé et casque. Mis à part les jambières et les gants, les autres protections (plastron, coudières…) ne doivent pas avoir pour objectif de couvrir plus de surface de but. Le gardien peut au choix porter un casque ou un masque intégral, avec soit une visière, soit une grille. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                        
                    </div>



                </div>
            </div>
        </div>

    
    </>
  
}