import TargetItem from 'components/TargetItem/TargetItem';
import { v4 } from 'uuid';
import { TARGETS_AMOUNT } from 'data/constants';
import s from './GamePage.module.scss';

const GamePage = () => {
  return (
    <div className={s.gamePage}>
      <div className={s.shootingRangeWrapper}>
        <div className={s.game}>
          {[...Array(TARGETS_AMOUNT)].map((val, ind) => (
            <TargetItem key={v4()} />
          ))}
          {/* <div className="hole hole1">
            <div className="trooper" />
          </div>
          <div className="hole hole2">
            <div className="trooper" />
          </div>
          <div className="hole hole3">
            <div className="trooper" />
          </div>
          <div className="hole hole4">
            <div className="trooper" />
          </div>
          <div className="hole hole5">
            <div className="trooper" />
          </div>
          <div className="hole hole6">
            <div className="trooper" />
          </div> */}
        </div>
      </div>
      <div className="metrics-wrapper">
        <h1 className="app-title">
          <i className="fab fa-jedi-order" /> Star Wars Shooting Range
        </h1>
        <div className="buttons-wrapper">
          <button className="start-button app-button" type="button">
            Start Round
          </button>
          <button className="reset-button app-button" type="button">
            Reset Game
          </button>
          <button className="reset-top-button app-button" type="button">
            Reset Stats
          </button>
        </div>
        <div className="stats-wrapper">
          <div className="stats-item">
            Round Time <span className="time-left metrics-field">10</span>
          </div>
          <div className="stats-item">
            Current Level
            <span className="metrics-field">
              <span className="game-level">1</span>/<span className="max-level">5</span>
            </span>
          </div>
          <div className="stats-item">
            Ammo Left <span className="ammo-left metrics-field">30</span>
          </div>
          <div className="stats-item">
            Targets Speed <span className="game-targets metrics-field">1.6</span>
          </div>
          <div className="stats-item">
            Round Score <span className="current-round-score metrics-field">0</span>
          </div>
          <div className="stats-item">
            Game Score <span className="score-total metrics-field">0</span>
          </div>
        </div>
        <div className="top-results">
          <h2 className="top-score-title">
            <i className="fas fa-jedi" /> Stats (this device)
          </h2>
          <div className="last-game">
            Last Game Score <span className="last-game-score metrics-field">0</span>
          </div>
          <div className="top-element-wrapper">
            <div className="cup-wrapper">
              <img src="./assets/svg/top1.svg" alt="top1" />
            </div>
            <div className="top1 top metrics-field">0</div>
          </div>
          <div className="top-element-wrapper">
            <div className="cup-wrapper">
              <img src="./assets/svg/top2.svg" alt="top2" />
            </div>
            <div className="top2 top metrics-field">0</div>
          </div>
          <div className="top-element-wrapper">
            <div className="cup-wrapper">
              <img src="./assets/svg/top3.svg" alt="top3" />
            </div>
            <div className="top3 top metrics-field">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
