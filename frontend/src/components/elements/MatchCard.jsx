"use client";
import React, { useState } from 'react';
import { useEffect } from 'react';

export function MatchCard({team1, team2, team1Logo, team2Logo, exterieur, category, team1Score, team2Score, date})
{
    const [win, setWin] = useState("");

    useEffect(() => {
        if (team1Score > team2Score) {
            setWin("winner");
        } else if (team1Score < team2Score) {
            setWin("loser");
        } else {
            setWin("equal");
        }

        return () => {
            setWin("");
        };


    }, [team1Score, team2Score]);

    const displayResult = () => {
        if (team1Score > team2Score) {
            return "Victoire";
        } else if (team1Score < team2Score) {
            return "Défaite";
        }
        return "Match nul";
    };

    const formatDate = (date) => {
        const dateObj = new Date(date);
        return `${dateObj.getDate()} / ${dateObj.getMonth()} / ${dateObj.getFullYear()}`;
    }

    return <div className="match__wrapper">
    <div className="match">
      <div className={`match__card ${win}`}>
        <div className="match__result">
            { displayResult() }
        </div>

        {exterieur &&
        
            <div className="match__content">
            <img src={team2Logo} className="match__team__logo" alt=""/>
            <div className="match__score">
                { team2Score } - { team1Score }
            </div>
            <img src={team1Logo} className="match__team__logo" alt=""/>
            </div>
        }

        {!exterieur &&

            <div className="match__content">
            <img src={team1Logo} className="match__team__logo" alt=""/>
            <div className="match__score">
                { team1Score } - { team2Score }
            </div>
            <img src={team2Logo} className="match__team__logo" alt=""/>
            </div>
        }

        {exterieur && 
            <div className="match__teams">
                    
                    <div className="match__team">{ team2 }</div>
                    <div className="match__team">{ team1 }</div>
            </div>
        }
        {!exterieur && 
            <div className="match__teams">
                    
                    <div className="match__team">{ team1 }</div>
                    <div className="match__team">{ team2 }</div>
            </div>
        }
      </div>
      <div className="match__infos">
        <div className="match__infos__category">
            {exterieur ? "Extérieur" : "Domicile"} - Catégorie { category }
        </div>
        <div className="match__infos_date">
            { formatDate(date) }
        </div>
      </div>
    </div>
  </div>
}