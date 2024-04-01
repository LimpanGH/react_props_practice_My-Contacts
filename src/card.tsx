type CardProps = {
  id: string;
  name: string;
  phone: string;
  email: string;
  imageUrl: string;
};

export function Card({ id, name, phone, email, imageUrl }: CardProps) {
  console.log(`Id: ${id}`);
  return (
    <div className='card'>
      <div className='top'>
        <h2>{name}</h2>
        <img src={imageUrl} alt='avatar_img' />
      </div>
      <div className='bottom'>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
