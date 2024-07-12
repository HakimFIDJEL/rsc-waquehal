import React from 'react';
import { Button } from "@/components/forms/Button.jsx";

export function HomeInfoCard({stat, description, href}){
    return <div className="infos__container__wrapper">
    <div className="infos__container__wrapper__stat">+ { stat }</div>
    <div className="infos__container__wrapper__description">{ description }</div>
    <div className="infos__container__wrapper__button">
        <Button
            href={href}
            className="secondary-button"
        >
            En savoir plus
        </Button>
    </div>
  </div>
}