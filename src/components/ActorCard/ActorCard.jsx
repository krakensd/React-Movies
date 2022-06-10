

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function ActorCard({actor}) {

  let num = getRandomNumber(375, 200)

  return (
    < <h1>{ACTOR}</h1>
     
    );
}