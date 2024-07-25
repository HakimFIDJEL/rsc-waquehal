"use client";

import { Hero } from "@/components/u/Hero";
import { useEffect, useState } from "react";
import { Backend_URL } from "@/lib/Constant";
import axios from "axios";


type Match = {
  id: string
  team_enemy: string
  category: Category
  score_ally: number
  score_enemy: number
  localisation: string
  date: string
  createdAt: string
}

type Category = {
  id: string
  name: string
  createdAt: string
}

type Equipe = {
  id: string
  image: string
  category: string
  categoryId: string
  players : Player[]
  status: string
  createdAt: string
}

type Player = {
  id: number;
  name: string;
  captain: string;
}




export default function Index()
{
  const [categories, setCategories] = useState<Category[]>([]);
  const [categorySelected, setCategorySelected] = useState<Category | null>(null);
  const [equipes, setEquipes] = useState<Equipe[]>([]);
  const [equipeSelected, setEquipeSelected] = useState<Equipe | null>(null);
  const [matchs, setMatchs] = useState<Match[]>([]);

  const fetchData = async () => {
    try {
      const matchsFetched = await axios.get(`${Backend_URL}/match`);
      const categoriesFetched = await axios.get(`${Backend_URL}/match-category`);
      const equipesFetched = await axios.get(`${Backend_URL}/match-team`);

      setMatchs(matchsFetched.data);
      setCategories(categoriesFetched.data);
      setCategorySelected(categoriesFetched.data[0]);
      setEquipes(equipesFetched.data);


    } catch (error) {
      console.error(error);
    }
  }

  const handleChangeCategory = (category: Category) => {
    const team = equipes.find(equipe => equipe.categoryId === category.id) || null;
    setEquipeSelected(team);
    setCategorySelected(category);
  }

  useEffect(() => {

      fetchData();

      return () => {
          // cleanup
      }
  }, []);

    return <>
      <Hero 
        title="Les matchs"
        breadcrumbs={[
          {
            title: "Accueil",
            link: "/"
          },
          {
            title: "Les matchs",
            link: "/matchs"
          }
        ]}
        image=""
      />

      <div className="news_wrapper float_left">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 d-none d-sm-none d-md-none d-lg-block d-xl-block relative" >
            
              <div className="sidebar_widget  sticky-top" style={{top: "100px"}}>
                <div className="widget_heading">
                  <h2>Categories</h2>
                </div>
                <div className="category_wrapper">
                  <ul>

                    {categories.map((category, index) => (
                      <li key={category.id} className={categorySelected?.id === category.id ? "active" : ""}>
                        <a href="javascript:void(0);" onClick={() => handleChangeCategory(category)}>
                          {category.name}
                        </a>
                      </li>
                    ))}
                    
                  </ul>
                </div>
              </div>
              
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="widget_heading">

              </div>
              <div className="row">
                    {/* Affiche l'image de l'équipe en grand puis un tableau avec les joueurs, on fait ça uniquement pour l'équipe dont la catégorie est sélectionnée */}
                    {equipeSelected && (
                      <>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="widget_heading">
                            <h2>Equipe</h2>
                          </div>
                          <div className="widget_heading">
                            <img src={`${Backend_URL}${equipeSelected.image}`} className="img-fluid w-100" />
                          </div>
                        </div>

                        {/* Separation */}
                        <div>
                          <br />
                          <br />
                        </div>


                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="widget_heading">
                            <h2>Joueurs</h2>
                          </div>
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Capitaine</th>
                              </tr>
                            </thead>
                            <tbody>
                              {equipeSelected.players.map((player, index) => (
                                <tr key={player.id}>
                                  <td>{player.name}</td>
                                  <td>{player.captain}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>  
                      </>
                    )}

                    {equipeSelected === null && (
                      <>
                        <div className="alert alert-info w-100 text-center" role="alert">
                          Veuillez sélectionner une catégorie

                        </div>
                      </> 
                    )}
                    
              </div>
            </div>



          </div>
        </div>
      </div>


    
    </>
  
}