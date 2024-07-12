import React from 'react';
import { Button } from '@/components/forms/Button';

export function ActuCard ({imgSrc, date, title, href})
{
    const formatDate = (date) => {
        date = new Date(date);
        return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}. ${date.getFullYear()}`;
    }

    return <div className="news fade-in-up">
    <div className="news__img">
      <img src={imgSrc} alt="" />
    </div>
    <div className="news__description">
      <div className="news__title">{title}</div>

      <div className="news__button">
        <div className="news__date">
            { formatDate(date) }
        </div>
        <Button 
            href={href}
            className="secondary-button"
        >
            En savoir plus
        </Button>
      </div>
    </div>
  </div>
}