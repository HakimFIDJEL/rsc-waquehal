import React from 'react';

type Match = {
    id: string
    team_enemy: string
    category: Category
    score_ally: number
    score_enemy: number
    localisation: string
    status: boolean
    date: string
    createdAt: string
}

type Category = {
    id: string
    name: string
    createdAt: string
}

const getResultClass = (scoreAlly: number, scoreEnemy: number) => {
  if (scoreAlly > scoreEnemy) return 'bg-success';
  if (scoreAlly < scoreEnemy) return 'bg-danger';
  return 'bg-info';
};

const MatchDetail = ({ match, isHome }: { match: Match, isHome: boolean }) => (
  <div className="tg-matchdetail">
    <div className="tg-box">
      <h3>{isHome ? 'RSC Wasquehal' : match.team_enemy}</h3>
    </div>
    <div className='tg-box'>
      <h4 className={`${getResultClass(match.score_ally, match.score_enemy)}`} style={{width: "auto", padding: "0 20px", color: "white"}}>
        {isHome ? `${match.score_ally} - ${match.score_enemy}` : `${match.score_enemy} - ${match.score_ally}`}
      </h4>
    </div>
    <div className="tg-box">
      <strong className="tg-teamlogo2"></strong>
      <h3>{isHome ? match.team_enemy : 'RSC Wasquehal'}</h3>
    </div>
  </div>
);

const MatchCard = ({ matches }: { matches: Match[] }) => {
  return (
    <>
      {matches
        .filter(match => match.status !== false)
        .map((match, index) => (
        <div className="tg-upcomingmatch" key={index}>
          <div className="tg-match">
            <MatchDetail match={match} isHome={match.localisation === 'domicile'} />
            <div className="tg-matchdetail bg-dark" style={{ padding: "10px" }}>
              <div className="tg-box" style={{ width: "50%" }}>
                <h3 style={{ height: "auto", lineHeight: "1", color: "white", fontSize: "1rem" }}>
                  {match.category.name}
                </h3>
              </div>
              <div className="tg-box" style={{ width: "50%" }}>
                <h3 style={{ height: "auto", lineHeight: "1", color: "white", fontSize: "1rem" }}>
                  {new Date(match.date).toLocaleDateString()}
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MatchCard;