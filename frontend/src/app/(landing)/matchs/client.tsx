"use client";

import { Hero } from "@/components/u/Hero";
import { useEffect, useState } from "react";
import { Backend_URL } from "@/lib/Constant";
import axios from "axios";
import MatchCard from "@/components/u/MatchCard";


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
  const [matchsSelected, setMatchsSelected] = useState<Match[]>([]);

  const fetchData = async () => {
    try {
      const matchsFetched = await axios.get(`${Backend_URL}/match`);
      const categoriesFetched = await axios.get(`${Backend_URL}/match-category`);
      const equipesFetched = await axios.get(`${Backend_URL}/match-team`);

      setMatchs(matchsFetched.data);
      setCategories(categoriesFetched.data);
      setEquipes(equipesFetched.data);

      const matchsTeam = matchsFetched.data.filter(match => match.category.id === categoriesFetched.data[0].id);
      setMatchsSelected(matchsTeam);

      const team = equipesFetched.data.find(equipe => equipe.categoryId === categoriesFetched.data[0].id) || null;
      setEquipeSelected(team);

      setCategorySelected(categoriesFetched.data[0]);






    } catch (error) {
      console.error(error);
    }
  }

  const handleChangeCategory = (category: Category | null) => {
    const team = equipes.find(equipe => equipe.categoryId === category?.id) || null;
    console.log('team', team, 'category', category);
    setEquipeSelected(team);
    setCategorySelected(category);

    if (team) {
      const matchsTeam = matchs.filter(match => match.category.id === category?.id);
      setMatchsSelected(matchsTeam);
    }

    // scroll to top
    window.scrollTo(0, 0);

  };

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

      <div className="news_wrapper float_left" style={{marginBottom: "560px"}}>
        <div className="container">
          <div className="row">

            {/* A filter that hides in responsive */}
            <div className="col-lg-4 col-md-4 col-sm-12 d-none d-sm-none d-md-block">
              <div className="sidebar_widget" style={{position: 'sticky', top: '20px', height: 'fit-content'}}>
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


            {/* A select that appears in responsive */}
            <div className="col-lg-4 col-md-4 col-sm-12 d-block d-sm-block d-md-none">
              <div className="sidebar_widget" style={{position: 'sticky', top: '20px', height: 'fit-content'}}>
                <div className="widget_heading">
                  <h2>Categories</h2>
                </div>
                <div className="category_wrapper">
                  <select 
                    className="form-select w-100 bg-dark text-white border-0 p-2"
                    onChange={(e) => handleChangeCategory(categories.find(category => category.id === parseInt(e.target.value)) || null)}
                    
                  >
                    {categories.map((category, index) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>



            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="row">
                {equipeSelected && (
                  <>
                  {/* Image */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="widget_heading">
                        <h2>Equipe</h2>
                      </div>
                      <div className="widget_heading">
                        <img src={`${Backend_URL}${equipeSelected.image}`} className="img-fluid w-100" />
                      </div>
                    </div>

                    <div>
                      <br />
                      <br />
                    </div>

                  {/* Joueurs */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="widget_heading">
                        <h2>
                          Joueurs ({equipeSelected.players.length})
                        </h2>
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

                              {player.captain && (
                                <td>
                                  <span className="badge bg-success">Capitaine</span>
                                </td>
                              ) || (
                                <td></td>
                              )}
                                
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>  

                    <div>
                      <br />
                      <br />
                    </div>

                    {/* Matchs */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="widget_heading">
                        <h2>
                          Matchs ({matchsSelected.length})
                        </h2>
                      </div>
                      <div>

                      
                        
                      <div className="container">
                        <div className="row">


                                
                            <MatchCard matches={matchsSelected} />
                                

                        </div>


                        {matchs.length == 0 && (
                          <div className="alert alert-info w-100 text-center" role="alert">
                            Aucun match pour le moment

                          </div>
                        )}


                      </div>

                      </div>
                    </div>


                  </>
                )}

                {equipeSelected === null && (
                  <>
                    <div className="alert alert-info w-100 text-center" role="alert">
                      Aucune équipe ne correspond à cette catégorie

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