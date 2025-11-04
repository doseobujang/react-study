/*
Due to curly braces, you can embed some variable from your code and display in to the user.
*/

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      {/* Curly braces */}
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        // Use when your styles depend on JS variables.
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}