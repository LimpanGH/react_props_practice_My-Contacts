import { v4 as uuidV4 } from 'uuid';

import { contacts } from './contacts';
import { Card } from './card';

export function App() {
  return (
    <div>
      <h1 className='heading'>My Contacts</h1>

      {contacts.map((contact) => (
        <Card
          key={uuidV4()}
          id={uuidV4()}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          imageUrl={contact.imgURL}
        />
      ))}
    </div>
  );
}

{
  /* <div>
<h1 className="heading">My Contacts</h1>
<div className="card">
  <div className="top">
    <h2>Beyonce</h2>
    <img
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
    />
  </div>
  <div className="bottom">
    <p>+123 456 789</p>
    <p>b@beyonce.com</p>
  </div>
</div>
</div> */
}
