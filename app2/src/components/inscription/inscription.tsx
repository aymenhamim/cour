import { FC, useState } from 'react';

const Inscription: FC = () => {
  //   const [msg, setMsg] = useState('Bien venu visiteur');
  //   const [btnMsg, setBtnMsg] = useState('inscrire');
  const [isInscrit, setIsInscrit] = useState(false);

  //   const handleClick = () => {
  //     setMsg('votre inscription est effectué');
  //     setBtnMsg('Merci!');
  //   };

  return (
    <div>
      <h3>
        {isInscrit ? 'votre inscription est effectué' : 'Bienvenue visiteur'}
      </h3>
      <button onClick={() => setIsInscrit(true)}>
        {isInscrit ? 'inscrire' : 'Merci'}
      </button>
    </div>
  );
};

export default Inscription;
